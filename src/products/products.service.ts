import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor (private readonly prisma: PrismaService){}

    async create(createProductDto: CreateProductDto){
        return this.prisma.product.create({
            data: createProductDto,
        })
    }

    async findAll(){
        return this.prisma.product.findMany({
            orderBy:{
                createdAt: 'desc',
            }
        });
    }

    async findOne(id: number){
        const product = await this.prisma.product.findUnique({
            where: {
                id: id,
            }
        });
        if(!product){
            throw new Error(`Product with id ${id} not found`);
        }
        return product;
    }

    async update(id: number, updateProductDto: UpdateProductDto){
        await this.findOne(id);
        return this.prisma.product.update({
            where:{
                id: id,
            },
            data: updateProductDto,
        })
    }

    async remove(id:number){
        await this.findOne(id);
        return this.prisma.product.delete({
            where:{
                id: id,
            }
        })
    }
}
