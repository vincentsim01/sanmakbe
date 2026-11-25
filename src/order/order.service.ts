import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { OrderStatus, Prisma } from '../generated/client';
import { PrismaService } from '../prisma/prisma.service'; // adjust path
import { QueryOrderDto, UpdateOrderDto } from './dto';

const TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  PENDING_PAYMENT: ['PAID', 'CANCELLED'],
  PAID: ['PROCESSING', 'CANCELLED'],
  PROCESSING: ['SHIPPED', 'CANCELLED'],
  SHIPPED: ['DELIVERED'],
  DELIVERED: ['COMPLETED'],
  COMPLETED: [],
  CANCELLED: [],
};

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  /** userId = undefined means admin view (all orders). */
  async findAll(query: QueryOrderDto, userId?: number) {
    const { status, page, limit } = query;
    const where: Prisma.OrderWhereInput = { ...(userId && { userId }), ...(status && { status }) };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.order.findMany({
        where,
        include: { items: true, shipment: true },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.order.count({ where }),
    ]);
    return { data, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(id: string, userId?: number) {
    const order = await this.prisma.order.findFirst({
      where: { id, ...(userId && { userId }) },
      include: { items: true, shipment: true, payments: true },
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  /** Customer cancels their own unpaid order. */
  async cancelOwn(id: string, userId: number) {
    const order = await this.findOne(id, userId);
    if (order.status !== OrderStatus.PENDING_PAYMENT) {
      throw new BadRequestException('Only unpaid orders can be cancelled');
    }
    return this.cancelAndRestock(id);
  }

  /** Admin status change. */
  async updateStatus(id: string, dto: UpdateOrderDto) {
    const order = await this.findOne(id);
    if (!TRANSITIONS[order.status].includes(dto.status)) {
      throw new BadRequestException(`Cannot change status from ${order.status} to ${dto.status}`);
    }
    if (dto.status === OrderStatus.CANCELLED) return this.cancelAndRestock(id);
    return this.prisma.order.update({ where: { id }, data: { status: dto.status } });
  }

  /** Call this from PaymentService when a payment becomes PAID. */
  async markPaid(orderId: string) {
    await this.prisma.order.updateMany({
      where: { id: orderId, status: OrderStatus.PENDING_PAYMENT },
      data: { status: OrderStatus.PAID },
    });
  }

  private cancelAndRestock(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const items = await tx.orderItem.findMany({ where: { orderId: id } });
      for (const i of items) {
        await tx.product.update({
          where: { id: i.productId },
          data: { quantity: { increment: i.quantity } },
        });
      }
      return tx.order.update({ where: { id }, data: { status: OrderStatus.CANCELLED } });
    });
  }
}