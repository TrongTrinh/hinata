/* eslint-disable @next/next/no-img-element */
import { APP_ROUTES } from '@lib/constants/routers';
import { ICategory } from '@lib/domain/interfaces/i-category';
// import { APIGetListCategory } from '@lib/infra/category';
import { categories_dummy } from '@lib/utils/dummy/categories';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
// import { IUser } from '@lib/domain/interfaces/i-user';
// import { fetcher } from '@lib/utils/fetcher';
// import useSWR from 'swr';

const CategorySection: NextPage = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const categories = categories_dummy;
    // const { data } = APIGetListCategory()
    const buttonAll = (
        <div className='flex justify-center'>
            <Link
                href={`${APP_ROUTES.works.path}`}
                className='w-[6.6rem] h-3.2 font-jost font-normal text-1.4 max-md:mt-2 shadow-black-0.5 bg-gradient-orange rounded-[2rem] flex justify-center items-center text-white '
            >
                <span className='relative'> ALL</span>
            </Link>
        </div>
    );
    return (
        <SectionStyle isMobileSize={isMobileSize} className='pt-5 md:pt-[9.9rem] pb-[5.6rem] md:pb-[13.1rem]'>
            {/* <div className='text-3 leading-[4.35rem]  pb-2 md:pb-3 text-center font-jost'>CATEGORY</div> */}
            <div className='flex justify-center items-center mb-2 md:mb-3'>
                <div className='text-3 mr-2 text-center leading-[4.35rem] font-jost'>CATEGORY</div>
                {!isMobileSize && categories && buttonAll}
            </div>

            <div className='grid  grid-cols-2 md:grid-cols-3 gap-x-2.5 gap-y-2  sm:gap-2 md:gap-2.5 max-w-[89rem] px-1.6 md:mx-auto'>
                {categories &&
                    categories.map((category: ICategory) => (
                        <figure key={category.id} className='rounded-[0.6rem] p-0.4 sm:p-0.9'>
                            <Link href={`${APP_ROUTES.works.path}`}>
                                {/* width: 100%; height: 100%; position: absolute; top: 0; left: 0; object-fit: cover;
                                border-radius: 0.4rem; */}
                                <div className='w-auto h-auto relative before:pt-[65%] before:block'>
                                    <img
                                        src={
                                            // @ts-ignore
                                            category.products[Math.floor(Math.random() * category.products.length)]
                                                .Product.minimizedImage || ''
                                        }
                                        alt={category.name}
                                        className={'w-full h-full absolute top-[0] left-[0] object-cover rounded'}
                                    />
                                </div>
                                <figcaption>{category.name}</figcaption>
                            </Link>
                        </figure>
                    ))}
            </div>
            {isMobileSize && buttonAll}
        </SectionStyle>
    );
};

export default CategorySection;

const SectionStyle = styled.div<{ isMobileSize: boolean }>`
    .top {
        display: flex;
        justify-content: center;
        align-items: center;
        .title {
            font-family: 'Jost';
            font-weight: bold;
            font-size: 3rem;
            letter-spacing: 0.2em;
            margin: 0 1rem;
            line-height: 1.2;
        }
    }

    .items {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 1.5rem;
    }

    figure {
        box-shadow: 0.4rem 0.6rem 1.1rem 0rem #0000001f;
        background: linear-gradient(313.28deg, #ffffff -11.82%, #bdbdbd 166.51%);
        // img {
        //     width: 100%;
        //     height: 100%;
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     object-fit: cover;
        //     border-radius: 0.4rem;
        // }
        figcaption {
            font-size: ${(props) => (props.isMobileSize ? '1.2rem' : '1.5rem')};
            padding: ${(props) => (props.isMobileSize ? '1.0rem .2rem .6rem .2rem' : '1.8rem .2rem 1.2rem .2rem')};
            line-height: 1.5;
            text-align: left;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
        }
        a {
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;
