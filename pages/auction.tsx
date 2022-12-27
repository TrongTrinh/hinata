import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const AuctionPage = dynamic(() => import('@components/auction'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout>
            <AuctionPage />
        </PageLayout>
    );
};

export default Home;
