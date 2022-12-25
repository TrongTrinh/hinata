import Head from 'next/head';
import React from 'react';

const SITE_URL =
    process.env.NODE_ENV === 'development'
        ? `http://localhost:${process.env.PORT || 3000}`
        : process.env.NEXT_PUBLIC_SITE_URL;

const defaultImage = `${SITE_URL}/images/logo.png`;

export type MetaTagsProps = {
    title?: string;
    description?: string;
    image?: string;
};

const HeadCustom: React.FC<MetaTagsProps> = () => {
    return (
        <Head>
            <title>Hinata - The Best Promotion Tool</title>
            <meta
                name='description'
                content={
                    'With Hinata you can increase your YouTube subscribers, views and more to give your channel a boost. Launch your first YouTube promotion today'
                }
            />
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
            <meta property='og:image' content={defaultImage} />
            <link rel='icon' href={'/images/logo.png'} />
        </Head>
    );
};
export default HeadCustom;
