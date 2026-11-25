import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { OrderStatus, PaymentStatus, Prisma, ShipmentStatus } from '../generated/client';
import { PrismaService } from '../prisma/prisma.service';
import { SelectShippingRateDto, UpdateShippingDto } from './dto';
import { ShippingRateProvider } from './providers/shipping-rate.provider';

@Injectable()
export class ShippingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rateProvider: ShippingRateProvider,
  ) {}

  /** Step 2 of the flow: list shipping options for an order that already exists. */
  async getRatesForOrder(orderId: string, userId?: number) {
    const order = await this.loadOrder(orderId, userId);
    return this.fetchRates(order);
  }

  /** Step 3: customer picks one option; the cost is added to the order total. */
  async selectRate(orderId: string, userId: number | undefined, dto: SelectShippingRateDto) {
    const order = await this.loadOrder(orderId, userId);

    if (order.status !== OrderStatus.PENDING_PAYMENT) {
      throw new BadRequestException('Shipping can only be changed on unpaid orders');
    }
    const activePayment = await this.prisma.payment.findFirst({
      where: { orderId, status: { in: [PaymentStatus.PENDING, PaymentStatus.PAID] } },
    });
    if (activePayment) {
      throw new BadRequestException('A payment already exists for this order');
    }

    // fetch again and use OUR price, never a price sent by the client
    const rates = await this.fetchRates(order);
    const rate = rates.find((r) => r.courierServiceId === dto.courierServiceId);
    if (!rate) throw new BadRequestException('That shipping option is no longer available');
    if (rate.currency.toUpperCase() !== order.currency.toUpperCase()) {
      throw new BadRequestException(
        `Rate currency (${rate.currency}) does not match the order currency (${order.currency})`,
      );
    }

    const cost = new Prisma.Decimal(rate.cost.toFixed(2));
    return this.prisma.$transaction(async (tx) => {
      await tx.shipment.update({
        where: { orderId },
        data: {
          courier: rate.courier,
          service: rate.service,
          courierServiceId: rate.courierServiceId,
          cost,
        },
      });
      return tx.order.update({
        where: { id: orderId },
        data: {
          shippingCost: cost,
          totalAmount: order.subtotal.sub(order.discount).add(cost),
        },
        include: { items: true, shipment: true },
      });
    });
  }

  async findByOrder(orderId: string, userId?: number) {
    const shipment = await this.prisma.shipment.findFirst({
      where: { orderId, ...(userId && { order: { userId } }) },
    });
    if (!shipment) throw new NotFoundException('Shipment not found');
    return shipment;
  }

  /** Admin: tracking number and delivery status. */
  async update(orderId: string, dto: UpdateShippingDto) {
    const shipment = await this.findByOrder(orderId);

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.shipment.update({
        where: { id: shipment.id },
        data: {
          trackingNumber: dto.trackingNumber,
          status: dto.status,
          shippedAt:
            !shipment.shippedAt &&
            (dto.status === ShipmentStatus.PICKED_UP || dto.status === ShipmentStatus.IN_TRANSIT)
              ? new Date()
              : undefined,
          deliveredAt: dto.status === ShipmentStatus.DELIVERED ? new Date() : undefined,
        },
      });

      if (dto.status === ShipmentStatus.PICKED_UP || dto.status === ShipmentStatus.IN_TRANSIT) {
        await tx.order.updateMany({
          where: { id: orderId, status: { in: [OrderStatus.PAID, OrderStatus.PROCESSING] } },
          data: { status: OrderStatus.SHIPPED },
        });
      } else if (dto.status === ShipmentStatus.DELIVERED) {
        await tx.order.updateMany({
          where: { id: orderId, status: OrderStatus.SHIPPED },
          data: { status: OrderStatus.DELIVERED },
        });
      }
      return updated;
    });
  }

  private async loadOrder(orderId: string, userId?: number) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, ...(userId && { userId }) },
      include: { items: { include: { product: true } }, shipment: true },
    });
    if (!order) throw new NotFoundException('Order not found');
    if (!order.shipment) throw new BadRequestException('Order has no shipping address');
    return order;
  }

  private fetchRates(order: Awaited<ReturnType<ShippingService['loadOrder']>>) {
    const s = order.shipment!;
    return this.rateProvider.getRates({
      originCountry: process.env.SHOP_COUNTRY ?? 'SG',
      originPostalCode: process.env.SHOP_POSTAL_CODE ?? '',
      destinationCountry: s.country,
      destinationPostalCode: s.postalCode,
      destinationCity: s.city,
      items: order.items.map((i) => ({
        description: i.productName,
        quantity: i.quantity,
        weightKg: i.product.weightGrams / 1000,
        valuePerUnit: Number(i.unitPrice),
      })),
    });
  }
}