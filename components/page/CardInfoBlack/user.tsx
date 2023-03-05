/* eslint-disable @next/next/no-img-element */
import ButtonOrange from '@components/common/buttons/button-orange';
import { ICardInfoBlackUserProps } from '@lib/domain/page';
import Link from 'next/link';
import React, { FC, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const CardInfoBlackUser: FC<ICardInfoBlackUserProps> = ({ isShowHeartNumber }) => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const onClickFollow = useCallback(() => {
        console.log('push');
    }, []);
    const btnFollow = (
        <ButtonOrange title={'FOLLOW'} size='w-[22rem] md:w-[16rem] h-3.2' handleClick={onClickFollow} marginT='mt-1' />
    );
    return (
        <>
            <div className='flex items-center'>
                {isShowHeartNumber && (
                    <div className='mr-0.8 md:mr-1.2 flex items-center justify-center w-[6rem] md:w-[8.4rem] h-[2.5rem] md:h-[3.5rem] border border-white rounded-lg'>
                        <img
                            alt='category heart'
                            className='w-[1.23rem] md:w-[1.636rem] h-[1rem] md:h-[1.343rem]'
                            src={`/assets/images/common/heart.svg`}
                        />
                        <span className='text-1.2 md:text-1.5 leading-[1.738rem] md:leading-2.172 text-white ml-0.6 md:ml-0.9'>
                            235
                        </span>
                    </div>
                )}
                <Link href='/profile'>
                    <img
                        src='/assets/images/common/share.svg'
                        className='w-2.5 md:w-3.5 h-2.5 md:h-3.5'
                        alt='banner create details'
                    />
                </Link>
            </div>
            <h2 className='text-gradient-yellow mt-1.2 md:mt-3 text-2.8 md:text-3.4 leading-[4.05rem] md:leading-[4.923rem] font-semibold'>
                BLUE DROP #4
            </h2>
            <div className='flex items-center text-white mt-1.4 md:mt-4.4 mb-3 md:mb-3.4'>
                <div>
                    <img
                        className='w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem]'
                        alt='category frame 1'
                        src={`/assets/images/category-details/avatar.png`}
                    />
                </div>
                <div className='ml-1.2 md:ml-2.6 '>
                    <p className='text-1.2 leading-[1.738rem] md:text-1.4 md:leading-[2.027rem]'>JAPAN</p>
                    <p className='text-1.6 leading-[2.317rem]  md:text-1.8 md:leading-[2.6rem] md:mb-1.4 md:mt-0.7'>
                        Koji Fujita
                    </p>
                    {!isMobileSize && btnFollow}
                </div>
            </div>
            <div className='flex justify-center'>{isMobileSize && btnFollow}</div>
        </>
    );
};

export default CardInfoBlackUser;
