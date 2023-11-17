import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findAll(
    name: string = '',
    skip: number = 0,
    limit: number = 10,
  ): Promise<any> {
    if (name === '') {
      return await this.productModel.find().skip(skip).limit(limit).exec();
    }
    return await this.productModel
      .find({ name: { $regex: '.*' + name + '.*' } })
      .skip(skip)
      .limit(limit)
      .exec();
  }
}
