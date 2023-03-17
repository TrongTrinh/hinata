import ButtonBackOverview from '@components/common/buttons/back-to-overview';
import { ILayoutProps } from '@lib/domain/layout';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const CardInfoBlack: React.FC<ILayoutProps> = ({ children, page = 'creators', classBtnBack, classWrapInfo }) => {
    const isBigTabletSize = useMediaQuery({ query: '(max-width: 1024px)' });

    const btnBack = <ButtonBackOverview page={page} className={classNames('mb-2', classBtnBack)} />;
    let positionItem: any = localStorage.getItem('ProductPositionItem');
    positionItem = positionItem ? parseInt(positionItem) : 4;
    return (
        <CardInfoBlackStyled
            className={`mt-[114.5%] lg:mt-[10rem] mb-5 md:mb-4 lg:mb-[7rem] w-full  lg:max-w-[55.2rem] float-right ${classWrapInfo}`}
        >
            <div className='flex justify-end'>{!isBigTabletSize && btnBack}</div>
            <div
                className={classNames(
                    `relative rounded-[1rem] bg-gradient-category-detail-card px-2 lg:px-4 py-2.2 lg:py-3.5 text-white info  bgrd-product-info-${positionItem}`,
                    {
                        'bgrd-product-info-4': positionItem > 3,
                    },
                )}
            >
                <p
                    className={classNames(
                        `hidden md:block  absolute top-[29.4rem] right-[2.3rem] origin-top-right rotate-90 text-2.4`,
                        {
                            'opacity-[0.1]': positionItem === 1,
                            'opacity-[0.03]': positionItem === 2 || positionItem === 3,
                            'opacity-[0.2]': positionItem > 3,
                        },
                    )}
                >
                    NFT MARKET PRACE
                </p>
                {children}
            </div>
        </CardInfoBlackStyled>
    );
};
const CardInfoBlackStyled = styled.div`
    &.card-info-profile {
        .info {
            // background: black;
        }
    }
`;
export default CardInfoBlack;
