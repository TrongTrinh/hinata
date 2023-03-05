import { WpPost } from '@lib/domain/interfaces/wp/wp-post';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MagazinHooks = () => {
    const [posts, setPosts] = useState<WpPost[]>([]);

    // loading
    const [wpPostsLoading, setWpPostsLoading] = useState<boolean>(false);

    useEffect(() => {
        setWpPostsLoading(true);

        (async () => {
            try {
                const { data: wpPosts } = await axios.get(
                    `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v2/posts?per_page=8&status=publish`,
                );

                const mediaAddedPosts: WpPost[] = await Promise.all(
                    wpPosts
                        .map((post: WpPost) => {
                            if (post.featured_media === 0) return null;

                            return axios
                                .get(
                                    `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v2/media/${post.featured_media}`,
                                )
                                .then(({ data: media }) => {
                                    return {
                                        ...post,
                                        media,
                                    };
                                });
                        })
                        .filter((post: WpPost) => post !== null),
                );

                const categoryAddedPosts: WpPost[] = await Promise.all(
                    mediaAddedPosts.map((post: WpPost) => {
                        return axios
                            .get(
                                `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v2/categories/${post.categories[0]}`,
                            )
                            .then(({ data: category }) => {
                                return {
                                    ...post,
                                    category,
                                };
                            });
                    }),
                );

                setPosts(categoryAddedPosts);
            } catch (err) {
                console.log(err);
            }

            setWpPostsLoading(false);
        })();
    }, []);

    return { posts, wpPostsLoading };
};

export { MagazinHooks };
