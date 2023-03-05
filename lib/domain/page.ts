import { ICategory } from '@lib/domain//interfaces/i-category';
import { ISearchFilterItem } from '@lib/domain/common/search-header';
export interface IPageBannerProps {
    title: string | React.ReactNode;
    className?: string;
    classNameTitle?: string;
}

export interface IPageFilterProps {
    items: ISearchFilterItem[];
    className?: string;
    itemActive?: string;
    handleClick: (item: string) => void;
    isShowDropdownRight?: boolean;
    titleBtnMobile?: string;
}

export interface IPageProps {
    className?: string;
    children: React.ReactNode;
}

export interface ITokenHistoryProps {
    title?: string;
    className?: string;
    classTitle?: string;
    classWrappBtn?: string;
}

export interface IListWorkProps {
    items: ICategory[];
    className?: string;
    classTitle?: string;
    title?: string;
    pageTitle?: string;
    classWrapBtn?: string;
    classBtnBack?: string;
    isShowBtnBack?: boolean;
}

export interface ICardInfoBlackUserProps {
    isShowHeartNumber?: boolean;
}
