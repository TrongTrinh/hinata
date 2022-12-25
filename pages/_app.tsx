// import 'assets/js/script.js';
import 'assets/styles/global.css';
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
