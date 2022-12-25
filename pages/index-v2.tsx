import Layout from 'components/layouts/main';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const HomePageV = dynamic(() => import('@components/home-v2'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <HomePageV />
        </Layout>
    );
};

export default Home;
