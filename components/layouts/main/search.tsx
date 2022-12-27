/* eslint-disable @next/next/no-img-element */
import ButtonOrange from '@components/common/buttons/button-orange';
import DropdownDefault from '@components/common/dropdown/default';
import SearchFilterBox from '@components/common/SearchFilterBox';
import 'rc-menu/assets/index.css';
import { FC, useCallback, useReducer } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const Search: FC = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1360px)' });
    const [visibleSearchBox, setVisibleSearchBox] = useReducer((prev) => !prev, false);
    const handleVisibleChange = useCallback(() => {
        setVisibleSearchBox();
    }, []);

    return (
        <SearchStyle className='flex items-center '>
            <DropdownDefault
                overlay={<SearchFilterBox className='max-md:hidden' />}
                visible={visibleSearchBox}
                onVisibleChange={handleVisibleChange}
            >
                <ButtonOrange
                    handleClick={handleVisibleChange}
                    className='uppercase  mr-1'
                    classTitle='mr-1.6 ml-2'
                    imgSrc={'/assets/images/common/dropdown-white.svg'}
                    size=' w-[11rem] h-4'
                />
            </DropdownDefault>
            <div className='relative wrap-search'>
                <img
                    className='absolute left-1 top-1'
                    alt='Hinata logo'
                    src={'/assets/images/common/search-icon.svg'}
                />
                <input
                    className={`border border-w-[1.5px] border-[#cececf] ${
                        isTabletOrMobile ? 'w-[17rem]' : 'w-[33.8rem]'
                    }   h-4 rounded-[2rem] text-1.3 pl-3.5`}
                    placeholder={'アイテムの検索'}
                />
            </div>
        </SearchStyle>
    );
};

export default Search;

const SearchStyle = styled.div`
    .search-input {
    }
`;
