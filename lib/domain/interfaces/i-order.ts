import { Order } from '@prisma/client';
import { IProduct } from './i-product';

export interface IOrder extends Order {
  Product: IProduct;
}
