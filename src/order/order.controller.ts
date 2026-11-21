import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/auth.decorators';
import { OrderService } from './order.service';
import { QueryOrderDto, UpdateOrderDto } from './dto';

@ApiTags('orders')
@ApiBearerAuth()
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // my orders
  @Get()
  findMine(@Req() req: any, @Query() query: QueryOrderDto) {
    return this.orderService.findAll(query, req.user.id);
  }

  // admin: all orders (declared before :id so it isn't treated as an id)
  @Get('admin/all')
  @Roles('ADMIN', 'SUPERADMIN')
  findAll(@Query() query: QueryOrderDto) {
    return this.orderService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string, @Req() req: any) {
    const isAdmin = ['ADMIN', 'SUPERADMIN'].includes(req.user.role);
    return this.orderService.findOne(id, isAdmin ? undefined : req.user.id);
  }

  @Post(':id/cancel')
  cancel(@Param('id', ParseUUIDPipe) id: string, @Req() req: any) {
    return this.orderService.cancelOwn(id, req.user.id);
  }

  @Patch(':id/status')
  @Roles('ADMIN', 'SUPERADMIN')
  updateStatus(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateOrderDto) {
    return this.orderService.updateStatus(id, dto);
  }
}