import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const ProfilePage = dynamic(() => import('@components/profile'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <ProfilePage />
        </Layout>
    );
};

export default Home;
