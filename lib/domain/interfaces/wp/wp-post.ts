/* eslint-disable @typescript-eslint/no-explicit-any */
import { WpCategory } from './wp-category';
import { WpMedia } from './wp-media';

export type WpPost = {
    id: number;
    acf: any;
    comment_status: string;
    content: {
        rendered: string;
        protected: boolean;
    };
    category: WpCategory;
    date: Date;
    date_gmt: Date;
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    featured_media: number;
    media: WpMedia;
    format: string;
    guid: {
        rendered: string;
    };
    jetpack_featured_media_url: string;
    link: string;
    modified: Date;
    modified_gmt: Date;
    ping_status: string;
    slug: string;
    status: string;
    sticky: boolean;
    categories: number[];
    tags: number[];
    template: string;
    title: {
        rendered: string;
    };
    type: string;
    author?: number | string;
    meta?: any;
    _links?: any;
};
