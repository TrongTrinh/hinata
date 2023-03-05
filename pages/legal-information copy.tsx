import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const LegalInformationPage = dynamic(() => import('@components/legal-information'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout className='mt-[2.1rem]'>
            <LegalInformationPage />
        </PageLayout>
    );
};

export default Home;
