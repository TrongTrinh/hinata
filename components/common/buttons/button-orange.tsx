/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IButtonOrangeProps } from '@lib/domain/common/button-orange';
import classnames from 'classnames';
import Link from 'next/link';
import { FC, useCallback } from 'react';

const ButtonOrange: FC<IButtonOrangeProps> = ({
    href = '',
    handleClick,
    className,
    title = 'all',
    imgClass = 'w-1 h-0.5',
    classTitle = '',
    imgSrc,
    size = 'w-[6.6rem] h-[3.2rem]',
    children,
    item,
    marginT = 'max-md:mt-2 ',
}) => {
    const onClick = useCallback(() => {
        handleClick && handleClick(item);
    }, [handleClick, item]);

    if (handleClick)
        return (
            <button
                type='button'
                onClick={onClick}
                className={classnames(
                    'relative font-jost font-normal text-1.4 shadow-black-0.5 bg-gradient-orange rounded-[2rem] flex justify-center items-center text-white ',
                    size,
                    className,
                    marginT,
                )}
            >
                {children ? (
                    children
                ) : (
                    <>
                        <span className={classTitle}>{title}</span>
                        {imgSrc && (
                            <div className={imgClass}>
                                <img className='absolute right-1.4' src={imgSrc} alt='btn image' />
                            </div>
                        )}
                    </>
                )}
            </button>
        );

    return (
        <div className='flex justify-center'>
            <Link
                href={href}
                className={classnames(
                    'font-jost font-normal text-1.4 max-md:mt-2 shadow-black-0.5 bg-gradient-orange rounded-[2rem] flex justify-center items-center text-white ',
                    size,
                    className,
                )}
            >
                <span className={classTitle}>{title}</span>
            </Link>
        </div>
    );
};

export default ButtonOrange;
