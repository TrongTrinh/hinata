/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React from 'react';

const LinkDetail = ({
    href,
    target,
    onClick,
    children,
    style,
    className,
}: {
    href?: string;
    target?: string;
    onClick?: any;
    children?: any;
    style?: any;
    className?: any;
}) => {
    if (onClick)
        return (
            <a style={{ ...style, cursor: 'pointer' }} onClick={onClick}>
                {children}
            </a>
        );

    return (
        <Link href={String(href)}>
            {!!target ? (
                <a target={String(target)} style={style} className={className}>
                    {children}
                </a>
            ) : (
                <a style={style} className={className}>
                    {children}
                </a>
            )}
        </Link>
    );
};

export default LinkDetail;
