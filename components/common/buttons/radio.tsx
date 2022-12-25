import { IRadioFilterProps } from '@lib/domain/common/search-header';
import classNames from 'classnames';
import React, { FC } from 'react';

const RadioFilter: FC<IRadioFilterProps> = ({ isActive, text, className }) => {
    return (
        <div className={classNames('flex items-center text-1.4', className)}>
            <span className='block border rounded-full border-white mr-0.5 '>
                {isActive && <span className='bg-white block w-0.7 h-0.7 rounded-full m-0.2'></span>}
            </span>
            <span>{text}</span>
        </div>
    );
};

export default RadioFilter;
