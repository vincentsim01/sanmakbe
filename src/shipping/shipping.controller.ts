import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // adjust path
import { RolesGuard } from '../auth/guards/roles.guard'; // adjust path
import { Roles } from '../auth/decorators/roles.decorator'; // adjust path
import { ShippingService } from './shipping.service';
import { SelectShippingRateDto, UpdateShippingDto } from './dto';

const isAdmin = (req: any) => ['ADMIN', 'SUPERADMIN'].includes(req.user.role);

@ApiTags('shipping')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  // list shipping options for an existing order
  @Get('order/:orderId/rates')
  rates(@Param('orderId', ParseUUIDPipe) orderId: string, @Req() req: any) {
    return this.shippingService.getRatesForOrder(orderId, isAdmin(req) ? undefined : req.user.id);
  }

  // choose one option; adds the shipping cost to the order
  @Post('order/:orderId/select')
  select(
    @Param('orderId', ParseUUIDPipe) orderId: string,
    @Body() dto: SelectShippingRateDto,
    @Req() req: any,
  ) {
    return this.shippingService.selectRate(orderId, isAdmin(req) ? undefined : req.user.id, dto);
  }

  @Get('order/:orderId')
  findByOrder(@Param('orderId', ParseUUIDPipe) orderId: string, @Req() req: any) {
    return this.shippingService.findByOrder(orderId, isAdmin(req) ? undefined : req.user.id);
  }

  @Patch('order/:orderId')
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN')
  update(@Param('orderId', ParseUUIDPipe) orderId: string, @Body() dto: UpdateShippingDto) {
    return this.shippingService.update(orderId, dto);
  }
}