import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsISO31661Alpha2, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class ShippingAddressDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  recipientName: string;

  @ApiProperty({ example: '+6591234567' })
  @Matches(/^\+?[0-9]{8,15}$/, { message: 'Invalid phone number' })
  phone: string;

  @ApiProperty({ example: '10 Bayfront Avenue #01-01' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiPropertyOptional({ example: 'Singapore', description: 'Defaults to Singapore' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  province?: string;

  @ApiProperty({ example: '018956' })
  @Matches(/^[A-Za-z0-9 -]{4,10}$/, { message: 'Invalid postal code' })
  postalCode: string;

  @ApiPropertyOptional({ example: 'SG', description: 'ISO country code, defaults to SG' })
  @IsOptional()
  @IsISO31661Alpha2()
  country?: string;
}