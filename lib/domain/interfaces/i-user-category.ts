import { Category } from '@prisma/client';

export interface IUserCategory {
    Category: Category | null;
    categoryId?: string | null;
    created?: Date;
    id?: string;
    productId?: string;
    updated?: Date;
    userId?: string;
}
