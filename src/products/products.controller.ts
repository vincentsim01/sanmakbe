import { Controller } from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {}
