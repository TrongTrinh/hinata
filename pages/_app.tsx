// import 'assets/js/script.js';
import 'assets/styles/categoryDetailAnimaation.css';
import 'assets/styles/global.css';
// Import css files
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        window.addEventListener(
            'scroll',
            function () {
                document.getElementById('nav-bar')?.classList.add('bg-white', 'shadow-black-0.1');
            },
            true,
        );
    }, []);
    return (
        <>
            <Component {...pageProps} />{' '}
        </>
    );
}
