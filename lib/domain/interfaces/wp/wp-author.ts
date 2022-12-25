export type WpAvatarUrl = {
    [key: number]: string;
};

export type WpAuthor = {
    id: number;
    meta: string[];
    name: string;
    slug: string;
    url: string;
    link: string;
    description: string;
    avatar_urls: Array<WpAvatarUrl>;
};
