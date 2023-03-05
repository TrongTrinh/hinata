import ButtonBackOverview from '@components/common/buttons/back-to-overview';
import { ILayoutProps } from '@lib/domain/layout';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

const CardInfoBlack: React.FC<ILayoutProps> = ({ children, page = 'creators', classBtnBack }) => {
    const isBigTabletSize = useMediaQuery({ query: '(max-width: 1024px)' });

    const btnBack = <ButtonBackOverview page={page} className={classNames('mb-2', classBtnBack)} />;

    return (
        <div className='mt-[114.5%] lg:mt-4.2 mb-5 md:mb-4 lg:mb-[7rem] w-full  lg:max-w-[55.2rem] float-right'>
            <div className='flex justify-end'>{!isBigTabletSize && btnBack}</div>
            <div className='relative rounded-[1rem] bg-gradient-category-detail-card px-2 lg:px-4 py-2.2 lg:py-3.5 text-white'>
                <p className=' hidden md:block opacity-[0.03] absolute top-[29.4rem] right-[2.3rem] origin-top-right rotate-90 text-2.4'>
                    NFT MARKET PRACE
                </p>
                {children}
            </div>
        </div>
    );
};

export default CardInfoBlack;
