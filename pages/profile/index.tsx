import Layout from 'components/layouts/main';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { createGlobalStyle } from 'styled-components';
const ProfilePage = dynamic(() => import('@components/profile'), {
    ssr: false,
});
const Home: NextPage = () => {
    return (
        <Layout>
            <GlobalStyle />
            <ProfilePage />
        </Layout>
    );
};

export default Home;

const GlobalStyle = createGlobalStyle` 
  body {  
    // background-color: black;
    background-image: url(/assets/images/account/background.jpg);

  }
`;
