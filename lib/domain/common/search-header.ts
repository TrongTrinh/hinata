export interface ISearchFilterItem {
    name: string;
    id: string;
}

export interface IRadioFilterProps {
    isActive: boolean;
    className?: string;
    item: ISearchFilterItem;
    handleClick: (item: string) => void;
}

export interface ISearchFilterItemProps {
    items: ISearchFilterItem[];
    title: string;
    className?: string;
    itemActive: string;
    handleClick: (item: string) => void;
}

export interface ISearchFilterSectionProps {
    className?: string;
}
