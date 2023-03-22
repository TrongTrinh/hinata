/* eslint-disable @next/next/no-img-element */
import ButtonOrange from '@components/common/buttons/button-orange';
import { ICardInfoBlackUserProps } from '@lib/domain/page';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const CardInfoBlackUser: FC<ICardInfoBlackUserProps> = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });
    let positionItem: any = localStorage.getItem('ProductPositionItem');
    positionItem = positionItem ? parseInt(positionItem) : 4;
    const onClickFollow = useCallback(() => {
        console.log('push');
    }, []);
    const btnFollow = (
        <ButtonOrange title={'FOLLOW'} size='w-[22rem] md:w-[16rem] h-3.2' handleClick={onClickFollow} marginT='mt-1' />
    );
    return (
        <>
            <div className='flex items-center'>
                <div
                    className={classNames(
                        `mr-0.8 md:mr-1.2 flex items-center justify-center w-[6rem] md:w-[8.4rem] h-[2.5rem] md:h-[3.5rem] border  rounded-lg`,
                        {
                            'border-white': positionItem <= 3,
                            'border-black': positionItem > 3,
                        },
                    )}
                >
                    <img
                        alt='category heart'
                        className='w-[1.23rem] md:w-[1.636rem] h-[1rem] md:h-[1.343rem]'
                        src={`/assets/images/common/${positionItem > 3 ? 'heart-black' : 'heart'}.svg`}
                    />
                    <span
                        className={classNames(
                            `text-1.2 md:text-1.5 leading-[1.738rem] md:leading-2.172   ml-0.6 md:ml-0.9`,
                            {
                                'text-white': positionItem <= 3,
                                'text-black': positionItem > 3,
                            },
                        )}
                    >
                        235
                    </span>
                </div>
                <Link href='/profile'>
                    <img
                        src={`/assets/images/common/${positionItem > 3 ? 'share-black' : 'share'}.svg`}
                        className='w-2.5 md:w-3.5 h-2.5 md:h-3.5'
                        alt='banner create details'
                    />
                </Link>
            </div>
            <h2
                className={classNames(
                    ` mt-1.2 md:mt-3 text-2.8 md:text-3.4 leading-[4.05rem] md:leading-[4.923rem] font-semibold`,
                    {
                        'text-gradient-yellow': positionItem === 2,
                        'text-white': positionItem === 1,
                        'text-gradient-white': positionItem === 3,
                        'text-black': positionItem > 3,
                        'font-nato': positionItem !== 2,
                    },
                )}
            >
                {positionItem !== 2 ? '留袖『菊』VOL.05/08' : 'BLUE DROP #4'}
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
                    <p
                        className={classNames(`text-1.2 leading-[1.738rem] md:text-1.4 md:leading-[2.027rem]`, {
                            'text-white': positionItem <= 3,
                            'text-black': positionItem > 3,
                        })}
                    >
                        JAPAN
                    </p>
                    <p
                        className={classNames(
                            `text-1.6 leading-[2.317rem]  md:text-1.8 md:leading-[2.6rem] md:mb-1.4 md:mt-0.7`,
                            {
                                'text-white': positionItem <= 3,
                                'text-black': positionItem > 3,
                            },
                        )}
                    >
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
