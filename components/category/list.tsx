import CategoryItem from '@components/category/item';
import ButtonOrange from '@components/common/buttons/button-orange';
import FilterSection from '@components/page/FilterSection';
import { ICategoriesProps } from '@lib/domain/category';
import { categories_dummy } from '@lib/utils/dummy/categories';
import classNames from 'classnames';
import { find } from 'lodash';
import { FC, useCallback, useMemo, useState } from 'react';

const Categories: FC<ICategoriesProps> = ({
    isShowFilter = true,
    isShowHr = false,
    className,
    classTitle,
    title,
    classWrappBtn,
    linkDetail,
}) => {
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    const items = useMemo(
        () => [
            { name: 'ALL', id: '23432' },
            { name: 'Illustration', id: '1432432423' },
            { name: 'Art', id: '1232432433' },
            { name: 'Donation', id: '12243243' },
            { name: 'Photography', id: '12324323' },
        ],
        [],
    );
    const data = [...categories_dummy, ...categories_dummy];
    const [itemActive, setItemActive] = useState<string>('23432');
    const titleBtnMobile = useMemo(() => {
        return find(items, (item) => item.id === itemActive)?.name;
    }, [items, itemActive]);
    return (
        <div className={classNames(className)}>
            {isShowFilter && (
                <FilterSection
                    className='filter-section'
                    items={items}
                    itemActive={itemActive}
                    handleClick={setItemActive}
                    titleBtnMobile={titleBtnMobile}
                />
            )}
            {isShowHr && <hr className='border border-eclipse block mt-0.8' />}
            {title && (
                <h2 className={classNames('text-3 leading-4.335 uppercase text-white mt-3 md:-mb-3.6', classTitle)}>
                    {title}
                </h2>
            )}

            <div className='flex flex-col justify-center items-center sm:grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[4rem] md:gap-y-[rem] mt-5 md:mt-[8.6rem]'>
                {data &&
                    data.map((item, index) => (
                        <CategoryItem
                            positionItem={index + 1}
                            item={item}
                            key={index}
                            classTitle='text-black'
                            className='border-white-smoke-2'
                            linkDetail={linkDetail}
                        />
                    ))}
            </div>
            <div className={classNames('flex justify-center pt-[4.6rem] md:pt-[8.8rem]', classWrappBtn)}>
                <ButtonOrange
                    handleClick={onClickShowMore}
                    size='w-[20rem] md:w-[34.8rem] h-[3.2rem]'
                    title='VIEW MORE'
                    className='uppercase  mr-1'
                    classTitle='text-1.4 leading-[2rem]'
                />
            </div>
        </div>
    );
};

export default Categories;
