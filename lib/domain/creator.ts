import { IUser } from '@lib/domain/interfaces/i-user';
export interface ICreatorItemProps {
    item: IUser;
    className?: string;
    classTitle?: string;
    classCounty?: string;
    classImg?: string;
    size?: string;
}

export interface ICreatorPageProps {
    item?: IUser;
}

export interface ICreatorsListProps {
    isShowHr?: boolean;
    isShowFilter?: boolean;
    className?: string;
    classTitle?: string;
    title?: string;
    classWrappBtn?: string;
    classCreatorItem?: string;
}
