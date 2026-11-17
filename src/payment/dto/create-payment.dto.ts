import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentMethod } from '@prisma/client';
import { IsEnum, IsObject, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePaymentDto {
    @ApiProperty({ example: 'KKSMTRANSAKSI'})
    @IsUUID()
    orderId: string;

    @ApiProperty({ example: PaymentMethod.CREDIT_CARD })
    @IsEnum(PaymentMethod)
    method: PaymentMethod;

    @ApiPropertyOptional({ example: 'midtrans' })
    @IsOptional()
    @IsString()
    provider?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    metadata?: Record<string, any>;
}