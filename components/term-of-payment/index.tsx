import InformationItem from '@components/common/infomation-web/item';
import PageBanner from '@components/page/Banner';
import { term_of_payment_data } from '@lib/constants/term-of-payment';
import { TInformationItem } from '@lib/domain/common/infomation-web';
// import Categories from 'components/category/list';

const TermOfPaymentPage = () => {
    return (
        <>
            <PageBanner title='Terms of Payment' classNameTitle='leading-[5rem]' />
            <h2 className=' font-medium text-1.5 leading-[3.6rem] md:text-1.6 md:leading-[3.6rem] mt-3 md:mt-[5.4rem] mb-3 md:mb-3'>
                クレジットカード決済の利用に関する特則（個人用）
            </h2>
            <div>
                <div className=' grid grid-cols-1 gap-x-3'>
                    {term_of_payment_data.map((item: TInformationItem, key) => (
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
            <div className='text-right  text-suva-grey font-medium text-1.4 leading-[3rem] md:text-1.6 md:leading-[3.6rem] mt-2 mb-[5.5rem] md:mb-[2rem]'>
                <p>以上</p>
                <p>2021年10月31日</p>
            </div>
        </>
    );
};

export default TermOfPaymentPage;
