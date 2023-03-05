import { IPageProps } from '@lib/domain/page';
import classNames from 'classnames';
import Layout from 'components/layouts/main';
import { createGlobalStyle } from 'styled-components';

const PageLayout = ({ className, children }: IPageProps) => {
    return (
        <Layout>
            <GlobalStyle />
            <div
                className={classNames(`container mx-auto pb-[9rem] md:pb-[11rem] mt-[2rem] md:mt-[10.5rem]`, className)}
            >
                {children}
            </div>
        </Layout>
    );
};

export default PageLayout;

const GlobalStyle = createGlobalStyle`
  html,
  body { 
    background-image: url(assets/images/index/bg_wave.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
  }
`;
