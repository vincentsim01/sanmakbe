import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

// Used for: POST /cart/items (add a product to the cart)
export class CreateCartDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  productId: number;

  @ApiProperty({ minimum: 1, maximum: 99 })
  @IsInt()
  @Min(1)
  @Max(99)
  quantity: number;
}