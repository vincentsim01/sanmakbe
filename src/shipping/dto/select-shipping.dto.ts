import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SelectShippingRateDto {
  @ApiProperty({ description: 'courierServiceId from GET /shipping/order/:orderId/rates' })
  @IsString()
  @IsNotEmpty()
  courierServiceId: string;
}