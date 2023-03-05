import { gsap } from 'gsap';
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const ReleaseSection: NextPage = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        gsap.to('.circle', {
            duration: gsap.utils.random(3, 6),
            xPercent: 'random(-100%, 100%)',
            yPercent: 'random(-60%, 60%)',
            rotate: 360,
            ease: 'sine.inOut',
            repeat: -1,
            repeatRefresh: true,
            yoyo: true,
        });
    }, []);

    return (
        <SectionStyle isMobileSize={isMobileSize}>
            <div className='flex justify-center pt-[8rem] md:pt-[11rem] pb-[14.3rem] md:pb-[14.5rem] text-center'>
                <div className='background'>
                    <div className='circle circle-1'></div>
                    <div className='circle circle-2'></div>
                    <div className='circle circle-3'></div>
                    <div className='circle circle-4'></div>
                </div>
                <div className='top'>
                    <div className='title mb-2.2 md:mb-2.8 mt-1 font-jost text-4.5 md:text-[9.3rem] leading-[6.5rem] md:leading-[13.5rem] font-bold'>
                        RELEASE
                    </div>
                    <div className='description font-nato text-1.4 mb-3.2    md:mb-[5.1rem]'>出品はこちらから</div>
                    <Link
                        href='/'
                        className='button bg-gradient-orange w-[22rem] md:w-[34.8rem] h-3.2 text-[1.4rem] font-nato text-white rounded-[2rem] inline-flex items-center justify-center'
                    >
                        <span className='relative'> 出品する</span>
                    </Link>
                </div>
            </div>
        </SectionStyle>
    );
};

export default ReleaseSection;

const SectionStyle = styled.div<{ isMobileSize: boolean }>`
    position: relative;
    overflow: hidden;

    .top {
        position: relative;
        .button {
            box-shadow: 2px 3px 4px 0px #00000033;
        }
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        .circle {
            position: absolute;
            background-color: #cececf;
            opacity: 0.5;
            border-radius: 50%;
        }
        .circle-1 {
            left: 56vw;
            top: ${(props) => (props.isMobileSize ? '2rem' : '6rem')};
            width: 2rem;
            height: 2rem;
            margin-left: -1rem;
            margin-top: -1rem;
        }
        .circle-2 {
            left: 0;
            top: ${(props) => (props.isMobileSize ? '8rem' : '16rem')};
            width: 10rem;
            height: 10rem;
            margin-left: -5rem;
            margin-top: -5rem;
        }
        .circle-3 {
            left: 95vw;
            top: ${(props) => (props.isMobileSize ? '25rem' : '40rem')};
            width: 12rem;
            height: 12rem;
            margin-left: -6rem;
            margin-top: -6rem;
        }
        .circle-4 {
            left: 10vw;
            top: ${(props) => (props.isMobileSize ? '28rem' : '40rem')};
            width: 3rem;
            height: 3rem;
            margin-left: -1.5rem;
            margin-top: -1.5rem;
        }
    }
`;
