import { IInformationItemProps } from '@lib/domain/common/infomation-web';
import classNames from 'classnames';
import React, { FC } from 'react';

const InformationItem: FC<IInformationItemProps> = ({
    title,
    desc,
    classWrap = 'py-2',
    classTitle = 'max-md:block max-md:pb-[0.5rem] text-1.5 leading-[2.2rem] md:text-1.8 md:leading-[2.6rem]',
    classDes = 'text-1.4 leading-[2.4rem] md:text-1.6  md:leading-3.9',
    classWrapTitle = 'w-full md:w-[20rem]',
    classSubTitle,
    subTitle,
}) => {
    return (
        <div className={classNames('flex max-md:flex-col border-t  border-ghost', classWrap)}>
            <span className={classNames(classWrapTitle)}>
                {title && (
                    <span
                        className={classNames(' font-semibold', classTitle)}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}
                {subTitle && (
                    <span
                        className={classNames(
                            'md:w-full text-1.6 leading-[2.317rem] md:mt-0.3 font-medium',
                            classSubTitle,
                        )}
                        dangerouslySetInnerHTML={{ __html: subTitle }}
                    />
                )}
            </span>
            {desc && (
                <span
                    className={classNames('w-full text-suva-grey ', classDes)}
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
            )}
        </div>
    );
};

export default InformationItem;
