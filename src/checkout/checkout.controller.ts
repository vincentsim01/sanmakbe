import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto';

@ApiTags('checkout')
@ApiBearerAuth()
@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('summary')
  summary(@Req() req: any, @Body() dto: CreateCheckoutDto) {
    return this.checkoutService.summary(req.user.id, dto);
  }

  @Post()
  checkout(@Req() req: any, @Body() dto: CreateCheckoutDto) {
    return this.checkoutService.checkout(req.user.id, dto);
  }
}
