import { IRadioFilterProps } from '@lib/domain/common/search-header';
import classNames from 'classnames';
import React, { FC, useCallback } from 'react';

const RadioFilter: FC<IRadioFilterProps> = ({ isActive, className, handleClick, item }) => {
    const onClick = useCallback(() => {
        handleClick && handleClick(item.id);
    }, [handleClick, item]);
    return (
        <div className={classNames('flex items-center text-1.4 cursor-pointer', className)} onClick={onClick}>
            <div className='flex border rounded-full border-white mr-0.5 w-[1.3rem] h-[1.3rem] justify-center items-center  '>
                {isActive && <div className='bg-white block w-0.7 h-0.7 rounded-full'></div>}
            </div>
            <span>{item.name}</span>
        </div>
    );
};

export default RadioFilter;
