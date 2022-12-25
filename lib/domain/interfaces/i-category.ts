import { Category, Product } from '@prisma/client';

export interface ICategory extends Category {
    products: products[];
}

interface products {
    Product?: Product;
    categoryId?: string;
    created?: Date;
    id?: string;
    productId?: string;
    updated?: Date;
    userId?: string;
}
