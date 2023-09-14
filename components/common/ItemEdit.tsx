/* eslint-disable @next/next/no-img-element */
import { IItemEditProps } from '@lib/domain/profile';
import classNames from 'classnames';
import React, { FC, useCallback, useRef, useState } from 'react';

const ItemEdit: FC<IItemEditProps> = ({
    defaultValue = '',
    name,
    title,
    className,
    placeholder,
    disabled = true,
    handleClick,
    classNameTitle,
    classInput,
    isTitle,
}) => {
    const [value, setValue] = useState<string>(defaultValue);
    const ref = useRef<HTMLInputElement | null>(null);
    const onClickEdit = useCallback(() => {
        handleClick(name, value, disabled);
        disabled && ref?.current?.focus();
    }, [disabled, handleClick, name, value]);

    const onChange = useCallback((event: any) => {
        setValue(event.target.value);
    }, []);

    return (
        <div
            className={classNames(
                'text-1.5 md:py-2.6 flex max-sm:flex-col relative',
                { 'py-1.4': !isTitle },
                className,
            )}
        >
            {title && <span className={classNames('text-suva-grey min-w-[14.4rem]', classNameTitle)}>{title}</span>}
            <div className='w-full relative mr-2'>
                <input
                    ref={ref}
                    className={classNames('bg-transparent w-full', { 'border rounded-lg': !disabled }, classInput)}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {disabled && <div className='absolute bg-transparent top-0 right-0 left-0 bottom-0'></div>}
            </div>
            <button
                onClick={onClickEdit}
                className='max-sm:absolute max-sm:right-0 max-sm:w-auto top-[40%] flex items-center w-[6.2rem]'
            >
                <span className='w-1.2 md:w-1.6'>
                    {disabled ? (
                        <img src='/assets/images/common/icon-edit.svg' className='w-full' alt='banner create details' />
                    ) : (
                        <img src='/assets/images/common/icon-save.svg' className='w-full' alt='banner create details' />
                    )}
                </span>

                <span className='ml-1 max-md:hidden'>{!disabled ? 'SAVE' : 'EDIT'}</span>
            </button>
        </div>
    );
};

export default ItemEdit;
