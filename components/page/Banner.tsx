import { IPageBannerProps } from '@lib/domain/page';
import classNames from 'classnames';
import React, { FC } from 'react';

const PageBanner: FC<IPageBannerProps> = ({ classNameTitle, title, className }) => {
    return (
        <div className={className}>
            <h1
                className={classNames(
                    'uppercase leading-[6.5rem] md:leading-[13.5rem] text-[4.5rem] md:text-[9.4rem] mb-2 font-jost',
                    classNameTitle,
                )}
            >
                {title}
            </h1>
        </div>
    );
};

export default PageBanner;
