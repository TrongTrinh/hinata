/* eslint-disable @next/next/no-img-element */
import { APP_ROUTES } from '@lib/constants/routers';
import { IButtonBackPageProps } from '@lib/domain/common/button';
import classnames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

const ButtonBackOverview: FC<IButtonBackPageProps> = ({
    page,
    size = 'w-2 md:w-2.8 h-2 md:h-2.8',
    className,
    ...props
}) => {
    const name = (page && APP_ROUTES[page].name) || props.name || 'back';
    const href = (page && APP_ROUTES[page].path) || props.href || '/';
    return (
        <Link href={href} className={classnames('flex items-center', className)}>
            <div
                className={classnames('flex items-center justify-center rounded-full shadow-button-back-orange', size)}
                style={{
                    background: 'linear-gradient(135deg, #CB211B 42.22%, #F4691B 85.35%)',
                }}
            >
                <img
                    alt='back to overview page'
                    className='w-[0.65rem] h-[10.5rem]'
                    src={'/assets/images/common/arrow-left.svg'}
                />
            </div>
            <span className='ml-1 md:ml-1.2 uppercase leading:[2.168rem] md:leading-[2.89rem] text-1.5 md:text-2 font-semibold'>
                {name}
            </span>
        </Link>
    );
};

export default ButtonBackOverview;
