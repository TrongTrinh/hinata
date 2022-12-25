import { Product, ProductStock, ProductViews, Right, Tag, Thumbnail } from '@prisma/client';
import { ICollection } from './i-collection';
import { IProductCategory } from './i-product-category';
import { IProductSponsor } from './i-product-sponsor';
import { IUser } from './i-user';

export interface IProduct extends Product {
    collections: ICollection[];
    categories: IProductCategory[];
    tag: Tag | null;
    stock: ProductStock;
    views: ProductViews;
    thumbnails: Thumbnail[];
    rights: Right[];
    owner?: IUser;
    sponsors: IProductSponsor[];
}

export type IProductHomeSlide = IProduct & {
    isShow?: boolean;
    isCurrent?: boolean;
    isPrevious?: boolean;
};
