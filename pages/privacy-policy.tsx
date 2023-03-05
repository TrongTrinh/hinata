import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const PrivacyPolicymationPage = dynamic(() => import('@components/privacy-policy'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout className='mt-[2.1rem]'>
            <PrivacyPolicymationPage />
        </PageLayout>
    );
};

export default Home;
