/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ROUTES_MENU } from '@lib/config/common';
import { default as classNames, default as classnames } from 'classnames';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import Menu, { Item as MenuItem, SubMenu } from 'rc-menu';
import 'rc-menu/assets/index.css';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
const MenuTitle = ({ title, isBgBlack = false }: { title: string; isBgBlack?: boolean }) => (
    <span
        className={classNames(' max-lg:font-semibold text-1.8 lg:text-1.6 uppercase  flex items-center font-jost', {
            'text-black': !isBgBlack,
            'text-black md:text-white': isBgBlack,
        })}
    >
        {title}
    </span>
);
const MenuMobileTop = ({ setNavbarOpen }: { setNavbarOpen: any }) => (
    <div className='mb-1 mt-1'>
        <div className='flex justify-between items-center' key={'5-1'}>
            <Link
                key={'5-1-1'}
                href={'/'}
                className={'flex font-bold items-center focus:no-underline focus:outline-none pl-0 '}
            >
                <span className='flex items-center w-[12rem]'>
                    <img className='w-full' alt='Hinata logo' src={'/assets/images/common/header-logo.svg'} />
                </span>
            </Link>
            <button type='button' onClick={setNavbarOpen} key={'5-1-2'}>
                <img alt='Hinata Close' width={30} height={28} src={'/assets/images/common/menu-close-icon.svg'} />
            </button>
        </div>
    </div>
);
const MenuMobile = ({ navbarOpen, setNavbarOpen, isBgBlack }: any) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isTabletCustom = useMediaQuery({ query: '(max-width: 1170px)' });
    return (
        <MenuStyle
            mode={isTabletOrMobile ? 'inline' : 'horizontal'}
            className={
                isTabletOrMobile
                    ? classnames(
                          'fixed w-full right-0 bottom-0  bg-white h-full overflow-y-auto border-none py-1.4 px-2 transition-all duration-300 z-[9999999]',
                          {
                              'left-[-100%] top-[-5%]': !navbarOpen,
                              'left-0 top-0': navbarOpen,
                          },
                      )
                    : 'flex  bg-transparent border-none'
            }
            triggerSubMenuAction={'click'}
        >
            {isTabletOrMobile && <MenuMobileTop setNavbarOpen={setNavbarOpen} />}
            {!isEmpty(ROUTES_MENU) &&
                ROUTES_MENU.map((item, key) => {
                    if (item.children) {
                        return (
                            <SubMenu
                                title={<MenuTitle isBgBlack={isBgBlack} title={item.name} />}
                                key={key}
                                className={classnames('px-0  max-lg:py-1.4 ml-0 lg:ml-3.2 bg-transparent', {
                                    'lg:ml-1.2': isTabletCustom,
                                })}
                                popupClassName='fixed z-[11111]'
                            >
                                {item.children &&
                                    item.children.map((sub_item, key_sub) => {
                                        return (
                                            <MenuItem
                                                key={`${key}-${key_sub}`}
                                                className={classnames(
                                                    'bg-white p-0 py-1.4 lg:py-0.8 hover:none border-b max-lg:border-suva-grey ml-2 md:ml-1',
                                                    {
                                                        'lg:border-none':
                                                            item?.children && key_sub + 1 === item?.children.length,
                                                    },
                                                )}
                                            >
                                                <Link href={sub_item.link} className='block'>
                                                    <MenuTitle title={sub_item.name} />
                                                </Link>
                                            </MenuItem>
                                        );
                                    })}
                            </SubMenu>
                        );
                    } else {
                        return (
                            <MenuItem
                                key={`${key}`}
                                className={classnames(
                                    'p-0 hover:none border-b max-lg:border-suva-grey max-lg:py-1.4 flex items-center ml-0 lg:ml-3.2',
                                    { 'lg:ml-1.2': isTabletCustom },
                                )}
                            >
                                <Link href={item.link} className='block'>
                                    <MenuTitle isBgBlack={isBgBlack} title={item.name} />
                                </Link>
                            </MenuItem>
                        );
                    }
                })}
        </MenuStyle>
    );
};

export default MenuMobile;

const MenuStyle = styled(Menu)`
    .rc-menu {
        border-bottom: none !important;
    }
    .rc-menu-submenu-title {
        padding: 0 !important;
    }
    .rc-menu-submenu {
        cursor: pointer;
        top: 100px !important;
    }
    .rc-menu-submenu-active,
    .rc-menu-item-active {
        border-bottom: transparent !important;
        background-color: transparent !important;
        color: #2baee9;
    }
    .rc-menu-item-active,
    .rc-menu-submenu-active > .rc-menu-submenu-title {
        background-color: transparent !important;
    }
    .rc-menu-submenu-arrow {
        line-height: 3rem !important;
        font-size: 3rem !important;
        top: 0;
    }
`;
