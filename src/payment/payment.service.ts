    const order = await this.prisma.order.findUnique({
      where: { id: dto.orderId },
      include: { shipment: true },
    });
    if (!order) throw new NotFoundException('Order not found');
    if (!order.shipment?.courierServiceId) {
      throw new BadRequestException('Select a shipping option before paying');
    }