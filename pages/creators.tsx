import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const CreatorPage = dynamic(() => import('@components/creators'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout>
            <CreatorPage />
        </PageLayout>
    );
};

export default Home;
