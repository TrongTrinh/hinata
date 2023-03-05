/* eslint-disable @next/next/no-img-element */
import Categories from '@components/category/list';
import ItemEdit from '@components/common/ItemEdit';
import ListCreators from '@components/creators/list';
import FilterSection from '@components/page/FilterSection';
import TokenHistory from '@components/page/token-history';
import { APP_ROUTES } from '@lib/constants/routers';
import { ICreatorPageProps } from '@lib/domain/creator';
import { find } from 'lodash';
import { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

const CreatorItem: FC<ICreatorPageProps> = () => {
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    const [myOptionActive, setMyOptionActive] = useState<string>('collection');
    const accountOptions = useMemo(
        () => [
            { name: 'MY COLLECTION', id: 'collection' },
            { name: 'Follow', id: 'follow' },
            { name: 'LIKE', id: 'like' },
            { name: '売買履歴', id: 'trading_history' },
            { name: '入札履歴', id: 'bid_history' },
            { name: 'MY WORKS', id: 'my_works' },
        ],
        [],
    );

    const titleBtnMobile = useMemo(() => {
        return find(accountOptions, (item) => item.id === myOptionActive)?.name;
    }, [accountOptions, myOptionActive]);

    const [itemEditActive, setItemEditActive] = useState('');

    const onClickItemEdit = useCallback((name: string, value: string, disabled: boolean) => {
        if (disabled) {
            setItemEditActive(name);
        } else {
            setItemEditActive('');
        }
    }, []);

    return (
        <ProfileStyle>
            <div>
                <img src='/assets/images/account/banner.png' className='w-full' alt='banner create details' />
            </div>
            <div className='bg-[url(/assets/images/account/background.jpg)] bg-contain relative before before:z-1 before:bg-black-0.8  before:top-0 before:left-0 before:right-0 before:bottom-0  before:absolute'>
                <div className='container mx-auto relative'>
                    <div className='mx-auto flex max-md:flex-col'>
                        <div className='mr-[5.8rem] -mt-4 md:-mb-4 md:-mt-[7.4rem] w-[100%] md:w-[27%]'>
                            <img
                                src='/assets/images/account/avatar.svg'
                                className='w-[8rem] md:w-[22rem] h-[rem] md:h-[22rem]'
                                alt='banner create details'
                            />
                        </div>
                        <div className='mt-1.6 text-white w-full md:w-[72%]'>
                            <ItemEdit
                                placeholder='Name'
                                handleClick={onClickItemEdit}
                                disabled={itemEditActive !== 'name'}
                                autoFocus={itemEditActive === 'name'}
                                name='name'
                                defaultValue='JAPAN'
                                classInput='text-1.5 leading-2.172 md:text-2 md:leading-2.896 font-semibold  text-suva-grey'
                            />
                            <h2 className='max-md:mt-0.6 text-2.2 leading-[3.186rem] md:text-3.6 md:leading-[5.213rem] font-semibold mb-2.8 md:mb-[2.26rem]'>
                                Ellis Thomas Burleigh
                            </h2>
                            <div className='flex flex-col gap-1 mb-3.5'>
                                <p className='text-1.5'>
                                    <span className='text-suva-grey mr-0.5'>ニックネーム:</span>
                                    <span>Ellis</span>
                                </p>
                                <p className='text-1.5'>
                                    <span className='text-suva-grey mr-0.5'>国籍:</span>
                                    <span>Japan</span>
                                </p>
                                <p className='text-1.5'>
                                    <span className='text-suva-grey mr-0.5'>性別:</span>
                                    <span>MALE</span>
                                </p>
                                <p className='text-1.5'>
                                    <span className='text-suva-grey mr-0.5'>誕生日:</span>
                                    <span>2022/12/30</span>
                                </p>
                            </div>
                            <hr className='border border-eclipse' />
                            <ItemEdit
                                title='ウォレットアドレス: '
                                placeholder='ウォレットアドレス'
                                handleClick={onClickItemEdit}
                                disabled={itemEditActive !== 'ウォレットアドレス'}
                                autoFocus={itemEditActive === 'ウォレットアドレス'}
                                name='ウォレットアドレス'
                                defaultValue='hGfVLrHFxecC3E2FPuTM6d1SdVB975LGnM'
                            />
                            <hr className='border border-eclipse' />
                            <ItemEdit
                                title='Email:'
                                placeholder='Email:'
                                handleClick={onClickItemEdit}
                                disabled={itemEditActive !== 'email'}
                                autoFocus={itemEditActive === 'email'}
                                name='email'
                                defaultValue='seenteenlow@gmail.com'
                                classNameTitle='min-w-[4.7rem]'
                            />
                            <hr className='border border-eclipse' />
                            <ItemEdit
                                title='携帯番号:'
                                placeholder='携帯番号:'
                                handleClick={onClickItemEdit}
                                disabled={itemEditActive !== '携帯番号'}
                                autoFocus={itemEditActive === '携帯番号'}
                                name='携帯番号'
                                defaultValue='***********'
                                classNameTitle='min-w-[7rem]'
                            />
                            <hr className='border border-eclipse md:hidden' />
                        </div>
                    </div>
                    <div className='mt-3.4 md:mt-[11rem] mb-0.9'>
                        <FilterSection
                            className='bg-gradient-orange-red md:px-3.6 md:py-[2rem]'
                            items={accountOptions}
                            itemActive={myOptionActive}
                            handleClick={setMyOptionActive}
                            isShowDropdownRight={false}
                            titleBtnMobile={titleBtnMobile}
                        />
                    </div>
                    {myOptionActive === 'collection' && (
                        <Categories
                            linkDetail={APP_ROUTES.profile.path + '/my-colection-detail'}
                            isShowHr
                            className='-mt-0.8 md:mt-1'
                            title='My Collection'
                            classWrappBtn='pb-[12rem] md:pb-[10rem] md:pt-[7rem]'
                        />
                    )}

                    {myOptionActive === 'follow' && (
                        <ListCreators
                            isShowHr
                            className='mt-1'
                            title='FOLLOW'
                            classWrappBtn='pb-[12rem] md:pb-[10rem] md:pt-[7rem]'
                            classCreatorItem={'border-eclipse'}
                        />
                    )}
                    {myOptionActive === 'like' && (
                        <Categories
                            linkDetail={APP_ROUTES.profile.path + '/my-colection-detail'}
                            isShowFilter={false}
                            isShowHr={false}
                            className='mt-1'
                            title='LIKE'
                            classWrappBtn='pb-[12rem] md:pb-[10rem] md:pt-[7rem]'
                        />
                    )}
                    {myOptionActive === 'my_works' && (
                        <Categories
                            linkDetail={APP_ROUTES.profile.path + '/my-colection-detail'}
                            isShowFilter={false}
                            isShowHr={false}
                            className='mt-1'
                            title='MY WORKS'
                            classWrappBtn='pb-[12rem] md:pb-[10rem] md:pt-[7rem]'
                        />
                    )}
                    {myOptionActive === 'trading_history' && (
                        <TokenHistory
                            className='history-table-black'
                            classTitle='text-white font-medium'
                            title='売買履歴'
                        />
                    )}
                    {myOptionActive === 'bid_history' && (
                        <TokenHistory
                            className='history-table-black'
                            classTitle='text-white font-medium'
                            title='入札履歴'
                        />
                    )}
                </div>
            </div>
        </ProfileStyle>
    );
};

export default CreatorItem;

const ProfileStyle = styled.div`
    .filter-section {
        background: transparent;
    }
`;
