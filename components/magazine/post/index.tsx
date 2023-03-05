/* eslint-disable @next/next/no-img-element */
import ButtonOrange from '@components/common/buttons/button-orange';
import { isEmpty } from 'lodash';
import { useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';

const CategoryPage = () => {
    const listOwner = [
        '/assets/images/common/twitter-active.svg',
        '/assets/images/common/facebook-active.svg',
        '/assets/images/common/line-active.svg',
        '/assets/images/common/share-black.svg',
    ];
    const listSocials = (
        <ul className='flex gap-[1.16rem] md:gap-[1.954rem]'>
            {!isEmpty(listOwner) &&
                listOwner.map((item: any, index: React.Key | null | undefined) => (
                    <li key={index}>
                        <img className='w-[3rem] h-[3rem]' alt='category frame 1' src={item} />
                    </li>
                ))}
        </ul>
    );
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    return (
        <div className='mt-[9rem] md:mt-[18rem] max-w-[100rem] px-1.5 mx-auto mb-[12rem]'>
            <GlobalStyle />
            <h1 className='text-2.4 leading-[4rem] md:text-3.4 md:leading-[4.6rem] font-bold'>
                【SDGs×NFT】HINATAではNFTを活用したSDGsの活動を応援しています！
            </h1>
            <div className='flex-col md:flex justify-between items-center  mt-1.4 md:mt-2.6 mb-3 md:mb-3.8'>
                <div className='flex items-center max-md:mb-3'>
                    <div className='w-[8rem] h-[6rem] md:w-[11rem] md:h-[6rem]'>
                        <img
                            className='w-[6rem] h-[6rem]'
                            alt='category frame 1'
                            src={`/assets/images/common/logo.png`}
                        />
                    </div>
                    <div>
                        <p className=' uppercase text-suva-grey text-1.5 leading-[2.172rem] md:text-1.4 md:leading-[2.027rem]'>
                            Campaign | 2022.12.30
                        </p>
                        <p className='text-1.5 leading-[2.172rem] md:text-1.4 md:leading-[2.027rem]  mt-0.5'>
                            TEXT BY HINATA OFFICIAL
                        </p>
                    </div>
                </div>
                {listSocials}
            </div>
            <div className='content'>
                <img alt='category frame 1' src={`/assets/images/magazine-details/img-1.png`} />
                <br></br>
                <br></br>
                <p>
                    兵庫県宝塚市に店舗を構える『おむすび＆一汁三菜カフェ むすび』。<br></br>
                    通常のカフェ営業とともに貧困をなくすSDGsの取り組みとして子ども食堂を開設していますが、その取り組みを持続可能にするための費用は、来店者の寄付と、「HINATA」を活用したNFTアイテムの販売によって支えられています。
                </p>
                <br></br>
                <br></br>
                <div className='hinata-official mt-0 md:mt-3 mb-5 max-md:px-2 max-md:py-1.6 max-md:pb-2.2 px-2 pt-2.2 py-3.8 text-white'>
                    <p className=' mb-2 uppercase text-suva-grey text-1.6 leading-[2.317rem] md:text-2 md:leading-[2.98rem]'>
                        目次
                    </p>
                    <hr className=' border-1 border-suva-grey' />
                    <p className=' uppercase text-1.8 leading-[3rem] md:text-2 md:leading-[2.896rem] py-1.4'>
                        『むすび』独自の取り組み、幸せひよこ募金とは
                    </p>
                    <hr className='border-1 border-suva-grey' />
                    <p className=' uppercase text-1.8 leading-[3rem] md:text-2 md:leading-[2.896rem] pt-1.4'>
                        NFTを通じて世界中で支え合える世の中へ
                    </p>
                </div>
                <h2>『むすび』独自の取り組み、幸せひよこ募金とは</h2>
                <br></br>
                <br></br>
                <p>
                    『むすび』では「幸せひよこ」という独自の募金システムを導入しています。<br></br>
                    <br></br>
                    幸せひよこは子ども食堂の1食分の価格で販売されており、誰かが幸せひよこを購入するとひよこの人形が店頭にストックされていきます。そして子どもが来店すると、既に店頭に並んでいる”誰かが購入した幸せひよこ”を消費して、キッズプレートを無料で食べることができます。（※ご利用の際は店舗ルールをご確認ください）
                </p>
                <br></br>
                <br></br>

                <img alt='category frame 1' src={`/assets/images/magazine-details/img-2.png`} />
                <br></br>
                <br></br>
                <br></br>
                <h2>NFTを通じて世界中で支え合える世の中へ</h2>
                <br></br>
                <br></br>
                <p>
                    かつてはどこかに寄付をするためには、募金箱に現金を入れる、専用の口座に振り込むなどの方法が一般的でした。募金箱のあるところや銀行などに行く必要があり、善意はあっても行動を起こすには重い腰を上げる必要がありました。
                    しかし近年では「今すぐに・誰でも・どこからでも」支援できる上に「寄付を行った記録が残り、購入アイテムが資産価値を持つ可能性がある」という、寄付をした側にも利点を得られることから、NFTを利用した寄付のかたちが注目されています。
                    <br></br>
                    <br></br>
                    そしてNFTによる寄付で最大のネックとなるのはガス代（ブロックチェーン利用にかかるコスト）でしたが、ガス代無料の独自のブロックチェーンを使用している「HINATA」でならその問題も解決されます。
                </p>
                <br></br>
                <br></br>
                <img alt='category frame 1' src={`/assets/images/magazine-details/img-3.png`} />
                <br></br>
                <br></br>
                <br></br>
                <p>
                    世界中のどこからでも、どこへでも寄付を行うことができる。 <br></br>
                    NFTを出品するだけで誰でも寄付を募ることができるため、なにか新たな取り組みに挑戦しやすくなる。
                    むすびのような取り組みが各地に広がることで、究極的には全ての子どもへ食事を届け、お腹を空かせる子どもをなくすことも不可能ではありませんし、LGBTやエコ、環境を守る取り組みなど、あらゆる挑戦に対してNFTを利用した企画を呼びかけることで、よりよい世界へと進んでいけるはずです。
                    <br></br> <br></br>{' '}
                    今後も「HINATA」はNFTプラットフォームとして実現可能な様々な方法で、よりよい世界を目指すSDGsのあらゆる活動を応援いたします！
                </p>
            </div>
            <div className='pt-4 mt-[4rem] pb-3 mb-[3rem] max-md:border-b max-md:border-t border-ghost '>
                <p className='text-suva-grey text-2 font-semibold leading-2.896 mb-1'>関連記事</p>
                <p className='  text-1.8 font-bold leading-[2.606rem] mb-1'>
                    クマとホラーを愛するデザイナー「シゲ」氏がNFTアーティストとしてデビュー！
                </p>
                <p>
                    <span className='text-suva-grey mr-1 text-1.5 leading-[2.172rem]'>2022.12.30</span>
                    <span className='text-1.5 leading-[2.172rem] font-medium'>TEXT BY HINATA OFFICIAL</span>
                </p>
            </div>
            {listSocials}
            <div className='hinata-official flex items-center mt-3 max-md:px-2 max-md:py-2.4 px-3.5 pt-3.8 py-4 text-white'>
                <div className='w-[11rem]'>
                    <img className='w-[6rem] h-[6rem]' alt='category frame 1' src={`/assets/images/common/logo.png`} />
                </div>
                <div className='w-full'>
                    <p className='text-2.2 leading-[3.168rem] md:mt-0.5 font-semibold flex justify-between items-center'>
                        <span>HINATA OFFICIAL</span>
                        <span className='hidden md:blocl'>
                            <img
                                className='w-[3rem] h-[3rem]'
                                alt='category frame 1'
                                src={`/assets/images/common/twitter-white.svg`}
                            />
                        </span>
                    </p>
                    <hr className='mt-0.5 md:mt-0.6 mb-1.5 border-1 border-white-smoke-3' />
                    <p className=' uppercase text-suva-grey text-1.6 leading-[2.317rem] md:text-1.4 md:leading-[2.027rem]'>
                        <span> Tプラットフォーム「HINATA」</span>
                        <span>(2022.12.30公開)</span>
                    </p>
                    <img
                        className='w-[3rem] h-[3rem] md:hidden mt-1.8'
                        alt='category frame 1'
                        src={`/assets/images/common/twitter-white.svg`}
                    />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center pt-[3rem] md:pt-[6rem]'>
                <p className='text-1.6 leading-[2.314rem] md:text-2 md:leading-[2.896rem] mb-1 md:mb-3 font-medium'>
                    のなめぷろだくしょん
                </p>
                <ButtonOrange
                    handleClick={onClickShowMore}
                    size='w-[20rem] md:w-[56.8rem] h-3.2 md:h-[5.2rem] rounded-[999px]'
                    title='WORKS'
                    className='uppercase'
                    classTitle='text-1.4 leading-2.023rem] md:text-2.2 md:leading-[3.179rem]'
                />
            </div>
        </div>
    );
};

export default CategoryPage;
const GlobalStyle = createGlobalStyle`
   .hinata-official {
        background: linear-gradient(90deg, #000000 0%, #3E3A39 100%);   
   }
    .content {
        h1, h2, h3 { 
            font-size: 34px;
            font-weight: 700;
            line-height: 49px; 
        }
        p {  
            font-size: 16px;
            font-weight: 500;
            line-height: 36px; 
            font-weight: 500;
        }
        img {
            width: auto;
            max-width: 100%;
        }
        @media (max-width: 768px) {
            h1, h2, h3 { 
                font-size: 24px; 
                line-height: 34px; 
            } 
        }
    }
`;
