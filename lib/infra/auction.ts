import { ICategory } from '@lib/domain/interfaces/i-category';
import { fetcher } from '@lib/utils/fetcher';
import useSWR from 'swr';

export const APIGetListAuction = () => {
    const { data, error, isLoading } = useSWR<ICategory[]>(`/api/categories/some`, fetcher);
    return { data, error, isLoading };
};
