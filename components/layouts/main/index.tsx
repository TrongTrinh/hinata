import { ILayoutProps } from '@lib/domain/layout';
import dynamic from 'next/dynamic';
import Head, { MetaTagsProps } from '../Head';
import Footer from './footer';
// import Header from './header';
const Header = dynamic(() => import('./header'), {
    ssr: false,
});
const Layout: React.FC<ILayoutProps & MetaTagsProps> = ({ children, ...rest }) => {
    return (
        <>
            <Head {...rest} />
            <div className={`flex flex-col`}>
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
