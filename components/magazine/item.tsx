/* eslint-disable @next/next/no-img-element */
import { APP_ROUTES } from '@lib/constants/routers';
import { IMagazineItemProps } from '@lib/domain/magazine';
import classnames from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';

const MagazineItem: FC<IMagazineItemProps> = ({ item, className, marginB = '' }) => {
    return (
        <figure
            key={item.id}
            className={classnames(
                'md:mr-3 p-[0.733rem] md:p-0.6 bg-gradient-magazine-item rounded-[0.6rem] shadow-magazine-box ',
                className,
                marginB,
            )}
        >
            <Link href={`${APP_ROUTES.magazine.path}/magazine-detail`}>
                <div className='w-auto h-auto relative before before:pt-[32.267rem] md:before:pt-[26.4rem] before:block'>
                    <img
                        className='w-full h-full absolute top-0 left-0 object-cover rounded-md'
                        src={item.media.source_url}
                        // src={
                        //     'https://amatsuhi-prod-images.s3.ap-northeast-1.amazonaws.com/tokens/19d75c51-801b-40d6-827a-c9bc1f5f46d0-mini-plain-silly-addition'
                        // }
                        alt={item.media.alt_text}
                    />
                </div>
                <figcaption className='font-bold font-nato text-1.8 md:text-1.5 leading-[2.6rem] md:leading-2 my-1 md:mt-0.6 md:mb-1 px-[1.672rem] md:px-0.6  max-h-[5.2rem] md:max-h-[5.2rem] overflow-hidden '>
                    {item.title.rendered}
                </figcaption>
                <hr className='my-8 h-px border-[#CECECF] border-1.6' />
                <div className='text-1.5 md:text-1.3 uppercase leading-[2.2rem] md:leading-[1.88rem] flex items-center text-suva-grey mt-1 mb-[0.7rem] md:mt-[0.76rem] md:mb-[0.5rem] px-[1.672rem] md:px-0.6'>
                    <div className='category'>{item.category.name}</div>
                    <div className='mx-0.4'>|</div>
                    <div className='date'>{dayjs(item.date).format('YYYY.MM.DD')}</div>
                </div>
            </Link>
        </figure>
    );
};

export default MagazineItem;
