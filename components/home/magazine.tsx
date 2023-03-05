/* eslint-disable @next/next/no-img-element */
import MagazineItem from '@components/magazine/item';
import { APP_ROUTES } from '@lib/constants/routers';
import { MagazinHooks } from '@lib/infra/magazine';
import { isEmpty } from 'lodash';
import { NextPage } from 'next';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const MagazineSection: NextPage = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1536 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1536, min: 1200 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1200, min: 900 },
            items: 3,
        },
        largeMobile: {
            breakpoint: { max: 900, min: 0 },
            items: 2,
        },
    };

    const { posts } = MagazinHooks();

    const buttonAll = (
        <div className='flex justify-center'>
            <Link
                href={`${APP_ROUTES.magazine.path}`}
                className='w-[6.6rem] h-3.2 font-jost font-normal text-1.4 max-md:mt-2 shadow-black-0.5 bg-gradient-orange rounded-[2rem] flex justify-center items-center text-white '
            >
                <span className='relative'> ALL</span>
            </Link>
        </div>
    );
    return (
        <SectionStyle isMobileSize={isMobileSize} className='bg-white-smoke pt-4 md:pt-[8rem] pb-[7.6rem] md:pb-[8rem]'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center mb-2 md:mb-3'>
                    <div className='text-3 text-black font-jost mr-2 text-center leading-[4.35rem]'>MAGAZINE</div>
                    {!isMobileSize && posts && buttonAll}
                </div>

                {isMobileSize ? (
                    <div className='mx-0.8'>
                        {!isEmpty(posts) && posts.map((item, index) => <MagazineItem key={index} item={item} />)}
                        {buttonAll}
                    </div>
                ) : (
                    <Carousel responsive={responsive} className=''>
                        {!isEmpty(posts) &&
                            posts.map((item, index) => <MagazineItem key={index} item={item} marginB='mb-2' />)}
                    </Carousel>
                )}
            </div>
        </SectionStyle>
    );
};

export default MagazineSection;

const SectionStyle = styled.div<{ isMobileSize: boolean }>`
    .react-multiple-carousel__arrow {
        background: #ffffff;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        margin: 3px;
    }
    .react-multiple-carousel__arrow::before {
        color: #000000;
    }
    .react-multiple-carousel__arrow--left {
        left: 0;
    }
    .react-multiple-carousel__arrow--right {
        right: 0;
    }
`;
