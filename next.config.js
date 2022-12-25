const { ANALYZE } = process.env;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'standalone',
    swcMinify: false,
    // images: {
    //     disableStaticImages: true,
    //     domains: ['user-images.trustpilot.com', 'i.scdn.co'],
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: '/:path+',
    //             destination: `${NEXT_PUBLIC_APP_URL}/:path+`,
    //             permanent: false,
    //         },
    //     ];
    // },
};

module.exports = withBundleAnalyzer(nextConfig);
