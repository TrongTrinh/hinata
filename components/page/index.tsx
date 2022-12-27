import { IPageProps } from '@lib/domain/page';
import Layout from 'components/layouts/main';
import { createGlobalStyle } from 'styled-components';

const PageLayout = ({ children }: IPageProps) => {
    return (
        <Layout>
            <GlobalStyle />
            <div className='container mx-auto pb-[9rem] md:pb-[11rem] mt-[8rem] md:mt-[18.3rem]'>{children}</div>
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
