/* eslint-disable @next/next/no-img-element */
import ButtonBackOverview from '@components/common/buttons/back-to-overview';
import ButtonOrange from '@components/common/buttons/button-orange';
import { ICreatorPageProps } from '@lib/domain/creator';
// import classnames from 'classnames';
import ListWorks from '@components/page/ListWork';
import { categories_dummy } from '@lib/utils/dummy/categories';
import Link from 'next/link';
import { FC, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const CreatorItem: FC<ICreatorPageProps> = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });
    const onClickFollow = useCallback(() => {
        console.log('push');
    }, []);
    const data = [...categories_dummy, ...categories_dummy];
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    const FollowButton = (
        <ButtonOrange
            title={'FOLLOW'}
            className='w-[12.5rem] h-[2.5rem] md:w-[15.8rem] md:h-3.2'
            handleClick={onClickFollow}
            marginT='mt-1'
        />
    );
    return (
        <div>
            <div>
                <img src='/assets/images/creators/banner.svg' className='w-full' alt='banner create details' />
            </div>
            <div className='container mx-auto'>
                <div className='mx-auto flex max-md:flex-col justify-between border-b border-ghost'>
                    <div className='mr-[5.8rem] -mt-4 -mb-4 md:mb-0 md:-mt-[7.4rem] w-[8rem] md:w-[22rem] h-[rem] md:h-[22rem]'>
                        <img src='/assets/images/creators/avatar.png' className='w-full' alt='banner create details' />
                    </div>
                    <div className='mt-2 md:mt-4.2 mb-4 md:mb-[7rem] w-full max-w-[89rem] '>
                        <div className='flex justify-end'>
                            <ButtonBackOverview page='creators' className='mb-2' />
                        </div>
                        <div className='min-h-[22rem] md:min-h-[25.6rem] rounded-[1rem] bg-black px-1.5 md:px-2.8 py-1.4 md:py-3.4'>
                            <div className='flex justify-between item-start md:items-end pb-2.4 md:pb-1.4 border-b border-eclipse'>
                                <div className='text-white'>
                                    <h2 className='text-suva-grey font-semibold leading:[1.882rem] md:leading-[2.896rem] text-1.3 md:text-2'>
                                        JAPAN
                                    </h2>
                                    <p className='text-2.4 md:text-[3.6rem] leading:[3.745rem] md:leading-[5.2rem] font-semibold'>
                                        Mushrace
                                    </p>
                                    {isMobileSize && FollowButton}
                                </div>
                                <div className='flex gap-1 pb-2.4'>
                                    <Link href='/instagram'>
                                        <img
                                            src='/assets/images/common/instagram.svg'
                                            className='w-2 md:w-2.8 h-2 md:h-2.8'
                                            alt='banner create details'
                                        />
                                    </Link>
                                    <Link href='/profile'>
                                        <img
                                            src='/assets/images/common/twitter.svg'
                                            className='w-2 md:w-2.8 h-2 md:h-2.8'
                                            alt='banner create details'
                                        />
                                    </Link>
                                    <Link href='/profile'>
                                        <img
                                            src='/assets/images/common/share.svg'
                                            className='w-2 md:w-2.8 h-2 md:h-2.8'
                                            alt='banner create details'
                                        />
                                    </Link>
                                    {!isMobileSize && FollowButton}
                                </div>
                            </div>
                            <ul className='max-md:justify-around text-white mt-[2.7rem] gap-[8rem] flex'>
                                <li>
                                    <p className='text-[1.262rem] md:text-1.5 leading-[1.827rem] md:leading-2.172 font-semibold'>
                                        Works
                                    </p>
                                    <p className='text-[2.523rem] md:text-3 leading-[3.653rem] md:leading-[4.343rem] font-semibold'>
                                        30
                                    </p>
                                </li>
                                <li>
                                    <p className='text-[1.262rem] md:text-1.5 leading-[1.827rem] md:leading-2.172 font-semibold'>
                                        Followers
                                    </p>
                                    <p className='text-[2.523rem] md:text-3 leading-[3.653rem] md:leading-[4.343rem] font-semibold'>
                                        18
                                    </p>
                                </li>
                                <li>
                                    <p className='text-[1.262rem] md:text-1.5 leading-[1.827rem] md:leading-2.172 font-semibold'>
                                        Likes
                                    </p>
                                    <p className='text-[2.523rem] md:text-3 leading-[3.653rem] md:leading-[4.343rem] font-semibold'>
                                        214
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='pt-3 md:pt-5 pb-3 md:pb-4 flex max-md:flex-col justify-between border-b border-ghost'>
                    <div className='md:mr-3'>
                        <h2 className=' text-3  leading-[4.343rem] mb-2 md:mb-1.5 uppercase'>Profile</h2>
                        <p className='max-w-[48.2rem] text-1.5 leading-[3rem] max-md:mb-2'>
                            クマとホラーとカワイイを愛するデザイナー <br></br>
                            デザイナー講師、主にグラフィック・キャラクターデザインがメイン。 『ジャパンクリエイターズ
                            2022』掲載。<br></br> 最近はVTuberのロゴ素材キャラ作成にハマり中。<br></br>
                            ネームロゴ、背景デザイン、SDキャラクターを担当。<br></br> POPでHi-colorなデザインをお届け。
                            <br></br>
                            ちょっとダークなアートも描きます。
                        </p>
                    </div>
                    <div>
                        <img
                            src='/assets/images/creators/profile.png'
                            className='w-full h-auto md:w-[42.8rem] md:h-[29rem] object-cover'
                            alt='banner create details'
                        />
                    </div>
                </div>
                <ListWorks items={data} />
            </div>
        </div>
    );
};

export default CreatorItem;
