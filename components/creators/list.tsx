import ButtonOrange from '@components/common/buttons/button-orange';
import CreatorItem from '@components/creators/item';
import FilterSection from '@components/page/FilterSection';
import { ICreatorsListProps } from '@lib/domain/creator';
import { IUser } from '@lib/domain/interfaces/i-user';
import { dummy_users } from '@lib/utils/dummy/users';
import classNames from 'classnames';
import { FC, useCallback, useState } from 'react';

const CreatorList: FC<ICreatorsListProps> = ({
    isShowFilter = true,
    isShowHr = false,
    className,
    classTitle,
    title,
    classWrappBtn,
    classCreatorItem,
}) => {
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
    // const { data: creators, error: creatorsError } = useSWR<IUser[]>(`/api/users/creators?take=9`, fetcher);
    // console.log('🚀 ~ file: index.tsx:29 ~ CreatorList ~ creatorsError', creatorsError);
    return (
        <div className={classNames(className)}>
            {isShowFilter && (
                <FilterSection
                    className='filter-section'
                    items={items}
                    itemActive={itemActive}
                    handleClick={setItemActive}
                />
            )}
            {isShowHr && <hr className='border border-eclipse block mt-0.8' />}
            {title && (
                <h2
                    className={classNames('text-3 leading-4.335 uppercase text-white mt-3 mb-0 md:-mb-3.6', classTitle)}
                >
                    {title}
                </h2>
            )}
            <div>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-[1rem] md:gap-y-[2.6rem] mt-2.6 md:mt-[8.6rem]'>
                    {creators &&
                        creators.map((item, index) => (
                            <CreatorItem
                                item={item}
                                key={index}
                                classTitle='text-black'
                                className={classNames('border-white-smoke-2', classCreatorItem)}
                            />
                        ))}
                </div>
            </div>

            <div className={classNames('flex justify-center pt-3 md:pt-[7rem]', classWrappBtn)}>
                <ButtonOrange
                    handleClick={onClickShowMore}
                    size='w-[20rem] md:w-[34.8rem] h-3.2'
                    title='VIEW MORE'
                    className='uppercase  mr-1'
                    classTitle='text-1.4 leading-[2rem]'
                />
            </div>
        </div>
    );
};

export default CreatorList;
