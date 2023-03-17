/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import React from 'react';

export default function CardInfoBlackOwner() {
    let positionItem: any = localStorage.getItem('ProductPositionItem');
    positionItem = positionItem ? parseInt(positionItem) : 4;
    positionItem = positionItem === 1 ? 1 : positionItem === 2 || positionItem === 3 ? 2 : 4;
    const listOwner = [
        `/assets/images/category-details/owner-${positionItem}-1.svg`,
        `/assets/images/category-details/owner-${positionItem}-2-active.svg`,
        `/assets/images/category-details/owner-${positionItem}-3.svg`,
        `/assets/images/category-details/owner-${positionItem}-4.svg`,
    ];
    return (
        <>
            <div
                className={classNames(
                    'border-t border-b py-[2.7rem] md:pt-2 md:pb-2.4  flex items-center justify-between',
                    {
                        'border-eclipse': positionItem !== 1,
                        'border-white': positionItem === 1,
                    },
                )}
            >
                <p
                    className={classNames(`text-1.2 leading-[1.738rem] md:text-2 md:leading-2.896  font-bold  mr-3`, {
                        'text-white': positionItem <= 3,
                        'text-black': positionItem > 3,
                    })}
                >{`Owner's Rights`}</p>
                <ul className='flex gap-[1.16rem] md:gap-[1.954rem]'>
                    {!isEmpty(listOwner) &&
                        listOwner.map((item: any, index: React.Key | null | undefined) => (
                            <li key={index}>
                                <img
                                    className='w-[3.431rem] h-[3.431rem] md:w-[5.732rem] md:h-[5.732rem]'
                                    alt='category frame 1'
                                    src={item}
                                />
                            </li>
                        ))}
                </ul>
            </div>
            <ul
                className={classNames(`md:justify-around mt-[2.7rem] gap-[8rem] gap-y-3 flex max-md:flex-wrap`, {
                    'text-white': positionItem <= 3,
                    'text-black': positionItem > 3,
                })}
            >
                <li>
                    <p className='text-[1.262rem] md:text-1.5 leading-[1.827rem] md:leading-2.172 font-semibold'>
                        Stock
                    </p>
                    <p className='text-[2.523rem] md:text-3 leading-[3.653rem] md:leading-[4.343rem] font-semibold'>
                        1/2
                    </p>
                </li>
                <li>
                    <p className='text-[1.262rem] md:text-1.5 leading-[1.827rem] md:leading-2.172 font-semibold'>
                        Owners
                    </p>
                    <p className='text-[2.523rem] md:text-3 leading-[3.653rem] md:leading-[4.343rem] font-semibold'>
                        1
                    </p>
                </li>
                <li>
                    <p className='text-[1.262rem] md:text-1.5 leading-[1.827rem] md:leading-2.172 font-semibold'>
                        Serial
                    </p>
                    <p className='text-[2.523rem] md:text-3 leading-[3.653rem] md:leading-[4.343rem] font-semibold'>
                        ore-lisa-33
                    </p>
                </li>
            </ul>
        </>
    );
}
