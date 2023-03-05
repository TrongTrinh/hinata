/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useCallback, useReducer } from 'react';
import { useMediaQuery } from 'react-responsive';
import UserDropdown from './header-right';
import MenuMobile from './menuMobile';
import Search from './search';

const Header: FC = () => {
    const { pathname, push } = useRouter();

    const paths = pathname.split('/');
    const isBgBlack =
        paths[1] && ['profile', 'instagram', 'tiktok', 'facebook', 'twitch', 'new-youtube'].includes(paths[1]);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const onClickLogo = useCallback(() => {
        push('/');
    }, [push]);

    const [navbarOpen, setNavbarOpen] = useReducer((open: boolean) => !open, false);

    const onHandleNavbar = useCallback(() => {
        setNavbarOpen();
    }, [setNavbarOpen]);
    return (
        <>
            <header
                id={classNames({ 'nav-bar': !isBgBlack })}
                className={classNames(
                    `justify-between  flex items-center w-full fixed top-0 left-0 right-0 py-1.4 md:py-2.2 z-50 xl:px-4 px-2`,
                    { 'bg-black': isBgBlack },
                )}
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
                                    src={
                                        isBgBlack
                                            ? '/assets/images/common/header-logo-black.svg'
                                            : '/assets/images/common/header-logo.svg'
                                    }
                                />
                            </span>
                        </button>

                        {!isTabletOrMobile && <Search />}
                    </div>
                </div>
                <div className='flex items-center'>
                    <MenuMobile
                        navbarOpen={isTabletOrMobile && navbarOpen}
                        setNavbarOpen={setNavbarOpen}
                        isBgBlack={isBgBlack}
                    />
                    {!isTabletOrMobile && <UserDropdown />}
                </div>
                {isTabletOrMobile && (
                    <button className='flex items-center lg:hidden' onClick={onHandleNavbar}>
                        <Image
                            alt='Hinata menu mobile'
                            width={24}
                            height={18}
                            src={
                                isBgBlack
                                    ? '/assets/images/common/menu-icon-white.svg'
                                    : '/assets/images/common/menu-icon.svg'
                            }
                        />
                    </button>
                )}
            </header>
        </>
    );
};

export default Header;
