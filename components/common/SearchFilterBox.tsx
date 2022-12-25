import RadioFilter from '@components/common/buttons/radio';
import { ISearchFilterItem, ISearchFilterItemProps } from '@lib/domain/common/search-header';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { FC, useCallback } from 'react';

const SearchFilterItem = ({ items, title, className }: ISearchFilterItemProps) => {
    return (
        <div className={classNames('pb-2 border-b border-eclipse', className)}>
            <h3 className='uppercase text-2 leading-[2.89rem] text-tundora mb-0.8'>{title}</h3>
            <div className='flex flex-wrap items-center gap-4'>
                {!isEmpty(items) &&
                    items.map((item: ISearchFilterItem, index: React.Key | null | undefined) => (
                        <RadioFilter className='uppercase' key={index} isActive text={item.name} />
                    ))}
            </div>
        </div>
    );
};

const SearchFilterBox: FC = () => {
    const { push } = useRouter();

    const onClickSearch = useCallback(() => {
        push('/search');
    }, [push]);
    const items = [
        { name: 'ALL', id: '123' },
        { name: 'Illustration', id: '123' },
        { name: 'Art', id: '123' },
        { name: 'Donation', id: '123' },
        { name: 'Photography', id: '123' },
    ];
    const currencies = [
        { name: 'Hazama', id: '123' },
        { name: 'Ethereum', id: '123' },
        { name: 'Polygon', id: '123' },
    ];
    return (
        <div className='mt-2 shadow-[4px 6px 7px 0px #00000033] w-[66.2rem] h-[29.2rem] shadow-search-box bg-gradient-search-box text-white rounded-xl px-3 pt-2.4 pb-2.8'>
            <div className='flex flex-col gap-[2.2rem] mb-2.8'>
                <SearchFilterItem items={items} title={'category'} />
                <SearchFilterItem items={currencies} title={'usable currency'} />
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={onClickSearch}
                    className='text-1.4 w-[22rem] h-[3.2rem] border border-white-smoke rounded-[1.6rem]'
                >
                    SEARCH
                </button>
            </div>
        </div>
    );
};

export default SearchFilterBox;
