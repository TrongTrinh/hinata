/* eslint-disable @next/next/no-img-element */
import ButtonOrange from '@components/common/buttons/button-orange';
import { IPaginationItem, IPaginationProps } from '@lib/domain/common/pagination';
import classnames from 'classnames';
import { FC, useCallback } from 'react';

const PaginationItem: FC<IPaginationItem> = ({ item, handleClick, currentPage }) => {
    console.log('🚀 ~ file: default.tsx ~ line 7 ~ currentPage', currentPage, currentPage !== item);
    console.log('🚀 ~ file: default.tsx ~ line 7 ~ item', item);
    const onClickChangePage = useCallback(() => {
        handleClick && handleClick(item);
    }, [handleClick, item]);
    return (
        <button
            className={classnames('w-4 h-4 flex justify-center items-center text-1.4 rounded-full', {
                'bg-black text-white': currentPage === item,
                'border border-black text-black': currentPage !== item,
            })}
            type='button'
            onClick={onClickChangePage}
        >
            {item}
        </button>
    );
};

const PageginationDefault: FC<IPaginationProps> = ({ className, handleClick, currentPage }) => {
    return (
        <div className={classnames('flex justify-center pt-[7rem] gap-0.9', className)}>
            <ButtonOrange
                handleClick={handleClick}
                size='w-[8.9rem] h-[4rem]'
                title={
                    <span className='flex items-center'>
                        <img src='/assets/images/common/arrow-left.svg' alt='next page magazine' />
                        <span className='ml-0.6'> NEXT</span>
                    </span>
                }
                className='uppercase  mr-1'
                classTitle='tracking-[0.1rem] text-1.4 leading-[2rem]'
                item={currentPage === 1 ? 6 : currentPage - 1}
            />
            {<PaginationItem item={1} handleClick={handleClick} currentPage={currentPage} />}
            {<PaginationItem item={2} handleClick={handleClick} currentPage={currentPage} />}
            {<PaginationItem item={3} handleClick={handleClick} currentPage={currentPage} />}
            {<PaginationItem item={4} handleClick={handleClick} currentPage={currentPage} />}
            {<PaginationItem item={5} handleClick={handleClick} currentPage={currentPage} />}
            {<PaginationItem item={6} handleClick={handleClick} currentPage={currentPage} />}
            <ButtonOrange
                handleClick={handleClick}
                item={currentPage === 6 ? 1 : currentPage + 1}
                size='w-[8.9rem] h-[4rem]'
                title={
                    <span className='flex items-center'>
                        <span className='mr-0.6'> NEXT</span>
                        <img src='/assets/images/common/arrow-right.svg' alt='next page magazine' />
                    </span>
                }
                className='uppercase'
                classTitle='tracking-[0.1rem] text-1.4 leading-[2rem]'
            />
        </div>
    );
};

export default PageginationDefault;
