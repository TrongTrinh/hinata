import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const CompanyPage = dynamic(() => import('@components/company'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout className='mt-[2.1rem]'>
            <CompanyPage />
        </PageLayout>
    );
};

export default Home;
