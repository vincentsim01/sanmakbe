import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto, UpdateCartDto } from './dto';

@ApiTags('cart')
@ApiBearerAuth()
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart(@Req() req: any) {
    return this.cartService.getCart(req.user.id);
  }

  @Post('items')
  addItem(@Req() req: any, @Body() dto: CreateCartDto) {
    return this.cartService.addItem(req.user.id, dto);
  }

  @Patch('items/:itemId')
  updateItem(
    @Req() req: any,
    @Param('itemId', ParseUUIDPipe) itemId: string,
    @Body() dto: UpdateCartDto,
  ) {
    return this.cartService.updateItem(req.user.id, itemId, dto);
  }

  @Delete('items/:itemId')
  removeItem(@Req() req: any, @Param('itemId', ParseUUIDPipe) itemId: string) {
    return this.cartService.removeItem(req.user.id, itemId);
  }

  @Delete()
  clear(@Req() req: any) {
    return this.cartService.clear(req.user.id);
  }
}