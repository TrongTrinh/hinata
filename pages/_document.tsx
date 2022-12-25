import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Jost:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@100;400;700;900&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
