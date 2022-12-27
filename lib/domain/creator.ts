import { IUser } from '@lib/domain/interfaces/i-user';
export interface ICreatorItemProps {
    item: IUser;
    className?: string;
    classTitle?: string;
    classCounty?: string;
    classImg?: string;
    size?: string;
}
