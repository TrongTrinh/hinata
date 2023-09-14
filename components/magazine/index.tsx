import PageginationDefault from '@components/common/pagination/default';

import MagazineItem from '@components/magazine/item';
import PageBanner from '@components/page/Banner';
import FilterSection from '@components/page/FilterSection';
import { WpPost } from '@lib/domain/interfaces/wp/wp-post';
import { magazine_dummy } from '@lib/utils/dummy/magazine';
import { useCallback, useState } from 'react';

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
    const data: WpPost[] = magazine_dummy;

    const [itemActive, setItemActive] = useState('23432');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const onClickChangePage = useCallback((item: number) => {
        setCurrentPage(item);
    }, []);
    const totalPages = 6;
    return (
        <div>
            <PageBanner title={'Magazine'} />
            <FilterSection
                items={items}
                itemActive={itemActive}
                handleClick={setItemActive}
                isShowDropdownRight={false}
            />

            <div>
                <div className='grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-[4rem]  md:gap-y-[7rem] mt-5 md:mt-[7rem]'>
                    {data && data.map((item, index) => <MagazineItem key={index} item={item} className='md:mr-0' />)}
                </div>
            </div>
            <PageginationDefault totalPages={totalPages} handleClick={onClickChangePage} currentPage={currentPage} />
        </div>
    );
};

export default CategoryPage;
