import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '../generated/client';
import { randomBytes } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCheckoutDto } from './dto';

@Injectable()
export class CheckoutService {
  constructor(private readonly prisma: PrismaService) {}

  /** Preview the items and subtotal. Shipping is added after the order exists. */
  async summary(userId: number, dto: CreateCheckoutDto) {
    const { items, subtotal } = await this.buildQuote(userId, dto);
    return {
      items: items.map((i) => ({
        productId: i.productId,
        name: i.product.name,
        unitPrice: i.product.price,
        quantity: i.quantity,
        subtotal: i.product.price.mul(i.quantity),
      })),
      subtotal,
    };
  }

  /**
   * Cart -> order (PENDING_PAYMENT) with the shipping address saved.
   * Shipping cost is 0 until the customer picks an option:
   *   GET  /shipping/order/:id/rates
   *   POST /shipping/order/:id/select
   */
  async checkout(userId: number, dto: CreateCheckoutDto) {
    const { items, subtotal } = await this.buildQuote(userId, dto);

    return this.prisma.$transaction(async (tx) => {
      for (const item of items) {
        const res = await tx.product.updateMany({
          where: { id: item.productId, quantity: { gte: item.quantity } },
          data: { quantity: { decrement: item.quantity } },
        });
        if (res.count === 0) {
          throw new BadRequestException(`Insufficient stock for ${item.product.name}`);
        }
      }

      const order = await tx.order.create({
        data: {
          orderNumber: this.generateOrderNumber(),
          userId,
          subtotal,
          shippingCost: 0,
          totalAmount: subtotal,
          currency: process.env.SHOP_CURRENCY ?? 'SGD',
          notes: dto.notes,
          items: {
            create: items.map((i) => ({
              productId: i.productId,
              productName: i.product.name,
              unitPrice: i.product.price,
              quantity: i.quantity,
              subtotal: i.product.price.mul(i.quantity),
            })),
          },
          // courier / service / cost stay empty until a rate is selected
          shipment: { create: { ...dto.shippingAddress } },
        },
        include: { items: true, shipment: true },
      });

      await tx.cartItem.deleteMany({ where: { id: { in: items.map((i) => i.id) } } });
      return order;
    });
  }

  private async buildQuote(userId: number, dto: CreateCheckoutDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } },
    });
    if (!cart || cart.items.length === 0) throw new BadRequestException('Cart is empty');

    let selected = cart.items;
    if (dto.cartItemIds?.length) {
      const ids = new Set(dto.cartItemIds);
      selected = cart.items.filter((i) => ids.has(i.id));
      if (selected.length !== ids.size) {
        throw new BadRequestException('Some selected items are not in your cart');
      }
    }

    for (const item of selected) {
      if (item.quantity > item.product.quantity) {
        throw new BadRequestException(`Insufficient stock for ${item.product.name}`);
      }
    }

    const subtotal = selected.reduce(
      (sum, i) => sum.add(i.product.price.mul(i.quantity)),
      new Prisma.Decimal(0),
    );
    return { items: selected, subtotal };
  }

  private generateOrderNumber() {
    const d = new Date();
    const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    return `ORD-${ymd}-${randomBytes(3).toString('hex').toUpperCase()}`;
  }
}