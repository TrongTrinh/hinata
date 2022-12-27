/* eslint-disable @next/next/no-img-element */
import ButtonOrange from '@components/common/buttons/button-orange';
import Image from 'next/image';
import { useRouter } from 'next/router';
import 'rc-dropdown/assets/index.css';
import { FC, useCallback, useReducer } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuMobile from './menuMobile';
import Search from './search';

const Header: FC = () => {
    const { push } = useRouter();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const onClickLogo = useCallback(() => {
        push('/');
    }, [push]);

    const redictToDashboard = useCallback(() => {
        push('/dashboard');
    }, [push]);

    const [navbarOpen, setNavbarOpen] = useReducer((open: boolean) => !open, false);

    const onHandleNavbar = useCallback(() => {
        setNavbarOpen();
    }, [setNavbarOpen]);

    return (
        <>
            <header
                id='nav-bar'
                className={`justify-between  flex items-center w-full fixed top-0 left-0 right-0 py-1.4 lg:py-2.2 z-50 xl:px-4 px-2`}
            >
                <div className='mx-auto w-full flex items-center'>
                    <div className='flex items-center'>
                        <button
                            type='button'
                            onClick={onClickLogo}
                            className={'flex font-bold items-center focus:no-underline focus:outline-none pl-0 '}
                        >
                            <span className='mr-2.6 flex items-center w-[12rem] md:w-[17.5rem]'>
                                <img
                                    className='w-full'
                                    alt='Hinata logo'
                                    src={'/assets/images/common/header-logo.svg'}
                                />
                            </span>
                        </button>

                        {!isTabletOrMobile && <Search />}
                    </div>
                </div>
                <div className='flex items-center'>
                    <MenuMobile navbarOpen={isTabletOrMobile && navbarOpen} setNavbarOpen={setNavbarOpen} />
                    {!isTabletOrMobile && (
                        <div className='flex items-center'>
                            <div className='ml-2 mr-1.5 w-4 h-4'>
                                <img
                                    alt='Hinata User Icon'
                                    className='w-4 h-4'
                                    src={'/assets/images/common/user-icon.svg'}
                                />
                            </div>

                            <ButtonOrange
                                handleClick={redictToDashboard}
                                className='uppercase w-[13rem] h-4'
                                classTitle='block w-[13rem] text-1.3'
                                title='ウォレットに接続'
                            />
                        </div>
                    )}
                </div>
                {isTabletOrMobile && (
                    <button className='flex items-center lg:hidden' onClick={onHandleNavbar}>
                        <Image
                            alt='Hinata menu mobile'
                            width={24}
                            height={18}
                            src={'/assets/images/common/menu-icon.svg'}
                        />
                    </button>
                )}
            </header>
        </>
    );
};

export default Header;
