import InformationItem from '@components/common/infomation-web/item';
import PageBanner from '@components/page/Banner';
import { legal_information_data_1, legal_information_data_2 } from '@lib/constants/legal-infomation';
import { TInformationItem } from '@lib/domain/common/infomation-web';
// import Categories from 'components/category/list';

const CategoryPage = () => {
    return (
        <>
            <PageBanner
                title={
                    <span>
                        LEGAL <br></br> INFORMATION
                    </span>
                }
                classNameTitle='leading-[5rem]'
            />
            <div className='-mb-2 md:mb-[8rem]'>
                <div className='mt-5 md:mt-[6.5rem] mb-[7rem] md:mb-[15.6rem] grid grid-cols-1 md:grid-cols-2  gap-x-3'>
                    {legal_information_data_1.map((item: TInformationItem, key) => (
                        <InformationItem
                            classWrap={`py-1.8 md:py-2 items-start md:items-center ${item.isBorderB ? 'border-b' : ''}`}
                            key={key}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
                <div className='border-last-item-none grid grid-cols-1 gap-x-3'>
                    {legal_information_data_2.map((item: TInformationItem, key) => (
                        <InformationItem
                            classWrap={`py-1.8 md:py-2.9 items-start md:items-center ${
                                item.isBorderB ? 'border-b' : ''
                            }`}
                            key={key}
                            title={item.title}
                            desc={item.desc}
                            classDes='text-1.4 leading-[3rem] md:leading-[3.6rem] md:text-1.6'
                            classWrapTitle='min-w-[30rem] block mb-0.5'
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryPage;
