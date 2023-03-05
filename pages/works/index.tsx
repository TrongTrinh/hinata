import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const CategoryPage = dynamic(() => import('@components/category'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout>
            <CategoryPage />
        </PageLayout>
    );
};

export default Home;
