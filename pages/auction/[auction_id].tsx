import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const AuctionDetailPage = dynamic(() => import('@components/auction/post'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <AuctionDetailPage />
        </Layout>
    );
};

export default Home;
