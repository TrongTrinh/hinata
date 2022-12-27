import ButtonOrange from '@components/common/buttons/button-orange';

import PageBanner from '@components/page/Banner';
import FilterSection from '@components/page/FilterSection';
import { IUser } from '@lib/domain/interfaces/i-user';
import { dummy_users } from '@lib/utils/dummy/users';
import { useCallback, useState } from 'react';
import CreatorItem from './item';

const CreatorPage = () => {
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    const [itemActive, setItemActive] = useState('12');

    const items = [
        { name: 'ALL', id: '12' },
        { name: 'Illustration', id: '214' },
        { name: 'Art', id: '414323' },
        { name: 'Donation', id: '1243433' },
        { name: 'Photography', id: '125653' },
        { name: 'Game', id: '1623' },
        { name: 'Membership', id: '14323' },
    ];
    const creators: IUser[] = dummy_users;
    return (
        <>
            <PageBanner title={'CREATORS'} />
            <FilterSection items={items} itemActive={itemActive} handleClick={setItemActive} />
            <div>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-[1rem] md:gap-y-[2.6rem] mt-2.6 md:mt-[8.6rem]'>
                    {creators &&
                        creators.map((item, index) => (
                            <CreatorItem
                                item={item}
                                key={index}
                                classTitle='text-black'
                                className='border-white-smoke-2'
                            />
                        ))}
                </div>
            </div>

            <div className='flex justify-center pt-3 md:pt-[7rem]'>
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

export default CreatorPage;
