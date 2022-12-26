/* eslint-disable @next/next/no-img-element */
import { SectionStyle } from '@components/home/style';
import { IProduct, IProductHomeSlide } from '@lib/domain/interfaces/i-product';
import { getCurrenctySign } from '@lib/utils/common';
import { gsap } from 'gsap';
import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from 'react-responsive';

export type Props = {
    slideKey: string;
    slideNo: string;
    title: React.ReactNode;
    api: string;
    link: string;
    products: IProduct[];
};

const SliderSection: NextPage<Props> = ({ products, slideKey, ...props }) => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const [cards, setCards] = useState<IProductHomeSlide[]>([]);

    useEffect(() => {
        if (products) {
            setCards(
                products.map((product: IProductHomeSlide, index) => {
                    if (index == 0) {
                        return {
                            ...product,
                            isShow: true,
                            isCurrent: true,
                            isPrevious: false,
                        };
                    } else {
                        return {
                            ...product,
                            isShow: false,
                            isCurrent: false,
                            isPrevious: false,
                        };
                    }
                }),
            );
        }
    }, [products]);

    const cardEffect = useCallback(
        (previousSlide: number, { currentSlide: currentSlideNo }: { currentSlide: number }) => {
            if (products) {
                const currentIndex =
                    currentSlideNo >= products.length ? currentSlideNo % products.length : currentSlideNo;

                setCards((prev) => {
                    return prev.map((product: IProductHomeSlide, index) => {
                        if (index == currentIndex) {
                            return {
                                ...product,
                                isShow: true,
                                isCurrent: true,
                                isPrevious: false,
                            };
                        } else if (product.isCurrent) {
                            return {
                                ...product,
                                isShow: true,
                                isCurrent: false,
                                isPrevious: true,
                            };
                        } else {
                            return {
                                ...product,
                                isShow: false,
                                isCurrent: false,
                                isPrevious: false,
                            };
                        }
                    });
                });
            }
        },
        [products],
    );

    const CardLayout = ({ name }: { name: string }) => {
        useEffect(() => {
            const elementIsCurrent = document.querySelector('.' + slideKey + ' .isCurrent > figure > .img-wrap');
            const elementIsPrevious = document.querySelector('.' + slideKey + ' .isPrevious > figure > .img-wrap');
            if (elementIsCurrent && elementIsPrevious) {
                const tl = gsap.timeline({ paused: true });

                tl.fromTo(
                    '.' + slideKey + ' .isCurrent > figure > .img-wrap',
                    {
                        xPercent: 20,
                        yPercent: -30,
                        scale: 0.8,
                        autoAlpha: 0.2,
                    },
                    {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1.0,
                        autoAlpha: 1.0,
                        duration: 1,
                        ease: 'power2.out',
                    },
                    '<',
                )
                    .fromTo(
                        '.' + slideKey + ' .isCurrent > figure > .figcaption-wrap',
                        {
                            xPercent: 20,
                            yPercent: -30,
                            scale: 0.4,
                            autoAlpha: 0.2,
                        },
                        {
                            xPercent: 0,
                            yPercent: 0,
                            scale: 1.0,
                            autoAlpha: 1.0,
                            duration: 1,
                            ease: 'power2.out',
                        },
                        '<',
                    )
                    .fromTo(
                        '.' + slideKey + ' .isCurrent > figure > .plate-wrap',
                        {
                            xPercent: 40,
                            yPercent: -60,
                            scale: 0.4,
                            autoAlpha: 0.2,
                        },
                        {
                            xPercent: 0,
                            yPercent: 0,
                            scale: 1.0,
                            autoAlpha: 1.0,
                            duration: 1,
                            ease: 'power2.out',
                        },
                        '<',
                    )
                    .fromTo(
                        '.' + slideKey + ' .isPrevious > figure > .img-wrap',
                        {
                            xPercent: 0,
                            yPercent: 0,
                            scale: 1.0,
                        },
                        {
                            xPercent: -40,
                            yPercent: 20,
                            scale: 0.8,
                            autoAlpha: 0.1,
                            duration: 1,
                            ease: 'power2.out',
                        },
                        '<',
                    )
                    .fromTo(
                        '.' + slideKey + ' .isPrevious > figure > .figcaption-wrap',
                        {
                            xPercent: 0,
                            yPercent: 0,
                            scale: 1.0,
                        },
                        {
                            xPercent: -26,
                            yPercent: 28,
                            scale: 0.7,
                            autoAlpha: 0.1,
                            duration: 1,
                            ease: 'power2.out',
                        },
                        '<',
                    )
                    .fromTo(
                        '.' + slideKey + ' .isPrevious > figure > .plate-wrap',
                        {
                            xPercent: 0,
                            yPercent: 0,
                            scale: 1.0,
                        },
                        {
                            xPercent: -15,
                            yPercent: 4,
                            scale: 0.6,
                            autoAlpha: 0.1,
                            duration: 1,
                            ease: 'power2.out',
                        },
                        '<',
                    );
                tl.restart();
            }
        }, []);
        return (
            <>
                {products &&
                    products.map((product: IProduct, index) => (
                        <Link href={`/works/${product.slug}`} key={`${product.id}-${index}`}>
                            <div
                                className={`card pt-0 md:pt-[15%] absolute overflow-hidden w-[100vw] md:w-[50vw] h-[100vw] md:h-[50vw] ${
                                    // @ts-ignore
                                    cards[index]?.isShow && cards[index]?.[name] ? '' : 'hidden'
                                } ${
                                    // @ts-ignore
                                    cards[index]?.[name] ? name : ''
                                }`}
                            >
                                <figure>
                                    <div className='wrap figcaption-wrap'>
                                        <figcaption>
                                            <div className='name'>{product.name}</div>
                                            <div className='description'>{product.description}</div>
                                        </figcaption>
                                    </div>
                                    <div className='wrap img-wrap'>
                                        <div className='label'>HINATA</div>
                                        <div className='tab'>HAZAMA</div>
                                        <img className='frame' src='/assets/images/index/frame.png' alt='frame' />
                                        <div className='mask'>
                                            <img src={product.minimizedImage || ''} alt={product.name} />
                                            <div className={`sold ${product.soldout || 'hidden'}`}>SOLD OUT</div>
                                        </div>
                                    </div>
                                    <div className='wrap plate-wrap'>
                                        <div className='plate'>
                                            <div className='creator'>
                                                {product.collections.filter((collection) => collection.origin)[0]?.User
                                                    ?.nickname || ''}
                                            </div>
                                            <div className='name'>{product.name}</div>
                                            <hr />
                                            <div className='price'>
                                                <span className='label'>販売価格</span>
                                                <span className='value'>
                                                    {product.currency && getCurrenctySign(product.currency)}
                                                    {product.price.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className='price'>
                                                <span className='label'>再販価格</span>
                                                <span className='value'>---</span>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </Link>
                    ))}
            </>
        );
    };
    const button_all = (
        <div className='max-md:flex max-md:justify-center max-md:mt-2 max-md:mb-2'>
            <Link
                className='button w-[22.2rem] h-[3.2rem] md:w-[24.167vw] md:h-[2.361vw] text-[1.4rem] md:text-[0.972vw] mt-1 md:mt-[2vw] rounded-[2rem] md:rounded-[1.389vw] flex justify-center items-center text-white'
                href={props.link}
            >
                VIEW ALL
            </Link>
        </div>
    );

    return (
        <SectionStyle isMobileSize={isMobileSize} productsLength={products?.length || 0}>
            <div className='main-section'>
                <div className='top'>
                    <div className='subtitle max-md:mt-[12rem] max-md:mb-3 w-[19.2rem] h-[2.8rem] md:w-[10.972vw] md:h-[1.667vw] text-[1.2rem] md:text-[0.694vw] rounded-[1.5rem] md:rounded-[1.389vw] flex justify-center items-center border '>
                        RECOMMENDED PRODUCT
                    </div>
                    <div className='title'>{props.title}</div>
                    {!isMobileSize && button_all}
                    <div className='dots-container'>
                        <span className='number'>{props.slideNo}</span>
                        <span className={`dots ${props.slideNo == '01' && 'isActive'}`}></span>
                        <span className='between-dots'></span>
                        <span className='between-dots'></span>
                        <span className='between-dots'></span>
                        <span className={`dots ${props.slideNo == '02' && 'isActive'}`}></span>
                        <span className='between-dots'></span>
                        <span className='between-dots'></span>
                        <span className='between-dots'></span>
                        <span className={`dots ${props.slideNo == '03' && 'isActive'}`}></span>
                    </div>
                </div>
                <div className={`cards relative w-[100vw] md:w-[50vw] h-full overflow-hidden  ${slideKey}`}>
                    <CardLayout name={`isPrevious`} key='isPrevious' />
                    <CardLayout name={`isCurrent`} key='isCurrent' />
                </div>
            </div>
            <div className='slider-section'>
                {products ? (
                    <Carousel
                        className='items slider-items'
                        infinite={true}
                        swipeable={false}
                        draggable={false}
                        // autoPlay={true}
                        // autoPlaySpeed={3000}
                        focusOnSelect={true}
                        responsive={{
                            superLargeDesktop: {
                                breakpoint: { max: 4000, min: 1536 },
                                items: products.length > 12 ? 12 : products.length,
                            },
                            desktop: {
                                breakpoint: { max: 1536, min: 1200 },
                                items: products.length > 10 ? 10 : products.length,
                            },
                            tablet: {
                                breakpoint: { max: 1200, min: 900 },
                                items: products.length > 8 ? 8 : products.length,
                            },
                            largeMobile: {
                                breakpoint: { max: 900, min: 0 },
                                items: products.length > 6 ? 6 : products.length,
                            },
                        }}
                        afterChange={cardEffect}
                    >
                        {products.map((product: IProduct) => (
                            <figure key={product.id}>
                                <div className='img-wrap'>
                                    <img className='frame' src='/assets/images/index/frame.png' alt='frame product' />
                                    <div className='mask'>
                                        <img src={product.minimizedImage || ''} alt={product.name} />
                                    </div>
                                </div>
                            </figure>
                        ))}
                    </Carousel>
                ) : (
                    <div />
                )}
                {isMobileSize && products && button_all}
            </div>
            <img className='pattern' src='/assets/images/index/bg_pattern.png' alt='frame pattern' />
        </SectionStyle>
    );
};

export default SliderSection;
