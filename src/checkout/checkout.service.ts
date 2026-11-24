import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '../../prisma/generated/client';
import { randomBytes } from 'crypto';
import { PrismaService } from '../prisma/prisma.service'; // adjust path
import { ShippingService } from '../shipping/shipping.service';
import { CreateCheckoutDto } from './dto';

const DEFAULT_ITEM_WEIGHT_G = 500; // TODO: use a real product weight field

@Injectable()
export class CheckoutService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly shippingService: ShippingService,
  ) {}

  /** Preview totals without creating anything. */
  async summary(userId: number, dto: CreateCheckoutDto) {
    const { items, subtotal, rate, total } = await this.buildQuote(userId, dto);
    return {
      items: items.map((i) => ({
        productId: i.productId,
        name: i.product.name,
        unitPrice: i.product.price,
        quantity: i.quantity,
        subtotal: i.product.price.mul(i.quantity),
      })),
      subtotal,
      shipping: rate,
      total,
    };
  }

  /** Turn the cart into an order (status PENDING_PAYMENT). Pay via POST /payments afterwards. */
  async checkout(userId: number, dto: CreateCheckoutDto) {
    const { items, subtotal, rate, total } = await this.buildQuote(userId, dto);

    return this.prisma.$transaction(async (tx) => {
      // atomic stock decrement; fails if someone else bought the last unit
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
          shippingCost: new Prisma.Decimal(rate.cost),
          totalAmount: total,
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
          shipment: {
            create: {
              courier: rate.courier,
              service: rate.service,
              cost: new Prisma.Decimal(rate.cost),
              ...dto.shippingAddress,
            },
          },
        },
        include: { items: true, shipment: true },
      });

      // remove only the items that were checked out
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

    // checkout only the selected cart items (or everything if none were chosen)
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
    const totalQty = selected.reduce((n, i) => n + i.quantity, 0);
    const rate = this.shippingService.getRate(
      dto.courier,
      dto.service,
      dto.shippingAddress.city,
      totalQty * DEFAULT_ITEM_WEIGHT_G,
    );

    return {
      cartId: cart.id,
      items: selected,
      subtotal,
      rate,
      total: subtotal.add(rate.cost),
    };
  }

  private generateOrderNumber() {
    const d = new Date();
    const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    return `ORD-${ymd}-${randomBytes(3).toString('hex').toUpperCase()}`;
  }
}
