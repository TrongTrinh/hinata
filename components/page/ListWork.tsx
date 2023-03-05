import CategoryItem from '@components/category/item';
import ButtonBackOverview from '@components/common/buttons/back-to-overview';
import ButtonOrange from '@components/common/buttons/button-orange';
import { IListWorkProps } from '@lib/domain/page';
import classNames from 'classnames';
import React, { FC, useCallback } from 'react';

const ListWorks: FC<IListWorkProps> = ({
    items,
    title = 'Works',
    className,
    pageTitle = 'creators',
    classWrapBtn = ' pt-[5.6rem] md:pt-[8.8rem]',
    classTitle,
    classBtnBack,
    isShowBtnBack = true,
}) => {
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    return (
        <div className={classNames('mt-3 md:mt-5 mb-5 md:mb-[6rem]', className)}>
            <h2 className={classNames('text-3 leading-4.335 uppercase', classTitle)}>{title}</h2>
            <div className='flex flex-col justify-center items-center sm:grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-[4rem] md:gap-y-[7rem] mt-2.6 md:mt-3'>
                {items &&
                    items.map((item, index) => (
                        <CategoryItem
                            positionItem={index + 1}
                            item={item}
                            key={index}
                            classTitle='text-black'
                            className='border-white-smoke-2'
                        />
                    ))}
            </div>
            <div className={classNames('flex flex-col items-center justify-center', classWrapBtn)}>
                <ButtonOrange
                    handleClick={onClickShowMore}
                    size='w-[20rem] md:w-[34.8rem] h-3.2'
                    title='VIEW MORE'
                    className='uppercase  mr-1'
                    classTitle='text-1.4 leading-[2rem]'
                />
                {isShowBtnBack && (
                    <ButtonBackOverview
                        page={pageTitle}
                        className={classNames('mb-2 mt-5', classBtnBack)}
                        size='w-2.8 h-2.8'
                    />
                )}
            </div>
        </div>
    );
};

export default ListWorks;
