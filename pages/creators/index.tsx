import PageLayout from '@components/page';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const CreatorV = dynamic(() => import('@components/creators'), {
    ssr: false,
});
const CreatorsPage: NextPage = () => {
    return (
        <PageLayout>
            <CreatorV />
        </PageLayout>
    );
};

export default CreatorsPage;
