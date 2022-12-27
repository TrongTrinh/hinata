import { ICategory } from '@lib/domain/interfaces/i-category';
export interface ICategoryItemProps {
    item: ICategory;
    className?: string;
    classTitle?: string;
    classCounty?: string;
    classImg?: string;
    size?: string;
    positionItem?: number;
}
