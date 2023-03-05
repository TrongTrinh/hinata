import InformationItem from '@components/common/infomation-web/item';
import PageBanner from '@components/page/Banner';
import { term_of_use_data } from '@lib/constants/terms-of-use';
import { TInformationItem } from '@lib/domain/common/infomation-web';
// import Categories from 'components/category/list';

const TermOfPaymentPage = () => {
    return (
        <>
            <PageBanner title='Terms of use' classNameTitle='leading-[5rem] mb-3 md:mb-5' />
            <div>
                <div className=' grid grid-cols-1 gap-x-3'>
                    {term_of_use_data.map((item: TInformationItem, key) => (
                        <InformationItem
                            classWrap={`py-2 ${item.isBorderB ? 'border-b' : ''}`}
                            key={key}
                            title={item.title}
                            desc={item.desc}
                            subTitle={item.subTitle}
                            classDes='text-1.4 leading-[3rem] md:leading-[3.6rem] md:text-1.6'
                            classWrapTitle='md:min-w-[20rem] max-md:mb-1 md:mt-1 flex flex-wrap md:flex-col max-md:items-center'
                            classTitle='max-md:block max-md:pb-0 text-1.5 leading-[2.2rem] md:text-1.8 md:leading-[2.6rem]  max-md:mr-2'
                        />
                    ))}
                </div>
            </div>
            <div className='text-right  text-suva-grey font-medium text-1.4 leading-[3rem] md:text-1.6 md:leading-[3.6rem] mt-2 mb-[4rem] md:mb-[2rem]'>
                <p>以上</p>
                <p>2021年11月22日</p>
            </div>
            <div className='mt-0 md:mt-3 -mb-2 md:mb-[2rem]'>
                <p className='text-1.8 leading-[2.606rem] font-semibold text-black'>
                    株式会社関谷染色「草稿」NFTの、商用利用・二次創作について
                </p>
                <p className='text-suva-grey font-medium text-1.4 leading-[3rem] md:text-1.6 md:leading-[3.6rem]'>
                    2022年4月28日
                </p>
            </div>
        </>
    );
};

export default TermOfPaymentPage;
