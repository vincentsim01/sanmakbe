import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../../generated/client';
import { IsEnum } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty({ enum: OrderStatus })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}