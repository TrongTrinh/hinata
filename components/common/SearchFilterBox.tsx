import RadioFilter from '@components/common/buttons/radio';
import { ISearchFilterItem, ISearchFilterItemProps, ISearchFilterSectionProps } from '@lib/domain/common/search-header';
import { default as classnames, default as classNames } from 'classnames';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { FC, useCallback, useState } from 'react';

const SearchFilterItem = ({ items, title, className, itemActive, handleClick }: ISearchFilterItemProps) => {
    return (
        <div className={classNames('pb-2 border-b border-eclipse', className)}>
            <h3 className='uppercase text-2 leading-[2.89rem] text-tundora mb-0.8'>{title}</h3>
            <div className='flex flex-wrap items-center gap-x-2 gap-y-1 md:gap-4'>
                {!isEmpty(items) &&
                    items.map((item: ISearchFilterItem, index: React.Key | null | undefined) => (
                        <RadioFilter
                            className='uppercase'
                            key={index}
                            isActive={item.id === itemActive}
                            item={item}
                            handleClick={handleClick}
                        />
                    ))}
            </div>
        </div>
    );
};

const SearchFilterBox: FC<ISearchFilterSectionProps> = ({ className }) => {
    const { push } = useRouter();

    const onClickSearch = useCallback(() => {
        push('/search');
    }, [push]);
    const items = [
        { name: 'ALL', id: '123' },
        { name: 'Illustration', id: '2343' },
        { name: 'Art', id: '12423423423' },
        { name: 'Donation', id: '12323432432' },
        { name: 'Photography', id: '1243242343' },
    ];
    const currencies = [
        { name: 'Hazama', id: '123' },
        { name: 'Ethereum', id: '123243243' },
        { name: 'Polygon', id: '122343243' },
    ];
    const [categoryActive, setCategoryActive] = useState('123');
    const [usableCurrencyActive, setUsableCurrencyActive] = useState('123');

    return (
        <div
            className={classnames(
                'mt-2 shadow-[4px 6px 7px 0px #00000033] w-auto h-auto mx-1.5  md:w-[66.2rem] md:h-[29.2rem] shadow-search-box bg-gradient-search-box text-white rounded-xl px-3 pt-2.4 pb-2.8',
                className,
            )}
        >
            <div className='flex flex-col gap-[2.2rem] mb-2.8'>
                <SearchFilterItem
                    items={items}
                    itemActive={categoryActive}
                    handleClick={setCategoryActive}
                    title={'category'}
                />
                <SearchFilterItem
                    items={currencies}
                    itemActive={usableCurrencyActive}
                    handleClick={setUsableCurrencyActive}
                    title={'usable currency'}
                />
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={onClickSearch}
                    className='text-1.4 w-[22rem] h-3.2 border border-white-smoke rounded-[1.6rem]'
                >
                    SEARCH
                </button>
            </div>
        </div>
    );
};

export default SearchFilterBox;
