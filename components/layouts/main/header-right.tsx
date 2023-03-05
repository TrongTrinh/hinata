import ButtonOrange from '@components/common/buttons/button-orange';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import React, { FC, useCallback, useReducer } from 'react';

const UserDropdown: FC = () => {
    const { push } = useRouter();

    const [visibleUserMenu, setVisibleUserMenu] = useReducer((prev) => !prev, false);
    const onClickVisibleUser = useCallback(() => {
        setVisibleUserMenu();
    }, []);
    const redictToDashboard = useCallback(() => {
        push('/profile');
    }, [push]);
    return (
        <div className='flex items-center'>
            <Dropdown
                trigger={['click']}
                overlay={
                    <ul className='py-1 px-2 flex flex-col gap-1 mt-2 shadow-black-common z-50 bg-white'>
                        <li className='border-suva-grey pb-1 text-1.6 border-b'>
                            <Link href='/profile'>My Account</Link>
                        </li>
                        <li className='border-suva-grey pb-1 text-1.6 border-b'>
                            <Link href='/profile'>My works</Link>
                        </li>
                        <li className='border-suva-grey pb-1 text-1.6 border-b'>
                            <Link href='/profile'>My Collection</Link>
                        </li>
                        <li className='border-suva-grey pb-1 text-1.6 border-b'>
                            <Link href='/profile'>Payment History</Link>
                        </li>
                    </ul>
                }
                animation='slide-up'
                overlayClassName='z-1'
                visible={visibleUserMenu}
                onVisibleChange={onClickVisibleUser}
            >
                <button className='ml-2 mr-1.5 w-4 h-4'>
                    <Image alt='Hinata User Icon' width={40} height={40} src={'/assets/images/common/user-icon.svg'} />
                </button>
            </Dropdown>

            <ButtonOrange
                handleClick={redictToDashboard}
                className='uppercase w-[13rem] h-4'
                classTitle='block w-[13rem] text-1.3'
                title='ウォレットに接続'
            />
        </div>
    );
};

export default UserDropdown;
