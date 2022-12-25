import ROUTES from '@lib/constants/Routes';
import Link from 'next/link';
import { FC } from 'react';

const Menu: FC = () => {
    return (
        <nav className='space-x-10 lg:flex hidden'>
            {ROUTES.map((route) => (
                <Link
                    className='text-violet-blackcurrant uppercase text-3.75'
                    key={route.name}
                    href={route.path}
                >
                    {route.name}
                </Link>
            ))}
        </nav>
    );
};

export default Menu;
