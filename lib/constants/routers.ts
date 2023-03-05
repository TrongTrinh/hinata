// import APP_CONFIG from '@lib/constants/APP_CONFIG';

type Router = {
    path: string;
    name: string;
};
type Routes = {
    [key: string]: Router;
};

enum Pages {
    about,
    my_collection,
}

const APP_ROUTES: Routes = {
    [Pages.about]: {
        path: '/about',
        name: 'about',
    },
    creators: {
        path: '/creators',
        name: 'creators',
    },
    auction: {
        path: '/auction',
        name: 'auction',
    },
    works: {
        path: '/works',
        name: 'works',
    },
    magazine: {
        path: '/magazine',
        name: 'magazine',
    },
    profile: {
        path: '/profile',
        name: 'profile',
    },
    my_collection: {
        path: '/profile',
        name: 'My Collection',
    },
};

export { APP_ROUTES };
