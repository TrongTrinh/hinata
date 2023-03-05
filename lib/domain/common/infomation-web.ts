export interface TInformationItem {
    title?: string;
    desc?: string;
    subTitle?: string;
    isBorderB?: boolean;
}

export interface IInformationItemProps extends TInformationItem {
    classWrap?: string;
    classTitle?: string;
    classDes?: string;
    classWrapTitle?: string;
    classSubTitle?: string;
}
