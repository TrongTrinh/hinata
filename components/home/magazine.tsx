import { WpPost } from '@lib/domain/interfaces/wp/wp-post';
import axios from 'axios';
import dayjs from 'dayjs';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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

    const [posts, setPosts] = useState<WpPost[]>([]);
    const [wpPostsLoading, setWpPostsLoading] = useState<boolean>(false);
    console.log('🚀 ~ file: magazine.tsx ~ line 36 ~ wpPostsLoading', wpPostsLoading);

    useEffect(() => {
        setWpPostsLoading(true);

        (async () => {
            try {
                const { data: wpPosts } = await axios.get(
                    `https://www.official.hinata-nft.com/wp-json/wp/v2/posts?per_page=8&status=publish`,
                );

                const mediaAddedPosts: WpPost[] = await Promise.all(
                    wpPosts
                        .map((post: WpPost) => {
                            if (post.featured_media === 0) return null;

                            return axios
                                .get(`https://www.official.hinata-nft.com/wp-json/wp/v2/media/${post.featured_media}`)
                                .then(({ data: media }) => {
                                    return {
                                        ...post,
                                        media,
                                    };
                                });
                        })
                        .filter((post: WpPost) => post !== null),
                );

                const categoryAddedPosts: WpPost[] = await Promise.all(
                    mediaAddedPosts.map((post: WpPost) => {
                        return axios
                            .get(`https://www.official.hinata-nft.com/wp-json/wp/v2/categories/${post.categories[0]}`)
                            .then(({ data: category }) => {
                                return {
                                    ...post,
                                    category,
                                };
                            });
                    }),
                );

                setPosts(categoryAddedPosts);
            } catch (err) {
                console.log(err);
            }

            setWpPostsLoading(false);
        })();
    }, []);

    const Items = posts.map((post) => (
        <figure key={post.id} className='md:mr-3 p-0.6 mb-2'>
            <a href={post.link}>
                <div className='img-wrap'>
                    <img src={post.media.source_url} alt={post.media.alt_text} />
                </div>

                {/* .footer {
            display: flex;
            font-size: 1.2rem;
            color: #898786;
            padding: 0 2px;
            overflow: hidden;
            .divider {
                font-size: 1.1rem;
                padding: 0 4px;
            }
        } */}
                <figcaption className='font-bold font-nato text-1.5 leading-2 mt-0.6 mb-1 px-0.6 max-h-[4.4rem] overflow-hidden '>
                    {post.title.rendered}
                </figcaption>
                <hr className='my-8 h-px border-[#CECECF] border-1.6' />
                <div className='text-1.3 uppercase leading-[1.88rem] flex text-suva-grey mt-[0.76rem] mb-[0.5rem] px-0.6'>
                    <div className='category'>{post.category.name}</div>
                    <div className='mx-0.4'>|</div>
                    <div className='date'>{dayjs(post.date).format('YYYY.MM.DD')}</div>
                </div>
            </a>
        </figure>
    ));
    const buttonAll = (
        <div className='flex justify-center'>
            <Link
                href={`https://www.official.hinata-nft.com/all`}
                className='w-[6.6rem] h-[3.2rem] font-jost font-normal text-1.4 max-md:mt-2 shadow-black-0.5 bg-gradient-orange rounded-[2rem] flex justify-center items-center text-white '
            >
                ALL
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
                    <div className='mx-[5.2rem]'>
                        {Items}
                        {buttonAll}
                    </div>
                ) : (
                    <Carousel responsive={responsive} className=''>
                        {Items}
                    </Carousel>
                )}
            </div>
        </SectionStyle>
    );
};

export default MagazineSection;

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
            margin: 0 10px;
            line-height: 1.2;
        }
    }

    figure {
        background: linear-gradient(325.6deg, #ffffff -12%, #bdbdbd 166.85%);
        border-radius: 6px;
        box-shadow: 4px 6px 11px 0px #0000001f;

        .img-wrap {
            width: auto;
            height: auto;
            position: relative;
        }
        .img-wrap::before {
            content: '';
            padding-top: 264px;
            display: block;
        }
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            border-radius: 4px;
        }
    }

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
