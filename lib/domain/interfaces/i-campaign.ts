import { Campaign } from '@prisma/client';
import { IProduct } from './i-product';

export interface ICampaign extends Campaign {
  Product: IProduct;
}
