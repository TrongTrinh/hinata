import ButtonOrange from '@components/common/buttons/button-orange';

import PageBanner from '@components/page/Banner';
import FilterSection from '@components/page/FilterSection';
import { categories_dummy } from '@lib/utils/dummy/categories';
import { useCallback, useState } from 'react';
import CategoryItem from './item';

const CategoryPage = () => {
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    const items = [
        { name: 'ALL', id: '23432' },
        { name: 'Illustration', id: '1432432423' },
        { name: 'Art', id: '1232432433' },
        { name: 'Donation', id: '12243243' },
        { name: 'Photography', id: '12324323' },
    ];
    const data = [...categories_dummy, ...categories_dummy];
    const [itemActive, setItemActive] = useState('23432');

    return (
        <>
            <PageBanner title={'AUCTION'} />
            <FilterSection items={items} itemActive={itemActive} handleClick={setItemActive} />

            <div className='grid  grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-[4rem] md:gap-y-[7rem] mt-2.6 md:mt-[8.6rem]'>
                {data &&
                    data.map((item, index) => (
                        <CategoryItem
                            positionItem={index + 1}
                            item={item}
                            key={index}
                            classTitle='text-black'
                            className='border-white-smoke-2'
                        />
                    ))}
            </div>

            <div className='flex justify-center pt-[4.6rem] md:pt-[8.8rem]'>
                <ButtonOrange
                    handleClick={onClickShowMore}
                    size='w-[20rem] md:w-[34.8rem] h-[3.2rem]'
                    title='VIEW MORE'
                    className='uppercase  mr-1'
                    classTitle='text-1.4 leading-[2rem]'
                />
            </div>
        </>
    );
};

export default CategoryPage;
