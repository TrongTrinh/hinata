import Layout from 'components/layouts/main';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
const AboutV = dynamic(() => import('@components/about'), {
    ssr: false,
});
const AboutMobileV = dynamic(() => import('@components/about/mobile'), {
    ssr: false,
});
const Home: NextPage = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });
    return <Layout isHomePage={true}>{isMobileSize ? <AboutMobileV /> : <AboutV />}</Layout>;
};

export default Home;
