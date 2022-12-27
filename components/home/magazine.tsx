/* eslint-disable @next/next/no-img-element */
import MagazineItem from '@components/magazine/item';
import { magazine_dummy } from '@lib/utils/dummy/magazine';
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

    const posts = magazine_dummy;
    // const [posts, setPosts] = useState<WpPost[]>([]);
    // const [wpPostsLoading, setWpPostsLoading] = useState<boolean>(false);
    // console.log('🚀 ~ file: magazine.tsx ~ line 36 ~ wpPostsLoading', wpPostsLoading);

    // useEffect(() => {
    //     setWpPostsLoading(true);

    //     (async () => {
    //         try {
    //             const { data: wpPosts } = await axios.get(
    //                 `https://www.official.hinata-nft.com/wp-json/wp/v2/posts?per_page=8&status=publish`,
    //             );

    //             const mediaAddedPosts: WpPost[] = await Promise.all(
    //                 wpPosts
    //                     .map((post: WpPost) => {
    //                         if (post.featured_media === 0) return null;

    //                         return axios
    //                             .get(`https://www.official.hinata-nft.com/wp-json/wp/v2/media/${post.featured_media}`)
    //                             .then(({ data: media }) => {
    //                                 return {
    //                                     ...post,
    //                                     media,
    //                                 };
    //                             });
    //                     })
    //                     .filter((post: WpPost) => post !== null),
    //             );

    //             const categoryAddedPosts: WpPost[] = await Promise.all(
    //                 mediaAddedPosts.map((post: WpPost) => {
    //                     return axios
    //                         .get(`https://www.official.hinata-nft.com/wp-json/wp/v2/categories/${post.categories[0]}`)
    //                         .then(({ data: category }) => {
    //                             return {
    //                                 ...post,
    //                                 category,
    //                             };
    //                         });
    //                 }),
    //             );

    //             setPosts(categoryAddedPosts);
    //         } catch (err) {
    //             console.log(err);
    //         }

    //         setWpPostsLoading(false);
    //     })();
    // }, []);

    const buttonAll = (
        <div className='flex justify-center'>
            <Link
                href={`/magazine`}
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
