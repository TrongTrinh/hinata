import { IPageBannerProps } from '@lib/domain/page';
import React, { FC } from 'react';

const PageBanner: FC<IPageBannerProps> = ({ title, className }) => {
    return (
        <div className={className}>
            <h1 className=' uppercase leading-[6.5rem] md:leading-[13.5rem] text-[4.5rem] md:text-[9.4rem] mb-2'>
                {title}
            </h1>
        </div>
    );
};

export default PageBanner;
