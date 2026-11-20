import { ApiProperty } from '@nestjs/swagger';

// Response shapes (for Swagger docs). Prisma generates the real DB types.
export class CheckoutItemEntity {
  @ApiProperty() productId: string;
  @ApiProperty() name: string;
  @ApiProperty() unitPrice: string;
  @ApiProperty() quantity: number;
  @ApiProperty() subtotal: string;
}

export class CheckoutShippingEntity {
  @ApiProperty() courier: string;
  @ApiProperty() service: string;
  @ApiProperty() cost: number;
  @ApiProperty() etaDays: string;
}

export class CheckoutSummaryEntity {
  @ApiProperty({ type: [CheckoutItemEntity] }) items: CheckoutItemEntity[];
  @ApiProperty() subtotal: string;
  @ApiProperty({ type: CheckoutShippingEntity }) shipping: CheckoutShippingEntity;
  @ApiProperty() total: string;
}
