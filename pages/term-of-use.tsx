import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const TermOfUsePage = dynamic(() => import('@components/term-of-use'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <PageLayout className='mt-[2.1rem]'>
            <TermOfUsePage />
        </PageLayout>
    );
};

export default Home;
