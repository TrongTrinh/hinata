/* eslint-disable @next/next/no-img-element */
import { APP_ROUTES } from '@lib/constants/routers';
import { ICreatorItemProps } from '@lib/domain/creator';
import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

const CreatorItem: FC<ICreatorItemProps> = ({
    item,
    className,
    classTitle,
    classCounty,
    classImg,
    size = 'w-[7.9rem] md:w-[9rem] h-[7.9rem] md:h-[9rem]',
}) => {
    return (
        <figure className={classNames('border-b', className)}>
            <Link href={`${APP_ROUTES.creators.path}/${item.slug || item.id}`} className='flex items-center'>
                <div className='max-md:ml-2'>
                    <img
                        className={classNames('object-cover mr-2 rounded-full mb-1.6', size, classImg)}
                        src={item.avatar || '/assets/images/common/icn-notlogin.jpg'}
                        alt={item.nickname || ''}
                    />
                </div>
                <div className='flex flex-col font-nato pb-1.4'>
                    <div className={classNames('text-1.3 uppercase font-medium text-suva-grey', classCounty)}>
                        {item.Country?.name}
                    </div>
                    <div className={classNames('text-1.5 text-black uppercase font-bold', classTitle)}>
                        {item.nickname}
                    </div>
                </div>
            </Link>
        </figure>
    );
};

export default CreatorItem;
