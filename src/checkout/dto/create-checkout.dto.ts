import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator';
import { ShippingAddressDto } from '../../shipping/dto';

export class CreateCheckoutDto {
  @ApiProperty({ type: ShippingAddressDto })
  @ValidateNested()
  @Type(() => ShippingAddressDto)
  shippingAddress: ShippingAddressDto;

  @ApiProperty({ example: 'JNE' })
  @IsString()
  @IsNotEmpty()
  courier: string;

  @ApiProperty({ example: 'REG' })
  @IsString()
  @IsNotEmpty()
  service: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(500)
  notes?: string;
}