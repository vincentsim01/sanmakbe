import { BadRequestException, Injectable } from '@nestjs/common';
import { RateRequest, ShippingRate, ShippingRateProvider } from './shipping-rate.provider';

// PLACEHOLDER prices for development: they are not real courier quotes.
const BANDS = [
  { maxKg: 1, cost: 4.5 },
  { maxKg: 3, cost: 6 },
  { maxKg: 5, cost: 8 },
  { maxKg: 10, cost: 12 },
];

@Injectable()
export class FlatRateProvider extends ShippingRateProvider {
  async getRates(req: RateRequest): Promise<ShippingRate[]> {
    if (req.destinationCountry !== 'SG') {
      throw new BadRequestException('Flat rates only support delivery within Singapore');
    }
    const kg = req.items.reduce((n, i) => n + i.weightKg * i.quantity, 0);
    const band = BANDS.find((b) => kg <= b.maxKg);
    if (!band) throw new BadRequestException('Order is too heavy for flat-rate delivery');

    const currency = process.env.SHOP_CURRENCY ?? 'SGD';
    return [
      {
        courierServiceId: 'flat-standard',
        courier: 'Standard Delivery',
        service: 'Standard',
        cost: band.cost,
        currency,
        minDeliveryDays: 2,
        maxDeliveryDays: 3,
      },
      {
        courierServiceId: 'flat-nextday',
        courier: 'Next Day Delivery',
        service: 'Next Day',
        cost: band.cost + 3,
        currency,
        minDeliveryDays: 1,
        maxDeliveryDays: 1,
      },
    ];
  }
}