
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { Roles } from '../auth/auth.decorators';
import { Role } from '../generated/client';

import {
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    @Roles(Role.ADMIN, Role.SUPERADMIN)
    @ApiOperation({ description: 'Create a new product', summary: 'Create Product'})
    create(@Body() createProductDto: CreateProductDto){
        return this.productsService.create(createProductDto);
    }

    @Get()
    @ApiOperation({ description: 'Get all products', summary: 'Get Products'})
    findAll(){
        return this.productsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ description: 'Get a product by ID', summary: 'Get Product'})
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    @Roles(Role.ADMIN, Role.SUPERADMIN)
    @ApiOperation({ description: 'Update a product by ID', summary: 'Update Product'})
    update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto){
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    @Roles(Role.ADMIN, Role.SUPERADMIN)
    @ApiOperation({ description: 'Delete a product by ID', summary: 'Delete Product'})
    remove(@Param('id', ParseIntPipe) id: number){
        return this.productsService.remove(id);
    }
}
