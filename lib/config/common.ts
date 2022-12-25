type TROUTES = {
    link: string;
    name: string;
};

export const ROUTES_FOOTER: TROUTES[] = [
    { link: 'https://www.official.hinata-nft.com/legal/', name: 'Legal Information' },

    { link: 'https://www.official.hinata-nft.com/privacy/', name: 'Privacy Policy' },

    { link: 'https://www.official.hinata-nft.com/terms-of-use/', name: 'Terms of Use' },

    { link: 'https://www.official.hinata-nft.com/terms-of-payment/', name: 'Terms of Payment' },

    { link: 'https://www.official.hinata-nft.com/company/', name: 'Company' },
];

export const ROUTES_MENU = [
    {
        href: '/about',
        name: 'about',
    },
    {
        href: '/creators',
        name: 'creators',
    },
    {
        href: '/category',
        name: 'Category',
        children: [
            {
                href: '/works',
                name: 'All',
            },
            {
                href: '/works/browse/Art',
                name: 'Art',
            },
            {
                href: '/works/browse/Illustration',
                name: 'Illustration',
            },
            {
                href: '/works/browse/Graphic',
                name: 'Graphic',
            },
            {
                href: '/works/browse/Movie',
                name: 'Movie',
            },
            {
                href: '/works/browse/Music',
                name: 'Music',
            },
        ],
    },
    {
        href: '/magazine',
        name: 'MAGAZINE',
        children: [
            {
                href: 'https://www.official.hinata-nft.com/all?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'All Category',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/art?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Art',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/campaign?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Campaign',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/domain?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Domain',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/game?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Game',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/graphic?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Graphic',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/illustration?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Illustration',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/movie?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Movie',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/music?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Music',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/official?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Official',
            },
            {
                href: 'https://www.official.hinata-nft.com/category/photography?avator=&amp;firstname=&amp;bucket=hinata-stg-images',
                name: 'Photography',
            },
        ],
    },
];
