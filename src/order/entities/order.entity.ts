import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '@prisma/client';

// Response shapes (for Swagger docs). Prisma generates the real DB types.
export class OrderItemEntity {
  @ApiProperty() id: string;
  @ApiProperty() productId: string;
  @ApiProperty() productName: string;
  @ApiProperty() unitPrice: string;
  @ApiProperty() quantity: number;
  @ApiProperty() subtotal: string;
}

export class OrderEntity {
  @ApiProperty() id: string;
  @ApiProperty() orderNumber: string;
  @ApiProperty() userId: string;
  @ApiProperty({ enum: OrderStatus }) status: OrderStatus;
  @ApiProperty() subtotal: string;
  @ApiProperty() shippingCost: string;
  @ApiProperty() discount: string;
  @ApiProperty() totalAmount: string;
  @ApiProperty() currency: string;
  @ApiProperty({ required: false }) notes?: string;
  @ApiProperty({ type: [OrderItemEntity] }) items: OrderItemEntity[];
  @ApiProperty() createdAt: Date;
  @ApiProperty() updatedAt: Date;
}