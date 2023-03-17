import { ICategory } from '@lib/domain/interfaces/i-category';
export interface ICategoryItemProps {
    item: ICategory;
    className?: string;
    classTitle?: string;
    classCounty?: string;
    classImg?: string;
    size?: string;
    linkDetail?: string;
    positionItem?: number | string;
}

export interface ICardDetailCardProps {
    item?: ICategory;
    className?: string;
    classTitle?: string;
    classCounty?: string;
    classImg?: string;
    size?: string;
    positionItem?: number;
}
export interface ICategoriesProps {
    isShowHr?: boolean;
    isShowFilter?: boolean;
    className?: string;
    classTitle?: string;
    title?: string;
    classWrappBtn?: string;
    titleBtnMobile?: string;
    linkDetail?: string;
}
