/* eslint-disable @next/next/no-img-element */
import { ROUTES_FOOTER } from '@lib/config/common';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
    return (
        <div className=' text-center  container mx-auto md:pt-[5.6rem] pt-5 pb-[3.5rem] md:pb-2.4'>
            <div className='logo flex justify-center'>
                <Link href='/'>
                    <img width={142} height={3.56} src='/assets/images/common/header-logo.svg' alt='HINATA' />
                </Link>
            </div>
            <ul className='flex justify-center pt-4.8 md:pt-5 pb-5 md:pb-4.6'>
                <li className='w-[2.4rem] mx-1.5'>
                    <Link href={'https://twitter.com/HINATA_NFT'} target='_blank'>
                        <img src='/assets/images/common/icn-twitter.svg' alt='twitter' width={24} height={20} />
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-wrap justify-center  text-1.2 md:text-1.4 font-jost md:font-medium mb-1.6 md:mb-2.2 uppercase'>
                {!isEmpty(ROUTES_FOOTER) &&
                    ROUTES_FOOTER.map((router, index) => (
                        <li
                            key={index}
                            className={classnames(
                                'leading-[1.2rem] md:leading-[1.6rem] px-1.6 border-l mb-[1.5rem]    md:mb-0',
                                {
                                    'border-none': index == 0,
                                    'max-md:border-none': index == 2,
                                    'max-md:w-[50%] max-md:text-right': index == 0,
                                    'max-md:w-[50%] max-md:text-left': index == 1,
                                },
                            )}
                        >
                            <Link href={router.link}>{router.name}</Link>
                        </li>
                    ))}
            </ul>
            <p className=' text-suva-grey text-1 md:text-1.2'>&copy; Hinata NFT All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
