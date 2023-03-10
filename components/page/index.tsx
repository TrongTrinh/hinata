import { IPageProps } from '@lib/domain/page';
import classNames from 'classnames';
import Layout from 'components/layouts/main';

const PageLayout = ({ className, children }: IPageProps) => {
    return (
        <Layout>
            <div
                className={classNames(`container mx-auto pb-[9rem] md:pb-[11rem] mt-[2rem] md:mt-[10.5rem]`, className)}
            >
                {children}
            </div>
        </Layout>
    );
};

export default PageLayout;
