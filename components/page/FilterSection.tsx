import ButtonOrange from '@components/common/buttons/button-orange';
import RadioFilter from '@components/common/buttons/radio';
import DropdownDefault from '@components/common/dropdown/default';
import SearchFilterBox from '@components/common/SearchFilterBox';
import { ISearchFilterItem } from '@lib/domain/common/search-header';
import { IPageFilterProps } from '@lib/domain/page';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import React, { FC, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const FilterSection: FC<IPageFilterProps> = ({
    className,
    items,
    itemActive,
    handleClick,
    isShowDropdownRight = true,
    titleBtnMobile = 'ALL',
}) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [visibleSearchBox, setVisibleSearchBox] = useState(false);
    const [visibleFilterMobile, setVisibleFilterMobile] = useState(false);
    const onShowRight = useCallback(() => {
        setVisibleSearchBox((prev) => !prev);
        setVisibleFilterMobile(false);
    }, []);

    const onShowFilterMobile = useCallback(() => {
        setVisibleFilterMobile((prev) => !prev);
        setVisibleSearchBox(false);
    }, []);

    const handleClickMobile = useCallback(
        (item: any) => {
            setVisibleFilterMobile((prev) => !prev);
            handleClick && handleClick(item);
        },
        [handleClick],
    );
    return (
        <PageFilterStyle
            className={classnames(
                'px-1.2 md:px-3 py-0.65 md:py-1.4 flex items-center justify-between rounded-lg',
                className,
            )}
        >
            {!isTabletOrMobile ? (
                <div className='flex flex-wrap items-center gap-x-4 gap-y-1'>
                    {!isEmpty(items) &&
                        items.map((item: ISearchFilterItem, index: React.Key | null | undefined) => (
                            <RadioFilter
                                className='uppercase text-white'
                                key={index}
                                isActive={item.id === itemActive}
                                item={item}
                                handleClick={handleClick}
                            />
                        ))}
                </div>
            ) : (
                <DropdownDefault
                    overlay={
                        <div
                            className={classnames(
                                'mt-2 shadow-[4px 6px 7px 0px #00000033] w-auto h-auto  md:w-[66.2rem] md:h-[29.2rem] shadow-search-box bg-gradient-search-box text-white rounded-xl px-3 pt-2.4 pb-2.8',
                                className,
                            )}
                        >
                            <div className='flex flex-col gap-[2.2rem]'>
                                {!isEmpty(items) &&
                                    items.map((item: ISearchFilterItem, index: React.Key | null | undefined) => (
                                        <RadioFilter
                                            className='uppercase text-white'
                                            key={index}
                                            isActive={item.id === itemActive}
                                            item={item}
                                            handleClick={handleClickMobile}
                                        />
                                    ))}
                            </div>
                        </div>
                    }
                    visible={visibleFilterMobile}
                    onVisibleChange={onShowFilterMobile}
                >
                    <ButtonOrange
                        handleClick={onShowFilterMobile}
                        className='uppercase bg-transparent shadow-transparent'
                        size='w-auto h-3.2'
                        classTitle='pr-2.5 ml-0 block'
                        imgClass={'right-0'}
                        imgSrc={'/assets/images/common/dropdown-white.svg'}
                        title={titleBtnMobile}
                        marginT='mt-0'
                    />
                </DropdownDefault>
            )}
            {isShowDropdownRight && (
                <DropdownDefault overlay={<SearchFilterBox />} visible={visibleSearchBox} onVisibleChange={onShowRight}>
                    <ButtonOrange
                        handleClick={onShowRight}
                        className='uppercase  bg-transparent border border-white'
                        marginT='mt-0'
                        size='w-[11rem] md:w-[22rem] h-3.2'
                        classTitle='mr-1.6 sm:ml-2 font-nato'
                        imgSrc={'/assets/images/common/dropdown-white.svg'}
                        title='新着順'
                    />
                </DropdownDefault>
            )}
        </PageFilterStyle>
    );
};

export default FilterSection;

const PageFilterStyle = styled.div`
    background: linear-gradient(90deg, #000000 -63.17%, #3e3a39 162.81%);
`;
