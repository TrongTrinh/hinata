import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const CreatorV = dynamic(() => import('@components/creators/post'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <CreatorV />
        </Layout>
    );
};

export default Home;
