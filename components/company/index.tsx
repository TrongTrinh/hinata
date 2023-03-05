/* eslint-disable @next/next/no-img-element */
import InformationItem from '@components/common/infomation-web/item';
import PageBanner from '@components/page/Banner';
import { company_data_2 } from '@lib/constants/company';
import { TInformationItem } from '@lib/domain/common/infomation-web';
// import Categories from 'components/category/list';

const CategoryPage = () => {
    return (
        <>
            <div className='text-center'>
                <PageBanner title='Company' classNameTitle='leading-[5rem]' />
                <div className='max-md:px-3'>
                    <p
                        className='max-md:px-2 font-medium text-2 leading-[3.5rem] mt-4 md:mt-[5.4rem]'
                        dangerouslySetInnerHTML={{
                            __html: `デジタルの無限の可能性を照らし出す—。</br> 
                            アートやクリエイティブ、ビジネスの世界に </br> 
                            トークンエコノミーの未来を創造していきます。`,
                        }}
                    />
                    <p
                        className='font-medium text-1.4 leading-[2.45rem] mt-5 mb-3 md:mb-4 md:mt-4'
                        dangerouslySetInnerHTML={{
                            __html: `インターネットが世界に革命をもたらし、世界中の人達が繋がり、</br>
                        様々な情報を発信することが当たり前になった現在。</br>
                        リアルとデジタルは密接に融合し、私たちの生活に溶け込んでいます。</br>
                        </br>
                        しかし、デジタルの世界は未だ発展途上で、</br>
                        地球が誕生した時のようなあらゆるエネルギーが入り混ざった無限の可能性を秘めた世界でもあります。
                        </br>
                        そこに、ブロックチェーン技術という新たな発明が出現し、</br>
                        NFT（Non-Fungible Token、非代替性トークン）」という革命が今、巻き起ころうとしています。
                        </br>
                        </br>
                        我々は、アートやクリエイティブを創り出す、すべてのクリエイター達や、</br>
                        ビジネスで世界を切り拓こうとする人々に、</br>
                        NFTという新たな価値をもたらすことで、無限に広がるデジタルの世界へと誘います。`,
                        }}
                    />
                    <p
                        className=' max-md:hidden font-medium text-1.4 leading-[2.45rem] md:text-2 md:leading-[3.5rem] mt-3 mb-5 md:mb-3 md:mt-4'
                        dangerouslySetInnerHTML={{
                            __html: 'デジタルの無限の可能性を照らし出す—。</br> アートやクリエイティブ、ビジネスの世界に </br> トークンエコノミーの未来を創造していきます。',
                        }}
                    />
                    <div className='flex justify-center'>
                        <img src='/assets/images/common/company_top.svg' alt='company' className='w-[12rem]' />
                    </div>
                </div>
            </div>
            <div className='mb-4.8 md:mb-[12.5rem] mt-[5rem] md:mt-[5.4rem]'>
                <h3 className='mb-1.8 md:mb-3'>
                    <span className='text-2.8 leading-[4.046rem] md:text-3.4 md:leading-[4.913rem] font-jost'>
                        OUTLINE
                    </span>
                    <span className='ml-3.8 text-1.6 leading-[3.6rem] text-suva-grey'>会社概要</span>
                </h3>
                <div className='border-last-item-none grid grid-cols-1 gap-x-3'>
                    {company_data_2.map((item: TInformationItem, key) => (
                        <InformationItem
                            classWrap={`py-1.8 md:py-[3rem] items-start md:items-center ${
                                item.isBorderB ? 'border-b' : ''
                            }`}
                            key={key}
                            title={item.title}
                            desc={item.desc}
                            classDes='text-1.4 leading-[2.4rem] md:leading-[3.6rem] md:text-1.6'
                            classWrapTitle='min-w-[20rem] block'
                            classTitle='max-md:block max-md:pb-[0.5rem] text-1.5 leading-[2.172rem] md:text-1.8 md:leading-[2.6rem]'
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryPage;
