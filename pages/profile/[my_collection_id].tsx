import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { createGlobalStyle } from 'styled-components';
const MyColectionPage = dynamic(() => import('@components/profile/post'), {
    ssr: false,
});
const MyCollectTionPage: NextPage = () => {
    return (
        <Layout>
            <GlobalStyle />
            <MyColectionPage />
        </Layout>
    );
};

export default MyCollectTionPage;

const GlobalStyle = createGlobalStyle` 
  body {   
    background-image: url(/assets/images/account/background.jpg);

  }
`;
