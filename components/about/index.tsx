import VisualSection from '@components/about/visual';
import Footer from '@components/layouts/main/footer';
import ReactFullpage from '@fullpage/react-fullpage';
import { v2Container } from '@lib/hocs/with-v2-container';
import { FC } from 'react';

const Home: FC = () => {
    const pluginWrapper = () => {
        require('assets/statics/fullpage.fadingEffect.min');
        require('assets/statics/fullpage.scrollHorizontally.min');
    };
    return (
        <ReactFullpage
            pluginWrapper={pluginWrapper}
            licenseKey={'G5ZKK-S9DLH-AK3A7-H8JMJ-OYYUL'}
            scrollingSpeed={500}
            fadingEffectKey={'SUlhR2x1WVhSaExXNW1kQzVqYjIwPW5LX3Y3WVptRmthVzVuUldabVpXTjA4blk='}
            // type FadingEffect = boolean | "sections" | "slides";
            // fadingEffect={'slides'}
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

                    <div className='section pt-[8.4rem] fp-auto-height'>
                        <Footer />
                    </div>
                </ReactFullpage.Wrapper>
            )}
        />
    );
};

export default Home;
