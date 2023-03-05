import { APP_ROUTES } from '@lib/constants/routers';
type TROUTER = {
    link: string;
    name: string;
};
type TROUTES = {
    link: string;
    name: string;
    children?: TROUTER;
};
export type TMENU_ROUTES = {
    link: string;
    name: string;
    children?: TROUTER[];
};
export const ROUTES_FOOTER: TROUTES[] = [
    { link: '/legal-information', name: 'Legal Information' },

    { link: '/privacy-policy', name: 'Privacy Policy' },

    { link: 'terms-of-use', name: 'Terms of Use' },

    { link: '/term-of-payment', name: 'Terms of Payment' },

    { link: '/company', name: 'Company' },
];
export const ROUTES_MENU: TMENU_ROUTES[] = [
    {
        link: '/about',
        name: 'about',
    },
    {
        link: '/creators',
        name: 'creators',
    },
    {
        link: '/category',
        name: 'Category',
        children: [
            {
                link: '/works',
                name: 'All',
            },
            {
                link: '/works',
                name: 'Art',
            },
            {
                link: '/works',
                name: 'Illustration',
            },
            {
                link: '/works',
                name: 'Graphic',
            },
            {
                link: '/works',
                name: 'Movie',
            },
            {
                link: '/works',
                name: 'Music',
            },
        ],
    },
    {
        link: '/magazine',
        name: 'MAGAZINE',
        children: [
            {
                link: APP_ROUTES.magazine.path,
                name: 'All Category',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Art',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Campaign',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Domain',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Game',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Graphic',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Illustration',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Movie',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Music',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Official',
            },
            {
                link: APP_ROUTES.magazine.path,
                name: 'Photography',
            },
        ],
    },
];
