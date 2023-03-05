/* eslint-disable @next/next/no-img-element */
import { ICardDetailCardProps } from '@lib/domain/category';
import classNames from 'classnames';
import { FC } from 'react';
import styled from 'styled-components';
const CategoryDetailCard: FC<ICardDetailCardProps> = ({ className }) => {
    return (
        <CateforyItemStyle className={classNames(`category-position-4 relative  clear-both`, className)}>
            <img
                className='absolute w-[39.70%] lg:w-[29.379rem] h-auto lg:h-[19.76rem] left-[48.06%] lg:left-[36.9rem]'
                alt='category frame 1'
                src={`/assets/images/category-details/frame1.svg`}
            />

            <div className='absolute left-[64%] lg:left-[48.9rem] tracking-[0.4rem] max-lg:mt-[3%] lg:top-[2rem] flex items-center'>
                <span className={`text-white text-[1.5vw] sm:text-1.5   lg:leading-[2.2rem] font-bold`}>ETHEREUM</span>
            </div>
            <img
                className='absolute w-[41.233%] lg:w-[30.513rem] h-auto lg:h-[20.524rem] max-lg:mt-[8.7%] lg:top-[6.34rem] left-[0.916%] lg:left-[0.687rem]'
                alt='category frame 2'
                src={'/assets/images/category-details/frame2.svg'}
            />
            <img
                className='absolute  w-[100%] lg:w-[74rem] lg:h-[74rem] max-lg:mt-[7.7%] lg:top-[5.72rem]'
                alt='category frame 3'
                src={`/assets/images/category-details/frame3.svg`}
            />
            <img
                className='absolute  w-[93%]  lg:w-[68.7rem] lg:h-[68.7rem] mt-[8.8%] lg:mt-[6.72rem] left-[1.4%] lg:left-[1%]'
                alt='category frame 3'
                src={`/assets/images/category-details/frame4.svg`}
            />
            <div className='overflow-hidden  absolute  w-[93%] max-md:h-[14vw] h-[9.4rem]  lg:w-[68.7rem] lg:h-[9.4rem] md:mt-[2.2%] lg:mt-[1.2rem]  lg:left-[1.2%]'>
                <img
                    className='move-line-card-left-to-right absolute  w-[93%]  lg:w-[59.7rem]  max-md:h-[14vw] h-[9.4rem]'
                    alt='category frame 3'
                    src={`/assets/images/category-details/frame6.png`}
                />
            </div>
            <div className='overflow-hidden  absolute  w-[93%] max-md:h-[14vw] h-[9.4rem]  lg:w-[68.7rem] lg:h-[9.4rem] mt-[94.8%] md:mt-[96.2%] lg:mt-[70.7rem]  lg:left-[1.2%]'>
                <img
                    className='move-line-card-right-to-left absolute  w-[93%]  lg:w-[59.7rem]  max-md:h-[14vw] h-[9.4rem]'
                    alt='category frame 3'
                    src={`/assets/images/category-details/frame6.png`}
                />
            </div>
            <div className='absolute mask w-[91.89%] lg:w-[68rem] h-auto lg:h-[68rem]  max-lg:mt-[9.4%] lg:top-[7rem] left-[2.02%] lg:left-[1.5rem]'>
                <img alt='category frame 3' src={'/assets/images/category-details/thumbnail.svg'} />
            </div>

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
            width: 332px;
            height: 500px;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: cover;
            @media (max-width: 768px) {
                width: 41.6vw;
                height: 62.667vw;
            }
        }
    }
    .mask::before {
        content: '';
        padding-top: 100%;
        display: block;
    }
`;
