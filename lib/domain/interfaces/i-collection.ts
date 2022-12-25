import { Collection, Token } from '@prisma/client';
import { IProduct } from './i-product';
import { IUser } from './i-user';

export interface ICollection extends Collection {
    Product?: IProduct;
    User?: IUser;
    token?: Token;
}
