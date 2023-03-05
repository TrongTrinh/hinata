export interface IItemEditProps {
    name: string;
    title?: string;
    className?: string;
    classNameTitle?: string;
    placeholder: string;
    disabled?: boolean;
    autoFocus?: boolean;
    defaultValue?: string;
    classInput?: string;
    handleClick: (name: string, value: string, disabled: boolean) => void;
}
