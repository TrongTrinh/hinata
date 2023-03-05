import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const TermOfPaymentPage = dynamic(() => import('@components/term-of-payment'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout className='mt-[2.1rem]'>
            <TermOfPaymentPage />
        </PageLayout>
    );
};

export default Home;
