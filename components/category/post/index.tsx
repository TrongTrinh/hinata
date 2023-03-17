/* eslint-disable @next/next/no-img-element */
import ButtonBackOverview from '@components/common/buttons/back-to-overview';
import ButtonOrange from '@components/common/buttons/button-orange';
import RadioFilter from '@components/common/buttons/radio';
import CardInfoBlack from '@components/page/CardInfoBlack/layout';
import CardInfoBlackOwner from '@components/page/CardInfoBlack/owner';
import CardInfoBlackUser from '@components/page/CardInfoBlack/user';
import CategoryDetailCard from '@components/page/CategoryDetailCard';
import ListWorks from '@components/page/ListWork';
import TokenHistory from '@components/page/token-history';
import { ISearchFilterItem } from '@lib/domain/common/search-header';
import { categories_dummy } from '@lib/utils/dummy/categories';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import { useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
const CategoryDetailPage = () => {
    const isBigTabletSize = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const items = [
        { name: 'ウォレットで購入する', id: '23432' },
        { name: 'PayPalで支払う', id: '1432432423' },
        { name: 'デビットカードまたはクレジットカード', id: '1232432433' },
    ];
    const [itemActive, setItemActive] = useState('23432');

    const data = categories_dummy.slice(0, 4);

    const btnBack = <ButtonBackOverview page='works' className='mb-2' />;
    const onClickFollow = useCallback(() => {
        console.log('push');
    }, []);
    let positionItem: any = localStorage.getItem('ProductPositionItem');
    positionItem = positionItem ? parseInt(positionItem) : 4;
    return (
        <div className='container mx-auto'>
            <div className='clearfix relative pt-[3.046rem] md:pt-[12.8rem]  overflow-hidden'>
                {isBigTabletSize && btnBack}
                <CategoryDetailCard />
                <CardInfoBlack page={'works'}>
                    <CardInfoBlackUser />
                    <div
                        className={classNames('border-t  pt-2.2 max-md:mt-4', {
                            'border-eclipse': positionItem !== 1,
                            'border-white': positionItem === 1,
                        })}
                    >
                        <p className='flex items-center mb-0.8'>
                            <span
                                className={classNames('text-1.8 mr-1 leading-[2.6rem]', {
                                    'text-suva-grey': positionItem !== 1,
                                    'text-white': positionItem === 1,
                                })}
                            >
                                販売価格
                            </span>
                            <span
                                className={classNames(`text-2.4 font-bold leading-[3.475rem]`, {
                                    'text-white': positionItem <= 3,
                                    'text-black': positionItem > 3,
                                })}
                            >
                                ￥100,000
                            </span>
                        </p>
                        <p className='flex items-center mb-0.8'>
                            <span
                                className={classNames('text-1.8 mr-1 leading-[2.6rem]', {
                                    'text-suva-grey': positionItem !== 1,
                                    'text-white': positionItem === 1,
                                })}
                            >
                                販売価格
                            </span>
                            <span
                                className={classNames(`text-2.4 font-bold leading-[3.475rem]`, {
                                    'text-white': positionItem <= 3,
                                    'text-black': positionItem > 3,
                                })}
                            >
                                ￥100,000
                            </span>
                        </p>
                        <div className='flex flex-col gap-3 md:gap-[1.3rem] mt-3 md:my-2 max-md:pb-2 '>
                            {!isEmpty(items) &&
                                items.map((item: ISearchFilterItem, index: React.Key | null | undefined) => (
                                    <RadioFilter
                                        className={`uppercase ${positionItem > 3 ? 'text-black' : 'text-white'}`}
                                        key={index}
                                        isActive={item.id === itemActive}
                                        item={item}
                                        handleClick={setItemActive}
                                        buttonColor={`${positionItem > 3 ? 'black' : 'white'}`}
                                    />
                                ))}
                        </div>
                        <ButtonOrange
                            className='max-md:mt-4 max-md:mb-4'
                            title={'購入する'}
                            size='w-[22rem] md:w-[20rem] h-3.2'
                            handleClick={onClickFollow}
                            marginT='mt-1'
                        />
                        <p
                            className={classNames(`text-1.2 leading-[2rem] md:mt-3 mb-2.4 md:mb-2.8`, {
                                'text-white': positionItem <= 3,
                                'text-black': positionItem > 3,
                            })}
                        >
                            ※アクセスが集中する際には、NFTが反映されるまでに時間がかかる場合があります
                        </p>
                    </div>
                    <CardInfoBlackOwner />
                </CardInfoBlack>
            </div>
            <div className='border-t border-b border-ghost py-4 md:py-5'>
                <h3 className='text-1.8 leading-[2.6rem] font-bold'>アイテム詳細</h3>
                <p className='text-1.5 leading-[3rem] font-medium mt-2'>
                    これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで後ほど正式なものが入ります。
                </p>
            </div>
            <TokenHistory />
            {isMobileSize && <hr className='border-ghost mt-4 pb-0.8' />}
            <ListWorks
                items={data}
                title='More works'
                className='md:pb-[1.2rem] max-md:mb-1.8'
                classTitle='pb-3'
                classWrapBtn='pt-3 md:pt-[5.7rem]'
                classBtnBack='max-md:mt-[2.8rem]'
            />
        </div>
    );
};

export default CategoryDetailPage;
