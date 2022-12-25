import HomePageV from '@components/home';
import Layout from 'components/layouts/main';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <HomePageV />
        </Layout>
    );
};

export default Home;
