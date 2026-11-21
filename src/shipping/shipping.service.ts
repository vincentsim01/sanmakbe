import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { OrderStatus, ShipmentStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service'; // adjust path
import { CalculateShippingDto, UpdateShippingDto } from './dto';

// Static flat rates (IDR per kg). Replace with RajaOngkir / courier API later.
const RATES = [
  { courier: 'JNE', service: 'REG', ratePerKg: 9000, etaDays: '2-3' },
  { courier: 'JNE', service: 'YES', ratePerKg: 18000, etaDays: '1' },
  { courier: 'JNT', service: 'EZ', ratePerKg: 8500, etaDays: '2-4' },
  { courier: 'SICEPAT', service: 'REG', ratePerKg: 8500, etaDays: '2-3' },
];

@Injectable()
export class ShippingService {
  constructor(private readonly prisma: PrismaService) {}

  calculateRates(dto: CalculateShippingDto) {
    const kg = Math.ceil((dto.weightGrams ?? 1000) / 1000);
    return RATES.map((r) => ({
      courier: r.courier,
      service: r.service,
      cost: r.ratePerKg * kg,
      etaDays: r.etaDays,
    }));
  }

  /** Used by checkout to price the courier/service the customer picked. */
  getRate(courier: string, service: string, destinationCity: string, weightGrams: number) {
    const rate = this.calculateRates({ destinationCity, weightGrams }).find(
      (r) => r.courier === courier && r.service === service,
    );
    if (!rate) throw new BadRequestException('Unsupported courier or service');
    return rate;
  }

  async findByOrder(orderId: string, userId?: string) {
    const shipment = await this.prisma.shipment.findFirst({
      where: { orderId, ...(userId && { order: { userId } }) },
    });
    if (!shipment) throw new NotFoundException('Shipment not found');
    return shipment;
  }

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

      // keep order status in sync
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
}