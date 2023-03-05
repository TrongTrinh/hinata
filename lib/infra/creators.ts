import { IUser } from '@lib/domain/interfaces/i-user';
import { fetcher } from '@lib/utils/fetcher';
import useSWR from 'swr';

export const APIGetListCreators = () => {
    const { data, error, isLoading } = useSWR<IUser[]>(`/api/users/creators?take=9`, fetcher);
    return { data, error, isLoading };
};
