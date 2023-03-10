import Layout from 'components/layouts/main';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const HomePageV = dynamic(() => import('@components/home'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout isHomePage={true}>
            <HomePageV />
        </Layout>
    );
};

export default Home;
