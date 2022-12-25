export interface IRadioFilterProps {
    isActive: boolean;
    text: string;
    className?: string;
}

export interface ISearchFilterItem {
    name: string;
    id: string;
}

export interface ISearchFilterItemProps {
    items: ISearchFilterItem[];
    title: string;
    className?: string;
}
