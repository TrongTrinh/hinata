import PageBanner from '@components/page/Banner';
import Auction from 'components/auction/list';

const AuctionPage = () => {
    return (
        <>
            <PageBanner title={'AUCTION'} />
            <Auction />
        </>
    );
};

export default AuctionPage;
