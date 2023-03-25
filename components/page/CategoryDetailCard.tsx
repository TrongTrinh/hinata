/* eslint-disable @next/next/no-img-element */
import { ICardDetailCardProps } from '@lib/domain/category';
import classNames from 'classnames';
import { FC } from 'react';
import styled from 'styled-components';
const CategoryDetailCard: FC<ICardDetailCardProps> = ({ className }) => {
    let positionItem: any = localStorage.getItem('ProductPositionItem');
    positionItem = positionItem ? parseInt(positionItem) : 4;
    const image1 =
        positionItem == 1
            ? 'frame-violet-1'
            : positionItem === 2 || positionItem === 3
            ? 'frame-black-1'
            : 'frame-white-1';
    const image3 =
        positionItem == 1 ? 'violet' : positionItem === 2 ? 'yellow' : positionItem === 3 ? 'white' : 'black';
    // const thumbnail = positionItem > 3 ? 4 : positionItem;

    // const lineAnimation = positionItem === 2 ? 'yellow' : 'white';
    // const text = positionItem === 2 ? 'HINATA' : positionItem === 3 ? 'POLYGON' : 'ETHEREUM';
    return (
        <CateforyItemStyle className={classNames(`category-position-4 relative  clear-both`, className)}>
            <img
                className='w-[25.9rem] h-[28.2rem] absolute left-[1.5rem]'
                alt='category frame 1'
                src={`/assets/images/category/frame_${image3}.png`}
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
            <div className='mask w-[23.3rem] absolute top-[3.28rem] left-[2.345rem]'>
                <img
                    className='absolute w-[39.70%] lg:w-[29.379rem] h-auto lg:h-[19.76rem] left-[48.06%] lg:left-[36.9rem]'
                    alt='category frame 1'
                    src={`/assets/images/category-details/${image1}.svg`}
                />
            </div>
            {/* <img
                className='absolute w-[39.70%] lg:w-[29.379rem] h-auto lg:h-[19.76rem] left-[48.06%] lg:left-[36.9rem]'
                alt='category frame 1'
                src={`/assets/images/category-details/${image1}.svg`}
            />

            <div className='absolute left-[58%] md:left-[60%] lg:left-[43.9rem] tracking-[0.4rem] max-lg:mt-[2%] lg:top-[2rem] flex items-center'>
                <img
                    className='w-[4vw] h-[4vw] sm:w-[2.5rem] sm:h-[2.5rem] mr-0.6'
                    alt='category frame 1'
                    src={`/assets/images/category/item-icon-top-${Math.floor(Math.random() + 1.5)}.svg`}
                />
                <span
                    className={`${
                        positionItem && positionItem > 3 ? 'text-black' : 'text-white'
                    }  text-[2.2vw] sm:text-1.5   lg:leading-[2.2rem] font-medium font-nato tracking-[4px] md:tracking-[8px]`}
                >
                    {text}
                </span>
            </div>
            <img
                className='absolute w-[41.233%] lg:w-[30.513rem] h-auto lg:h-[20.524rem] max-lg:mt-[8.7%] lg:top-[6.34rem] left-[0.916%] lg:left-[0.687rem]'
                alt='category frame 2'
                src={'/assets/images/category-details/frame2.svg'}
            />

            <img
                className='absolute  w-[100%] lg:w-[72rem] lg:h-[72rem] max-lg:mt-[7.7%] lg:top-[5.72rem]'
                alt='category frame 3'
                src={`/assets/images/category-details/frame-shadow-3.svg`}
            />
            <img
                className='absolute  w-[100%] lg:w-[71rem] lg:h-[71rem] max-lg:mt-[7.7%] lg:top-[5.72rem]'
                alt='category frame 3'
                src={`/assets/images/category-details/frame-${image3}-3.svg`}
            />

            {positionItem && positionItem < 4 && (
                <>
                    <div className='absolute w-[7rem]  h-[30vw] sm:h-[30rem] overflow-hidden  max-sm:mt-[68vw] sm:top-[35.6rem]   md:top-[58.6rem]  lg:top-[46.7rem] left-[-2.8rem]'>
                        <img
                            className='w-[7rem] h-[45vw] sm:h-[50rem] left-[0.6rem]'
                            alt='category frame 3'
                            src={`/assets/images/category-details/light-${
                                positionItem && positionItem === 2 ? 'yellow' : 'white'
                            }-vertical.png`}
                        />
                    </div>
                    <div className='absolute w-[7rem] xl:left-[67rem] xl:top-[-5rem] lg:left-[66.9rem] lg:top-[-5rem] md:left-[78rem]  sm:h-[50rem] h-[30rem] overflow-hidden    right-[-3rem] '>
                        <img
                            className='w-[7rem] sm:h-[50rem] h-[30rem] left-[0.6rem]'
                            alt='category frame 3'
                            src={`/assets/images/category-details/light-${
                                positionItem && positionItem === 2 ? 'yellow' : 'white'
                            }-vertical.png`}
                        />
                    </div>
                </>
            )}
            {positionItem === 2 && (
                <img
                    className='absolute  mask  w-[97%]  lg:w-[69rem] lg:h-[69rem] mt-[9.1%] lg:mt-[6.72rem] left-[1.5%] lg:left-[1%]'
                    alt='category frame 3'
                    src={`/assets/images/category-details/frame4.svg`}
                />
            )}
            <div className='overflow-hidden  absolute  w-[93%] max-md:h-[14vw] h-[9.4rem]  lg:w-[68.7rem] lg:h-[9.4rem] md:mt-[2.2%] lg:mt-[1.2rem]  lg:left-[1.2%]'>
                <img
                    className='move-line-card-left-to-right absolute  w-[93%]  lg:w-[59.7rem]  max-md:h-[14vw] h-[9.4rem]'
                    alt='category frame 3'
                    src={`/assets/images/category-details/line-${lineAnimation}-animation.png`}
                />
            </div>
            <div className='overflow-hidden  absolute  w-[93%] max-md:h-[14vw] h-[9.4rem]  lg:w-[68.7rem] lg:h-[9.4rem] mt-[98.8%] md:mt-[100.8%] lg:mt-[71.3rem]  lg:left-[1.2%]'>
                <img
                    className='move-line-card-right-to-left absolute  w-[93%]  lg:w-[59.7rem]  max-md:h-[14vw] h-[9.4rem]'
                    alt='category frame 3'
                    src={`/assets/images/category-details/line-${lineAnimation}-animation.png`}
                />
            </div>
            <div className='absolute mask  w-[97%]  lg:w-[68.7rem] lg:h-[68.7rem] mt-[9.1%] lg:mt-[6.72rem] left-[1.5%] lg:left-[1%]'>
                <img
                    className={classNames({ 'img-2': positionItem === 2 })}
                    alt='category frame 3'
                    src={`/assets/images/category-details/thumbnail-${thumbnail}.svg`}
                />
            </div> */}
            <div className={'list-stars max-lg:relative max-lg:w-[155%] max-sm:w-[150%]'}>
                <img
                    className={`star1 w-[13px] absolute mt-[50%] left-[10%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star2 w-[18px] absolute  mt-[15%] left-[20%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star3 w-[28px] absolute  mt-[30%] left-[40%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star1 w-[13px] absolute mt-[55%] left-[20%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star2 w-[18px] absolute  mt-[60%] left-[20%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star1 w-[28px] absolute  mt-[60%] left-[50%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star4 w-[13px] absolute  mt-[40%] left-[10%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star5 w-[18px] absolute  mt-[50%] left-[35%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star6 w-[28px] absolute  mt-[25%] left-[35%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star7 w-[13px] absolute  mt-[10%] left-[10%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star8 w-[18px] absolute  mt-[15%] left-[40%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star9 w-[28px] absolute  mt-[30%] left-[5%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star7 w-[13px] absolute  mt-[10%] left-[10%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star8 w-[18px] absolute  mt-[15%] left-[40%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star9 w-[28px] absolute  mt-[30%] left-[5%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star7 w-[13px] absolute  mt-[10%] left-[10%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star8 w-[18px] absolute  mt-[15%] left-[40%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star9 w-[28px] absolute  mt-[30%] left-[5%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star7 w-[13px] absolute  mt-[10%] left-[50%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star8 w-[18px] absolute  mt-[50%] left-[50%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star9 w-[28px] absolute  mt-[20%] left-[20%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star9 w-[28px] absolute  mt-[35%] left-[20%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
                <img
                    className={`star10 w-[28px] absolute  mt-[20%] left-[30%]`}
                    alt='category star'
                    src={`/assets/images/category-details/stars/star.png`}
                />
            </div>
        </CateforyItemStyle>
    );
};

export default CategoryDetailCard;

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
        mask-image: url('/assets/images/category-details/frame_mask.svg');
        mask-size: 100%;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: cover;
            @media (max-width: 768px) {
                width: 100%;
                height: 100%;
            }
            &.img-2 {
                width: 332px;
                height: 500px;
            }
        }
    }
    .mask::before {
        content: '';
        padding-top: 100%;
        display: block;
    }
`;
