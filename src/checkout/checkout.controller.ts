import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // adjust path
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto';

@ApiTags('checkout')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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