/* eslint-disable @next/next/no-img-element */
import { dummy_users } from '@lib/utils/dummy/users';
import { NextPage } from 'next';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const CreatorSection: NextPage = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const creators = dummy_users;

    const button_orange = (
        <Link href={`/creators/`} className='button w-[66px] h-[32px] font-jost font-normal max-md:mt-3'>
            ALL
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
                    creators.map((creator, index) => (
                        <figure key={index} className='border border-b-eclipse'>
                            <Link href={`/creators/${creator.slug || creator.id}`} className='flex items-center'>
                                <div>
                                    <img
                                        className='w-[7.9rem] md:w-[9rem] h-[7.9rem] md:h-[9rem] object-cover mr-2 rounded-full mb-1.6'
                                        src={creator.avatar || '/assets/images/common/icn-notlogin.jpg'}
                                        alt={creator.nickname || ''}
                                    />
                                </div>
                                <div className='flex flex-col font-nato pb-1.4'>
                                    <div className='text-1.3 uppercase font-medium text-suva-grey'>
                                        {creator.Country?.name}
                                    </div>
                                    <div className='text-1.5 text-white uppercase font-bold '>{creator.nickname}</div>
                                </div>
                            </Link>
                        </figure>
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
        background: linear-gradient(135deg, #cb211b, #f4691b);
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
