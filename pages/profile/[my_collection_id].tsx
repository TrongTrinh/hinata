import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const MyColectionPage = dynamic(() => import('@components/profile/post'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <MyColectionPage />
        </Layout>
    );
};

export default Home;
