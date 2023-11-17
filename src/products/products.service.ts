import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findAll(
    name: string = '',
    priceMin: number = -1,
    priceMax: number = -1,
    skip: number = 0,
    limit: number = 10,
  ): Promise<Product[]> {
    let query = {};
    if (name !== '') {
      query = { ...query, name: { $regex: '.*' + name + '.*' } };
    }

    if (priceMin !== -1 && priceMax !== -1) {
      query = { ...query, price: { $gte: priceMin, $lte: priceMax } };
    }

    return await this.productModel.find(query).skip(skip).limit(limit).exec();
  }
}
