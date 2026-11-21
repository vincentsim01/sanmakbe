import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../prisma/generated/client';
import { PrismaService } from '../prisma/prisma.service'; // adjust path
import { CreateCartDto, UpdateCartDto } from './dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async getCart(userId: number) {
    const cart = await this.prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
      include: {
        items: { include: { product: true }, orderBy: { createdAt: 'asc' } },
      },
    });

    const subtotal = cart.items.reduce(
      (sum, i) => sum.add(i.product.price.mul(i.quantity)),
      new Prisma.Decimal(0),
    );
    const itemCount = cart.items.reduce((n, i) => n + i.quantity, 0);
    return { ...cart, subtotal, itemCount };
  }

  async addItem(userId: number, dto: CreateCartDto) {
    const product = await this.prisma.product.findUnique({ where: { id: dto.productId } });
    if (!product) throw new NotFoundException('Product not found');

    const cart = await this.prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });

    const existing = await this.prisma.cartItem.findUnique({
      where: { cartId_productId: { cartId: cart.id, productId: dto.productId } },
    });
    const quantity = (existing?.quantity ?? 0) + dto.quantity;
    if (quantity > product.quantity) throw new BadRequestException('Insufficient stock');

    await this.prisma.cartItem.upsert({
      where: { cartId_productId: { cartId: cart.id, productId: dto.productId } },
      update: { quantity },
      create: { cartId: cart.id, productId: dto.productId, quantity },
    });
    return this.getCart(userId);
  }

  async updateItem(userId: number, itemId: string, dto: UpdateCartDto) {
    const item = await this.prisma.cartItem.findFirst({
      where: { id: itemId, cart: { userId } },
      include: { product: true },
    });
    if (!item) throw new NotFoundException('Cart item not found');
    if (dto.quantity > item.product.quantity) throw new BadRequestException('Insufficient stock');

    await this.prisma.cartItem.update({ where: { id: itemId }, data: { quantity: dto.quantity } });
    return this.getCart(userId);
  }

  async removeItem(userId: number, itemId: string) {
    const item = await this.prisma.cartItem.findFirst({ where: { id: itemId, cart: { userId } } });
    if (!item) throw new NotFoundException('Cart item not found');

    await this.prisma.cartItem.delete({ where: { id: itemId } });
    return this.getCart(userId);
  }

  async clear(userId: number) {
    await this.prisma.cartItem.deleteMany({ where: { cart: { userId } } });
    return this.getCart(userId);
  }
}