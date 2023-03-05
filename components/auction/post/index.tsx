/* eslint-disable @next/next/no-img-element */
import ButtonBackOverview from '@components/common/buttons/back-to-overview';
import ButtonOrange from '@components/common/buttons/button-orange';
import CardInfoBlack from '@components/page/CardInfoBlack/layout';
import CardInfoBlackOwner from '@components/page/CardInfoBlack/owner';
import CardInfoBlackUser from '@components/page/CardInfoBlack/user';
import CategoryDetailCard from '@components/page/CategoryDetailCard';
import ListWorks from '@components/page/ListWork';
import TokenHistory from '@components/page/token-history';
import { categories_dummy } from '@lib/utils/dummy/categories';
import { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
const CategoryDetailPage = () => {
    const isBigTabletSize = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const data = categories_dummy.slice(0, 4);

    const btnBack = <ButtonBackOverview page='creators' className='mb-2' />;
    const onClickFollow = useCallback(() => {
        console.log('push');
    }, []);
    return (
        <div className='container mx-auto'>
            <div className='clearfix relative pt-[3.046rem] md:pt-[12.8rem] '>
                {isBigTabletSize && btnBack}
                <CategoryDetailCard />
                <CardInfoBlack>
                    <CardInfoBlackUser />
                    <div className='border-t border-eclipse pt-2 max-md:mt-4'>
                        <p className='flex items-center mb-0.8'>
                            <span className='text-1.8 mr-1 text-suva-grey leading-[2.6rem]'>販売価格</span>
                            <span className='text-2.4 font-bold leading-[3.475rem]'>￥100,000</span>
                        </p>
                        <p className='text-1.8 leading-[2rem] mt-2.2 md:mt-3 mb-2 md:mb-2.6'>残り：3日</p>
                        <p className='text-1.8 leading-[2rem] mb-2 md:mb-0.6'>2022/08/26 23:59 終了予定</p>
                        <p className='text-1.8 leading-[2rem] mt-0.3 mb-2 md:mb-3.8'>入札数：51</p>
                        <ButtonOrange
                            className='max-md:mt-4 max-md:mb-4'
                            title={'購入する'}
                            size='w-[22rem] md:w-[20rem] h-3.2'
                            handleClick={onClickFollow}
                            marginT='mt-1'
                        />
                        <p className='text-1.2 leading-[2rem] md:mt-3 mb-2.4 md:mb-2.6'>
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
