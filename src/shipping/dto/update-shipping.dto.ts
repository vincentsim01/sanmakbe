import { ApiPropertyOptional } from '@nestjs/swagger';
import { ShipmentStatus } from '../../generated/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateShippingDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  trackingNumber?: string;

  @ApiPropertyOptional({ enum: ShipmentStatus })
  @IsOptional()
  @IsEnum(ShipmentStatus)
  status?: ShipmentStatus;
}
