/* eslint-disable @next/next/no-img-element */
import CreatorItem from '@components/creators/item';
import { APP_ROUTES } from '@lib/constants/routers';
// import { APIGetListCreators } from '@lib/infra/creators';
import { dummy_users } from '@lib/utils/dummy/users';
import { NextPage } from 'next';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
// import { IUser } from '@lib/domain/interfaces/i-user';
// import { fetcher } from '@lib/utils/fetcher';
// import useSWR from 'swr';

const CreatorSection: NextPage = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const creators = dummy_users;
    // const { data } = APIGetListCreators();

    const button_orange = (
        <Link
            href={`${APP_ROUTES.creators.path}`}
            className='button bg-gradient-orange w-[66px] h-[32px] font-jost font-normal max-md:mt-3'
        >
            <span className='relative'> ALL</span>
        </Link>
    );
    return (
        <SectionStyle isMobileSize={isMobileSize} className='bg-black pt-4 md:pt-[7rem] pb-[6.6rem] md:pb-[8.4rem] '>
            <div className='flex justify-center items-center mb-1.8 md:mb-4.4'>
                <div className='text-3 text-white font-jost mr-2 text-center'>OFFICIAL CREATORS</div>
                {!isMobileSize && creators && button_orange}
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[1rem] md:gap-y-[2.6rem] container mx-auto'>
                {creators &&
                    creators.map((item, index) => (
                        <CreatorItem item={item} key={index} classTitle='text-white' className=' border-eclipse' />
                    ))}
            </div>
            {isMobileSize && creators && <div className='flex justify-center'>{button_orange}</div>}
        </SectionStyle>
    );
};

export default CreatorSection;

const SectionStyle = styled.div<{ isMobileSize: boolean }>`
    .button {
        font-family: 'Jost';
        font-weight: bold;
        font-size: 1.4rem;
        color: #fff;
        text-decoration: none;
        border-radius: 20px;
        padding: 5px 25px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        display: inline-block;
    }
    .react-multiple-carousel__arrow {
        background: #ffffff;
        box-shadow: 1px 1px 3px #999999;
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
