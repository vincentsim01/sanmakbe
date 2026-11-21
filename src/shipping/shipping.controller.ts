import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // adjust path
import { RolesGuard } from '../auth/guards/roles.guard'; // adjust path
import { Roles } from '../auth/decorators/roles.decorator'; // adjust path
import { ShippingService } from './shipping.service';
import { CalculateShippingDto, UpdateShippingDto } from './dto';

@ApiTags('shipping')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN')
  update(@Param('orderId', ParseUUIDPipe) orderId: string, @Body() dto: UpdateShippingDto) {
    return this.shippingService.update(orderId, dto);
  }
}