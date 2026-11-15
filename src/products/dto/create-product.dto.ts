import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ArrayNotEmpty,
  IsNumber,
  IsInt,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Premium Cotton Socks', description: 'Name of the product' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Soft and comfortable cotton socks', description: 'Description of the product' })
  @IsString()
  description: string;

  @ApiProperty({ example: 9.99, description: 'Price of the product' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @ApiProperty({ example: 100, description: 'Quantity of the product in stock', minimum: 0 })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  quantity: number;

  @ApiProperty({ example: 'Red', description: 'Color of the product' })
  @IsString()
  color: string;

  @ApiProperty({example: 'cotton', description: 'Material of the product'})
  @IsString()
  material: string;

  @ApiProperty({ example: "Mata Kaki", description: 'size of the product'})
  @IsString()
  size: string;

  @ApiProperty({ example: 'anti-slip dotting', description: 'product feature'})
  @IsArray()
  feature: string[];
}