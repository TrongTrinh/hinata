import { ISearchFilterItem } from '@lib/domain/common/search-header';
export interface IPageBannerProps {
    title: string;
    className?: string;
}

export interface IPageFilterProps {
    items: ISearchFilterItem[];
    className?: string;
    itemActive?: string;
    handleClick: (item: string) => void;
}

export interface IPageProps {
    className?: string;
    children: React.ReactNode;
}
