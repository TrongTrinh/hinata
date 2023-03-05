import ButtonOrange from '@components/common/buttons/button-orange';
import { default as DropdownDefault } from '@components/common/dropdown/default';
import { ITokenHistoryProps } from '@lib/domain/page';
import { category_details_dummy } from '@lib/utils/dummy/category_details';
import { default as classNames, default as classnames } from 'classnames';
import { isEmpty } from 'lodash';
import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

// const TableTr = (value: string) => {
//     <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{value}</td>;
// };

const TokenHistory: FC<ITokenHistoryProps> = ({ title = 'TOKEN HISTORY', className, classTitle, classWrappBtn }) => {
    const [visibleSearchBox, setVisibleSearchBox] = useState(false);
    const onClickShowMore = useCallback(() => {
        console.log('🚀 ~ file: index.tsx ~ line 12 ~ onClickShowMore ~ onClickShowMore', onClickShowMore);
    }, []);
    const onShowFilter = useCallback(() => {
        setVisibleSearchBox((prev) => !prev);
    }, []);

    const theads = ['event', 'Price', 'Detail', '	DATE'];

    return (
        <TokenHistoryStyled className={classnames('mt-3 md:mt-5', className)}>
            <h2 className={classnames('text-3 leading-4.335 mb-2 uppercase', classTitle)}>{title} </h2>
            <div className='wrap-content border border-ghost p-1.6 md:py-3 md:px-2 rounded-lg'>
                <DropdownDefault
                    overlay={
                        <div
                            className={classnames(
                                'mt-0.2 shadow-black-common bg-white w-auto h-auto mx-1.5  border  border-ghost text-white rounded-xl px-3 pt-2.4 pb-2.8',
                            )}
                        >
                            <div className='flex flex-col gap-[2.2rem] mb-2.8 text-black'>
                                <span className='text-1.8'>Filter</span>
                            </div>
                        </div>
                    }
                    visible={visibleSearchBox}
                    onVisibleChange={onShowFilter}
                >
                    <ButtonOrange
                        handleClick={onShowFilter}
                        className='btn-dropdown uppercase  bg-transparent border border-ghost justify-between shadow-none'
                        marginT='mt-0'
                        size='w-full h-4'
                        classTitle='mr-1.6 ml-2 text-suva-grey'
                        imgSrc={'/assets/images/common/dropdown-white.svg'}
                        title='FILTER'
                        imgClass='w-2 md:w-2.8 h-2 md:h-2.8 bg-gradient-orange flex items-center justify-center rounded-full right-[0.8rem]'
                    />
                </DropdownDefault>
                <div className='w-full overflow-y-scroll rounded-lg mt-[1.8rem] md:mt-2.6 max-h-[46.5rem]'>
                    <table className=' w-full'>
                        <thead className='bg-black text-white'>
                            <tr>
                                {!isEmpty(theads) &&
                                    theads.map((item, index) => (
                                        <th
                                            key={index}
                                            scope='col'
                                            className='text-1.6 font-normal leading-[2.312rem] uppercase px-5 md:px-2 py-[1.1rem] md:py-1.4 text-left'
                                        >
                                            {item}
                                        </th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {!isEmpty(category_details_dummy) &&
                                category_details_dummy.map((item, index) => (
                                    <tr
                                        key={index}
                                        className='border-b border-ghost transition duration-300 ease-in-out hover:bg-gray-100'
                                    >
                                        <td className='text-1.5 font-medium px-5 md:px-2 py-[1.53rem] leading-2.172 whitespace-nowrap '>
                                            {item.event}
                                        </td>
                                        <td className='text-1.5 font-medium px-5 md:px-2 py-[1.53rem] leading-2.172 whitespace-nowrap'>
                                            {item.price}
                                        </td>
                                        <td className='text-1.5 font-medium px-5 md:px-2 py-[1.53rem] leading-2.172 whitespace-nowrap'>
                                            <span className='text-dodger-blue'>{item.user}</span>
                                            <span>{item.detail}</span>
                                        </td>
                                        <td className='text-1.5 font-medium px-5 md:px-2 py-[1.53rem] leading-2.172 whitespace-nowrap'>
                                            {item.date}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={classNames('flex justify-center pt-[7rem] pb-[7rem] md:pb-[10rem]', classWrappBtn)}>
                <ButtonOrange
                    handleClick={onClickShowMore}
                    size='w-[20rem] md:w-[34.8rem] h-[3.2rem]'
                    title='VIEW MORE'
                    className='uppercase  mr-1'
                    classTitle='text-1.4 leading-[2rem]'
                />
            </div>
        </TokenHistoryStyled>
    );
};

export default TokenHistory;
const TokenHistoryStyled = styled.div`
    &.history-table-black {
        tbody {
            color: white;
        }
        thead {
            background: linear-gradient(90deg, #3e3a39 0%, #595959 100%);
        }
        .wrap-content {
            border: 1px solid #3e3a39 !important;
        }
        .btn-dropdown {
            background-color: white !important;
        }
    }
`;
