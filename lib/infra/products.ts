import { IProduct } from '@lib/domain/interfaces/i-product';
import { fetcher } from '@lib/utils/fetcher';
import useSWR from 'swr';

export const APIGetListProducts = ({ api }: { api: string }) => {
    const { data, error, isLoading } = useSWR<IProduct[]>(api, fetcher);
    return { data, error, isLoading };
};
