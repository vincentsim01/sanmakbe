import { ApiProperty } from '@nestjs/swagger';
import { ShipmentStatus } from '@prisma/client';

// Response shapes (for Swagger docs). Prisma generates the real DB types.
export class ShippingRateEntity {
  @ApiProperty({ example: 'JNE' }) courier: string;
  @ApiProperty({ example: 'REG' }) service: string;
  @ApiProperty({ description: 'Cost in IDR' }) cost: number;
  @ApiProperty({ example: '2-3' }) etaDays: string;
}

export class ShipmentEntity {
  @ApiProperty() id: string;
  @ApiProperty() orderId: string;
  @ApiProperty() courier: string;
  @ApiProperty() service: string;
  @ApiProperty() cost: string;
  @ApiProperty({ required: false }) trackingNumber?: string;
  @ApiProperty({ enum: ShipmentStatus }) status: ShipmentStatus;
  @ApiProperty() recipientName: string;
  @ApiProperty() phone: string;
  @ApiProperty() address: string;
  @ApiProperty() city: string;
  @ApiProperty() province: string;
  @ApiProperty() postalCode: string;
  @ApiProperty({ required: false }) shippedAt?: Date;
  @ApiProperty({ required: false }) deliveredAt?: Date;
}