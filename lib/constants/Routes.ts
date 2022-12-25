import APP_CONFIG from '@lib/constants/APP_CONFIG';

interface Router {
    path: string;
    name: string;
}
interface Routes {
    path: string;
    name: string;
    children?: Router[];
}

const ROUTES: Routes[] = [
    {
        path: `${APP_CONFIG.SITE_URL}/about`,
        name: 'about',
    },
    {
        path: `${APP_CONFIG.SITE_URL}/creators`,
        name: 'creators',
        children: [
            {
                path: `${APP_CONFIG.SITE_URL}/creators-1`,
                name: 'creators 1',
            },
            {
                path: `${APP_CONFIG.SITE_URL}/creators-1`,
                name: 'creators 2',
            },
            {
                path: `${APP_CONFIG.SITE_URL}/creators-1`,
                name: 'creators 3',
            },
        ],
    },
    {
        path: `${APP_CONFIG.SITE_URL}/category`,
        name: 'category',
        children: [
            {
                path: `${APP_CONFIG.SITE_URL}/category-1`,
                name: 'category 1',
            },
            {
                path: `${APP_CONFIG.SITE_URL}/category-1`,
                name: 'category 2',
            },
            {
                path: `${APP_CONFIG.SITE_URL}/category-1`,
                name: 'category 3',
            },
        ],
    },
    {
        path: `${APP_CONFIG.SITE_URL}/magazine`,
        name: 'magazine',
    },
];
export default ROUTES;
