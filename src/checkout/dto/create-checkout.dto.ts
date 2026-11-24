import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ShippingAddressDto } from '../../shipping/dto';

export class CreateCheckoutDto {
  @ApiPropertyOptional({
    type: [String],
    description: 'CartItem ids to check out. Omit to check out the whole cart.',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsUUID('all', { each: true })
  cartItemIds?: string[];

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