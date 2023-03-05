import PageBanner from '@components/page/Banner';
import ListCreators from 'components/creators/list';
import { useCallback } from 'react';

const CreatorPage = () => {
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    // const [itemActive, setItemActive] = useState('12');

    // const items = [
    //     { name: 'ALL', id: '12' },
    //     { name: 'Illustration', id: '214' },
    //     { name: 'Art', id: '414323' },
    //     { name: 'Donation', id: '1243433' },
    //     { name: 'Photography', id: '125653' },
    //     { name: 'Game', id: '1623' },
    //     { name: 'Membership', id: '14323' },
    // ];
    // const creators: IUser[] = dummy_users;
    // const { data: creators, error: creatorsError } = useSWR<IUser[]>(`/api/users/creators?take=9`, fetcher);
    return (
        <>
            <PageBanner title={'CREATORS'} />
            <ListCreators />
        </>
    );
};

export default CreatorPage;
