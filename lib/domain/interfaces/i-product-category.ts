import { Category } from '@prisma/client';

export interface IProductCategory {
    Category: Category;
    id: string;
    productId: string;
    categoryId: string;
    created: Date;
    updated: Date;
}
