import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsObject, IsOptional, IsString, IsUUID } from 'class-validator';
import { PaymentMethod } from '../../prisma/generated/client';
export class CreatePaymentDto {
    @ApiProperty({ example: 'KKSMTRANSAKSI'})
    @IsUUID()
    orderId: string;

    @ApiProperty({ example: 'CREDIT_CARD' })
    @IsString()
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