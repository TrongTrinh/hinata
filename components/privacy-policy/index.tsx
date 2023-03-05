import InformationItem from '@components/common/infomation-web/item';
import PageBanner from '@components/page/Banner';
import { privacy_policy_data } from '@lib/constants/privacy-policy';
import { TInformationItem } from '@lib/domain/common/infomation-web';
// import Categories from 'components/category/list';

const CategoryPage = () => {
    return (
        <>
            <PageBanner title='Privacy Policy' classNameTitle='leading-[5rem]' />
            <h2 className=' font-medium text-1.5 leading-[3.1rem] md:text-1.6 md:leading-[3.6rem] mt-2 md:mt-[5.4rem] mb-3 md:mb-5'>
                株式会社FUWARI（以下「当社」という。）は、当社の提供するサービス（以下「本サービス」）における利用者（以下「利用者」という。）の個人情報を含む利用者の情報の取扱いについて、以下のとおり個人情報保護方針（以下「本方針」という。）を定め、個人情報保護の仕組みを構築し、個人情報保護の重要性の認識と取組みを徹底し、個人情報の保護を推進致します。
            </h2>
            <div>
                <div className=' grid grid-cols-1 gap-x-3'>
                    {privacy_policy_data.map((item: TInformationItem, key) => (
                        <InformationItem
                            classWrap={`py-1.8 md:py-2 ${item.isBorderB ? 'border-b' : ''}`}
                            key={key}
                            title={item.title}
                            desc={item.desc}
                            classDes='text-1.4 leading-[3rem] md:leading-[3.6rem] md:text-1.6'
                            classWrapTitle='min-w-[27rem] block mb-0.5'
                        />
                    ))}
                </div>
            </div>
            <p className='text-right  text-suva-grey font-medium text-1.4 leading-[3rem] md:text-1.6 md:leading-[3.6rem] mt-2 mb-0.3 md:mb-[11rem]'>
                2021年11月22日 施行
            </p>
        </>
    );
};

export default CategoryPage;
