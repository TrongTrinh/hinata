import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const MagazinePage = dynamic(() => import('@components/magazine'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout>
            <MagazinePage />
        </PageLayout>
    );
};

export default Home;
