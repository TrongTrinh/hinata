import { ILayoutProps } from '@lib/domain/layout';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Head, { MetaTagsProps } from '../Head';
import Footer from './footer';

// import Header from './header';
const Header = dynamic(() => import('./header'), {
    ssr: false,
});
const Layout: React.FC<ILayoutProps & MetaTagsProps> = ({ children, isHomePage = false, ...rest }) => {
    return (
        <>
            <Head {...rest} />
            <div className={`flex flex-col`}>
                <Header />
                <main className={classNames({ 'mt-[5.956rem] md:mt-[8rem]': !isHomePage })}>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
