import { IProduct } from './i-product';
import { IUser } from './i-user';

export interface IProductWithOwner extends IProduct {
  owner: IUser;
}
