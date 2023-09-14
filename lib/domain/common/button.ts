/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IButtonOrangeProps {
    href?: string;
    handleClick?: any;
    className?: string;
    imgSrc?: string;
    title?: string | React.ReactNode;
    imgClass?: string;
    classTitle?: string;
    size?: string;
    children?: React.ReactNode;
    item?: any;
    marginT?: string;
    classWrapLink?: string;
}

export interface IButtonBackPageProps {
    className?: string;
    handleClick?: (item: string) => void;
    href?: string;
    name?: string;
    page?: string;
    size?: string;
    classText?: string;
}
