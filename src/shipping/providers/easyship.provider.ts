import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { RateRequest, ShippingRate, ShippingRateProvider } from './shipping-rate.provider';

/**
 * Live rates from Easyship (aggregates Ninja Van, SingPost, J&T, Aramex, ...).
 * Field names follow Easyship's 2024-09 "Request rates" API. Verify them (and the
 * base URL) against https://developers.easyship.com/reference/rates before going live.
 */
@Injectable()
export class EasyshipProvider extends ShippingRateProvider {
  private readonly logger = new Logger(EasyshipProvider.name);

  async getRates(req: RateRequest): Promise<ShippingRate[]> {
    const token = process.env.EASYSHIP_API_TOKEN;
    if (!token) throw new ServiceUnavailableException('EASYSHIP_API_TOKEN is not set');
    if (!req.originPostalCode) {
      throw new ServiceUnavailableException('SHOP_POSTAL_CODE is not set');
    }

    const baseUrl = process.env.EASYSHIP_API_URL ?? 'https://public-api.easyship.com/2024-09';
    const currency = process.env.SHOP_CURRENCY ?? 'SGD';
    const category = process.env.EASYSHIP_ITEM_CATEGORY ?? 'fashion';
    const totalWeight = req.items.reduce((n, i) => n + i.weightKg * i.quantity, 0);

    const body = {
      origin_address: {
        country_alpha2: req.originCountry,
        postal_code: req.originPostalCode,
      },
      destination_address: {
        country_alpha2: req.destinationCountry,
        postal_code: req.destinationPostalCode,
        city: req.destinationCity,
      },
      incoterms: 'DDU',
      insurance: { is_insured: false },
      shipping_settings: { units: { weight: 'kg', dimensions: 'cm' } },
      parcels: [
        {
          total_actual_weight: Number(totalWeight.toFixed(3)),
          items: req.items.map((i) => ({
            description: i.description,
            category,
            declared_currency: currency,
            declared_customs_value: i.valuePerUnit,
            actual_weight: i.weightKg,
            quantity: i.quantity,
          })),
        },
      ],
    };

    const res = await fetch(`${baseUrl}/rates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      this.logger.error(`Easyship ${res.status}: ${text}`);
      if (res.status === 400 || res.status === 422) {
        throw new BadRequestException('Shipping provider rejected the address or parcel details');
      }
      throw new BadGatewayException('Could not get shipping rates right now');
    }

    const data: any = await res.json();
    return (data.rates ?? [])
      .map(
        (r: any): ShippingRate => ({
          courierServiceId: r.courier_service?.id,
          courier: r.courier_service?.umbrella_name ?? r.courier_service?.name,
          service: r.courier_service?.name,
          cost: Number(r.total_charge),
          currency: r.currency ?? currency,
          minDeliveryDays: r.min_delivery_time,
          maxDeliveryDays: r.max_delivery_time,
        }),
      )
      .filter((r: ShippingRate) => r.courierServiceId && Number.isFinite(r.cost))
      .sort((a: ShippingRate, b: ShippingRate) => a.cost - b.cost);
  }
}