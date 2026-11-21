import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/auth.decorators';
import { ShippingService } from './shipping.service';
import { CalculateShippingDto, UpdateShippingDto } from './dto';

@ApiTags('shipping')
@ApiBearerAuth()
@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post('rates')
  rates(@Body() dto: CalculateShippingDto) {
    return this.shippingService.calculateRates(dto);
  }

  @Get('order/:orderId')
  findByOrder(@Param('orderId', ParseUUIDPipe) orderId: string, @Req() req: any) {
    const isAdmin = ['ADMIN', 'SUPERADMIN'].includes(req.user.role);
    return this.shippingService.findByOrder(orderId, isAdmin ? undefined : req.user.id);
  }

  @Patch('order/:orderId')
  @Roles('ADMIN', 'SUPERADMIN')
  update(@Param('orderId', ParseUUIDPipe) orderId: string, @Body() dto: UpdateShippingDto) {
    return this.shippingService.update(orderId, dto);
  }
}