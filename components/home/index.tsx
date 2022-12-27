import CategorySection from '@components/home/category';
import CreatorSection from '@components/home/creator';
import MagazineSection from '@components/home/magazine';
import ReleaseSection from '@components/home/release';
import SliderSection from '@components/home/slider';
import VisualSection from '@components/home/visual';
import Footer from '@components/layouts/main/footer';
import ReactFullpage from '@fullpage/react-fullpage';
import { v2Container } from '@lib/hocs/with-v2-container';
import { ProductsAuctionDummy } from '@lib/utils/dummy/products_auction';
import { ProductsChoiceDummy } from '@lib/utils/dummy/products_choice';
import { FC } from 'react';
const pluginWrapper = () => {
    require('assets/statics/fullpage.fadingEffect.min');
    require('assets/statics/fullpage.scrollHorizontally.min');
};

const Home: FC = () => {
    return (
        <ReactFullpage
            pluginWrapper={pluginWrapper}
            licenseKey={'G5ZKK-S9DLH-AK3A7-H8JMJ-OYYUL'}
            scrollingSpeed={700}
            fadingEffectKey={'SUlhR2x1WVhSaExXNW1kQzVqYjIwPW5LX3Y3WVptRmthVzVuUldabVpXTjA4blk='}
            fadingEffect={'slides'}
            scrollHorizontallyKey={'MDZhR2x1WVhSaExXNW1kQzVqYjIwPU01X1d4bmMyTnliMnhzU0c5eWFYcHZiblJoYkd4NTYyag=='}
            scrollHorizontally={true}
            slidesNavigation={false}
            controlArrows={false}
            autoScrolling={true}
            scrollOverflow={true}
            render={() => (
                <ReactFullpage.Wrapper>
                    <div className='section'>
                        <VisualSection />
                    </div>
                    <div className='section'>
                        <div className='slide'>
                            <SliderSection
                                slideKey='choice'
                                slideNo='01'
                                title={
                                    <p>
                                        HOT <br className='max-md:hidden'></br> CHOICE
                                    </p>
                                }
                                api='/api/products?order=created:desc&take=8&squery=hotChoice->equals->true'
                                link='/auction'
                                products={ProductsChoiceDummy}
                            />
                        </div>
                        <div className='slide'>
                            <SliderSection
                                title={
                                    <p>
                                        HOT <br className='max-md:hidden'></br> AUCTION
                                    </p>
                                }
                                slideKey='auction'
                                slideNo='02'
                                api=''
                                link='/auction'
                                products={ProductsAuctionDummy}
                            />
                        </div>
                        <div className='slide'>
                            <SliderSection
                                slideKey='new'
                                slideNo='03'
                                title='NEW ITEM'
                                api='/api/products?order=created:desc&take=12'
                                link='/auction'
                                products={ProductsChoiceDummy}
                            />
                        </div>
                    </div>
                    <div className='section pt-[8.4rem]'>
                        <ReleaseSection />
                        <CreatorSection />
                        <CategorySection />
                        <MagazineSection />
                        <Footer />
                    </div>
                </ReactFullpage.Wrapper>
            )}
        />
    );
};

export default v2Container(Home);
