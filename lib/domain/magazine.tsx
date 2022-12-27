import { WpPost } from '@lib/domain/interfaces/wp/wp-post';

export interface IMagazineItemProps {
    item: WpPost;
    className?: string;
    marginB?: string;
}
