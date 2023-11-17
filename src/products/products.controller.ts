import { Controller, Get, Query } from "@nestjs/common";
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  getProduct(
    @Query('name') name: any,
    @Query('skip') skip: number,
    @Query('limit') limit: number,
  ): any {
    return this.service.findAll(name, skip, limit);
  }
}
