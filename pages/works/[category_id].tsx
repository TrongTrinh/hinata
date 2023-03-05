import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const CategoryDetailPage = dynamic(() => import('@components/category/post'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <CategoryDetailPage />
        </Layout>
    );
};

export default Home;
