/* eslint-disable @next/next/no-img-element */
import ButtonDirectProductCard from '@components/common/buttons/directProductDetail';
import { APP_ROUTES } from '@lib/constants/routers';
import { ICategoryItemProps } from '@lib/domain/category';
import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
const Category: FC<ICategoryItemProps> = ({ item, className, positionItem, linkDetail }) => {
    const image1 =
        positionItem == 1 ? 'frame-violet-1' : positionItem === 2 || positionItem === 3 ? 'frame-1' : 'frame-black-1';
    const image3 =
        positionItem == 1 ? 'violet' : positionItem === 2 ? 'yellow' : positionItem === 3 ? 'white' : 'black';

    return (
        <ButtonDirectProductCard
            positionItem={positionItem}
            link={linkDetail || `${APP_ROUTES.works.path}/product-detail`}
        >
            <CateforyItemStyle
                className={classNames(
                    `category-position-${positionItem} relative w-[26.9rem] h-[37.5rem] clear-both`,
                    className,
                )}
            >
                <img
                    className='w-[14.5rem] h-[9.8rem] absolute left-[10.644rem]'
                    alt='category frame 1'
                    src={`/assets/images/category/${image1}.svg`}
                />

                <div className='absolute left-[14rem] tracking-[0.4rem] top-0.8 flex items-center'>
                    <img
                        className='w-[1rem] h-[1rem]'
                        alt='category frame 1'
                        src={`/assets/images/category/item-icon-top-${Math.floor(Math.random() + 1.5)}.svg`}
                    />
                    <span
                        className={`${
                            positionItem && positionItem > 3 ? 'text-black' : 'text-white'
                        } text-[0.8rem] leading-[1.158rem] ml-0.6 font-bold`}
                    >
                        ETHEREUM
                    </span>
                </div>
                <img
                    className='w-[14.5rem] h-[9.8rem] absolute top-[2.99rem] left-[1.679rem]'
                    alt='category frame 2'
                    src={'/assets/images/category/frame-2.svg'}
                />
                <img
                    className='w-[26.8rem] h-[26.8rem] absolute top-[2.7rem] left-[1.3rem]'
                    alt='category frame 3'
                    src={`/assets/images/category/shadow.svg`}
                />
                <img
                    className='absolute w-[25.7rem] h-[25.7rem] top-[2.7rem] left-[1.3rem]'
                    alt='category frame 3'
                    src={`/assets/images/category/frame-${image3}-3.svg`}
                />
                {positionItem && positionItem < 4 && (
                    <>
                        <div className='absolute w-[2.2rem] h-[24rem] overflow-hidden  top-[16rem] left-[0.5rem]'>
                            <img
                                className='w-[3rem] h-[20rem] left-[0.6rem]'
                                alt='category frame 3'
                                src={`/assets/images/category-details/light-${
                                    positionItem && positionItem === 2 ? 'yellow' : 'white'
                                }-vertical.png`}
                            />
                        </div>
                        <div className='absolute w-[3rem] h-[17rem] overflow-hidden  top-[0rem] left-[251px]'>
                            <img
                                className='w-[50rem] h-[20rem] left-[0.6rem]'
                                alt='category frame 3'
                                src={`/assets/images/category-details/light-${
                                    positionItem && positionItem === 2 ? 'yellow' : 'white'
                                }-vertical.png`}
                            />
                        </div>
                    </>
                )}
                <div className='mask w-[25.7rem] absolute top-[2.7rem] left-[1.3rem]'>
                    <img
                        alt='category frame 3'
                        src={
                            // @ts-ignore
                            item.products[Math.floor(Math.random() * item.products.length)].Product.minimizedImage || ''
                        }
                    />
                </div>

                <img
                    className='move-card-product-left-to-right absolute  top-[1.2rem] w-[12rem] h-[4rem]'
                    alt='category frame 3'
                    src={`/assets/images/category/light.png`}
                />

                <img
                    className=' z-[999] move-card-product-right-to-left absolute  top-[24.5rem] w-[12rem] h-[4rem]'
                    alt='category frame 3'
                    src={`/assets/images/category/light.png`}
                />
                <div className='content w-[24.2rem] h-[11.2rem] absolute bottom-0 rounded-lg opacity-[0.9]'></div>
                <div className='content w-[24.2rem] h-[11.2rem] absolute bottom-0 rounded-lg px-0.9 pt-0.8 pb-0.8 font-nato'>
                    <h2 className='title font-medium text-1.3 leading-[1.882rem] mb-0.1 uppercase flex items-center justify-between'>
                        <span>SEKIYA-SENSHOKU </span>
                        <div className='flex items-center'>
                            <Image
                                alt='category heart'
                                width={13.31}
                                height={11.14}
                                src={`/assets/images/common/${positionItem === 1 ? 'heart' : 'heart-grey'}.svg`}
                            />
                            <span className='ml-0.3'>115</span>
                        </div>
                    </h2>
                    <h3 className='subtitle font-bold text-1.6 leading-[2.317rem] mb-0.4 '>留袖『菊』VOL.05/08</h3>
                    <hr className='border-white' />
                    <p className='price mt-[0.7rem]'>
                        <span className='font-medium text-1.2 leading-[2.317rem] mr-1'>販売価格</span>
                        <span className='font-bold text-1.6 leading-[1.738rem] price-value'>(￥100,000)</span>
                    </p>
                    <p className='price-sale mt-[0.1rem] font-medium text-1.2 leading-[1.738rem] '>
                        <span className='mr-1'>再販価格</span>
                        <span className='price-value'>---</span>
                    </p>
                </div>
            </CateforyItemStyle>
        </ButtonDirectProductCard>
    );
};

export default Category;
const CateforyItemStyle = styled.div`
    color: #898786 !important;
    .price-value,
    .subtitle {
        color: black;
    }
    .content {
        background: linear-gradient(90deg, #bdbdbd 0%, #ffffff 100%);
    }
    &.category-position-1 {
        color: white !important;
        .price-value,
        .subtitle {
            color: white;
        }
        .content {
            background: linear-gradient(
                103.97deg,
                #004cbe -73.12%,
                #a854d0 87.84%,
                #8dc8d9 204.9%,
                #0098b2 253.67%,
                #438ba1 370.73%,
                #00808d 414.63%
            );
        }
    }
    &.category-position-2,
    &.category-position-3 {
        .content {
            background: linear-gradient(90deg, #000000 0%, #3e3a39 100%);
        }
        .price-value {
            color: white;
        }
    }
    &.category-position-2 {
        color: #898786 !important;
        .price-value,
        .subtitle {
            color: #898786 !important;
        }
        .content {
            .subtitle {
                background: -webkit-linear-gradient(
                    135deg,
                    #807728 2.19%,
                    #d3cc9b 17.4%,
                    #d2c996 22.77%,
                    #d1bf88 27.25%,
                    #ceb071 33.51%,
                    #cead6c 34.41%,
                    #a99352 38.88%,
                    #8b7d3c 42.46%,
                    #807534 45.15%,
                    #806f31 48.73%,
                    #805d25 53.2%,
                    #a78048 63.94%,
                    #6e4d28 68.42%,
                    #4d3015 71.1%,
                    #6f4e20 78.26%,
                    #805d25 82.73%,
                    #a78048 91.68%
                );

                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
    &.category-position-3 {
        .content {
            .subtitle {
                background: -webkit-linear-gradient(
                    135deg,
                    #e5e2de 2.19%,
                    #d6d4d1 5.77%,
                    #afb0ae 12.04%,
                    #717576 20.99%,
                    #4c5355 25.46%,
                    #8e9293 35.31%,
                    #bec0c1 43.36%,
                    #dcdcdd 49.63%,
                    #e7e7e7 53.21%,
                    #dddede 58.58%,
                    #c3c5c8 68.42%,
                    #999ea2 80.06%,
                    #969ba0 80.95%,
                    #b0b0b1 91.69%
                );

                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }

    .mask {
        position: relative;
        mask-image: url('/assets/images/index/frame_mask.png');
        mask-size: 100%;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
        }
    }
    .mask::before {
        content: '';
        padding-top: 100%;
        display: block;
    }
`;
