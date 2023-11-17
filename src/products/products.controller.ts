import { Controller, Get, Query } from "@nestjs/common";
import { ProductsService } from './products.service';
import { Product } from "../models/product";

@Controller('api/products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  async getProduct(
    @Query('name') name: any,
    @Query('skip') skip: number,
    @Query('limit') limit: number,
    @Query('priceMin') priceMin: number,
    @Query('priceMax') priceMax: number,
    @Query('type') type: string,
  ): Promise<Product[]> {
    return this.service.findAll(name, priceMin, priceMax, type, skip, limit);
  }
}
