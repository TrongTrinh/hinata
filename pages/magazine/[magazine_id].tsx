import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const MagazineDetailPage = dynamic(() => import('@components/magazine/post'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <MagazineDetailPage />
        </Layout>
    );
};

export default Home;
