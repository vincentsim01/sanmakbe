import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { EasyshipProvider } from './providers/easyship.provider';
import { FlatRateProvider } from './providers/flat-rate.provider';
import { ShippingRateProvider } from './providers/shipping-rate.provider';

@Module({
  imports: [PrismaModule],
  controllers: [ShippingController],
  providers: [
    EasyshipProvider,
    FlatRateProvider,
    {
      // chosen at startup, after .env is loaded: SHIPPING_PROVIDER=easyship | flat
      provide: ShippingRateProvider,
      useFactory: (easyship: EasyshipProvider, flat: FlatRateProvider) =>
        process.env.SHIPPING_PROVIDER === 'easyship' ? easyship : flat,
      inject: [EasyshipProvider, FlatRateProvider],
    },
    ShippingService,
  ],
  exports: [ShippingService],
})
export class ShippingModule {}