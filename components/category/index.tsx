import PageBanner from '@components/page/Banner';
import Categories from 'components/category/list';

const CategoryPage = () => {
    return (
        <>
            <PageBanner title={'CATEGORY'} />
            <Categories />
        </>
    );
};

export default CategoryPage;
