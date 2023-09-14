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
import classNames from 'classnames';
import { useCallback, useReducer } from 'react';
import { useMediaQuery } from 'react-responsive';
const CategoryDetailPage = () => {
    const isBigTabletSize = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const data = categories_dummy.slice(0, 4);

    const btnBack = <ButtonBackOverview page='my_collection' className='mb-2  text-white' />;
    const [isMoreRead, setisMoreRead] = useReducer((prev) => !prev, false);
    const onClickMoreRead = useCallback(() => {
        setisMoreRead();
    }, []);
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 29 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    let positionItem: any = localStorage.getItem('ProductPositionItem');
    positionItem = positionItem ? parseInt(positionItem) : 4;
    return (
        <div>
            <div className='container mx-auto'>
                <div className='clearfix relative pt-[3.046rem] md:pt-[12.8rem] overflow-hidden'>
                    {isBigTabletSize && btnBack}
                    <CategoryDetailCard />
                    <CardInfoBlack page='my_collection' classBtnBack='text-white' classWrapInfo='card-info-profile'>
                        <CardInfoBlackUser />
                        <div
                            className={classNames('border-t  pt-2 md:pt-2.6 max-md:mt-4', {
                                'text-black': positionItem > 3,
                                'border-eclipse': positionItem !== 1,
                                'border-white': positionItem === 1,
                            })}
                        >
                            <h2
                                className={classNames('text-1.5 md:text-1.8 md:leading-[2.606rem]', {
                                    'text-black': positionItem > 3,
                                })}
                            >
                                アイテム詳細
                            </h2>
                            <p
                                className={classNames(
                                    'text-1.2 leading-[2rem] md:text-1.5 md:leading-[3rem] mt-0.6 md:mt-1',
                                    {
                                        'max-h-4 md:max-h-[6rem] overflow-hidden': !isMoreRead,
                                        'text-black': positionItem > 3,
                                    },
                                )}
                            >
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                                これは仮テキストで後ほど正式なものが入ります。後ほどここに説明文が入り、現状は仮テキストを入れています。これは仮テキストで...
                            </p>
                            <div className='flex justify-center pt-1.2 pb-1.6 md:pt-1.4 md:pb-2'>
                                <button onClick={onClickMoreRead} className='flex justify-center items-center'>
                                    <span className='text-1.2 leading-[1.8rem] md:text-1.4 md:leading-[2.023rem] font-light mr-1'>
                                        MORE READ
                                    </span>
                                    <div>
                                        <img
                                            src={`/assets/images/common/dropdown-${
                                                positionItem > 3 ? 'black' : 'white'
                                            }.svg`}
                                            alt='more read'
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <CardInfoBlackOwner />
                        <div className='flex justify-center pt-2.6 pb-1.6'>
                            <ButtonOrange
                                handleClick={onClickShowMore}
                                size='w-[20rem] md:w-[34.8rem] h-3.2'
                                title='Download'
                                className='uppercase  mr-1'
                                classTitle='text-1.4 leading-[2rem]'
                            />
                        </div>
                    </CardInfoBlack>
                </div>
                <hr className='border-eclipse mt-2 pb-0.8' />
                <TokenHistory
                    className='history-table-black md:mt-2'
                    classWrappBtn='pt-[3rem] pb-[1rem] md:pt-[7rem] md:pb-[2rem]'
                    classTitle='text-white'
                    title='Token History'
                />
                {isMobileSize && <hr className='border-ghost mt-4 pb-0.8' />}
                <ListWorks
                    items={data}
                    title='More works'
                    className='md:pb-[1.2rem] max-md:mb-1.8'
                    classTitle='pb-3 text-white'
                    classWrapBtn='pt-3 md:pt-[5.7rem]'
                    classBtnBack='max-md:mt-[2.8rem] text-white'
                    pageTitle={'my_collection'}
                    classTextBtnBack='font-normal'
                />
            </div>
        </div>
    );
};

export default CategoryDetailPage;
