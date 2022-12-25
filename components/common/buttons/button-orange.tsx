/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import Link from 'next/link';
import { useCallback } from 'react';

const ButtonOrange = ({
    href = '',
    hanldeClick,
    className,
    title = 'all',
    imgClass = 'w-1 h-0.5',
    classTitle = '',
    imgSrc,
}: {
    href?: string;
    hanldeClick?: any;
    className?: string;
    imgSrc?: string;
    title?: string;
    imgClass?: string;
    classTitle?: string;
}) => {
    const onClick = useCallback(() => {
        hanldeClick && hanldeClick();
    }, [hanldeClick]);

    if (hanldeClick)
        return (
            <button
                type='button'
                onClick={onClick}
                className={classnames(
                    'w-[6.6rem] h-[3.2rem] font-jost font-normal text-1.4 max-md:mt-2 shadow-black-0.5 bg-gradient-orange rounded-[2rem] flex justify-center items-center text-white ',
                    className,
                )}
            >
                <span className={classTitle}>{title}</span>
                {imgSrc && (
                    <div className={imgClass}>
                        <img className='w-full' src={imgSrc} alt='btn image' />
                    </div>
                )}
            </button>
        );

    return (
        <div className='flex justify-center'>
            <Link
                href={href}
                className={classnames(
                    'w-[6.6rem] h-[3.2rem] font-jost font-normal text-1.4 max-md:mt-2 shadow-black-0.5 bg-gradient-orange rounded-[2rem] flex justify-center items-center text-white ',
                    className,
                )}
            >
                <span className={classTitle}>{title}</span>
            </Link>
        </div>
    );
};

export default ButtonOrange;
