import { ApiProperty } from '@nestjs/swagger';

// Response shapes (for Swagger docs). Prisma generates the real DB types.
export class CartItemEntity {
  @ApiProperty() id: string;
  @ApiProperty() cartId: string;
  @ApiProperty() productId: number;
  @ApiProperty() quantity: number;
  @ApiProperty() createdAt: Date;
  @ApiProperty() updatedAt: Date;
}

export class CartEntity {
  @ApiProperty() id: string;
  @ApiProperty() userId: number;
  @ApiProperty({ type: [CartItemEntity] }) items: CartItemEntity[];
  @ApiProperty({ description: 'Sum of price x quantity' }) subtotal: string;
  @ApiProperty({ description: 'Total units in cart' }) itemCount: number;
  @ApiProperty() createdAt: Date;
  @ApiProperty() updatedAt: Date;
}