/* eslint-disable @next/next/no-img-element */
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const VisualSection: NextPage = () => {
    const isMobileSize = useMediaQuery({ query: '(max-width: 768px)' });

    const visualCount = 5;

    const [visualNo, setVisualNo] = useState(1);

    useEffect(() => {
        setVisualNo(Math.floor(Math.random() * visualCount) + 1);

        gsap.registerPlugin(MotionPathPlugin);

        gsap.fromTo(
            '.visual',
            { opacity: 0, x: 20 },
            {
                delay: 1,
                opacity: 1,
                x: 0,
                duration: 1.0,
            },
        );

        gsap.fromTo(
            '.subtitle',
            { opacity: 0, x: 10 },
            {
                delay: 0.5,
                x: 0,
                opacity: 1,
                duration: 1.0,
            },
        );

        gsap.fromTo(
            '.title',
            { opacity: 0, x: 20 },
            {
                delay: 0.7,
                x: 0,
                opacity: 1,
                duration: 1.0,
            },
        );
        gsap.fromTo(
            '.button',
            { opacity: 0, x: 20 },
            {
                delay: 1,
                x: 0,
                opacity: 1,
                duration: 1.0,
            },
        );

        gsap.fromTo(
            '.description',
            { opacity: 0, x: -10 },
            {
                delay: 0.9,
                x: 0,
                opacity: 1,
                duration: 1.0,
            },
        );

        gsap.fromTo(
            '.scroll',

            { opacity: 0, y: -10 },
            {
                delay: 2.0,
                opacity: 1,
                y: 0,
                duration: 1.0,
            },
        );

        gsap.fromTo(
            '.pattern',
            { opacity: 0 },
            {
                delay: 0.5,
                opacity: 1,
                duration: 1.0,
            },
        );

        gsap.fromTo(
            '.particles',
            { opacity: 0 },
            {
                delay: 1.5,
                opacity: 1,
                duration: 1.0,
            },
        );

        gsap.to('.circle-1', {
            delay: 1,
            opacity: 1,
            duration: 2,
        });

        // Circle
        const radius = 30;
        const radiusTwo = 5;

        gsap.set(['.circle-1', '.circle-2-gray', '.circle-3-red'], {
            xPercent: -50,
            yPercent: -50,
            x: -radius,
            y: -radius,
        });

        gsap.to('.circle-1', {
            delay: 1,
            opacity: 1,
            duration: 2,
        });
        gsap.to('.circle-1', {
            duration: 5.6,
            y: radius,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
        });
        gsap.to('.circle-1', {
            duration: 5.6,
            x: radius,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
        }).progress(0.5);

        gsap.to('.circle-2-gray', {
            opacity: 1,
            duration: 2,
            delay: 1,
        });
        gsap.to('.circle-2-gray', {
            duration: 7,
            y: radiusTwo,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
        });

        gsap.to('.circle-2-gray', {
            duration: 7,
            x: radiusTwo,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
        }).progress(0.5);

        gsap.to('.circle-3-red', {
            opacity: 1,
            duration: 2,
            delay: 1,
        });
        gsap.to('.circle-3-red', {
            duration: 8,
            y: radiusTwo,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
        });

        gsap.to('.circle-3-red', {
            duration: 8,
            x: radiusTwo,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
        }).progress(0.5);

        gsap.to('.orbit', {
            opacity: 1,
            delay: 1.5,
        });

        gsap.to('#circle', {
            duration: 15,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
            motionPath: {
                path: '#path',
                align: '#path',
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                start: 0.85,
                end: 0.2,
            },
        });

        // Particles animation timeline
        const tl2 = gsap.timeline({ repeat: -1 });
        const tl3 = gsap.timeline({ repeat: -1 });

        tl2.to('.particle-1', { rotation: '180deg', x: 250, duration: 5 });
        tl2.to('.particle-1', { opacity: 0 }, '-=2');
        tl2.to('.particle-2', { rotation: '180deg', x: 250, y: -150, duration: 5 }, '=<');
        tl2.to('.particle-2', { opacity: 0 }, '-=2');
        tl2.to('.particle-3', { rotation: '180deg', x: 250, y: 100, duration: 5 }, '=<');
        tl2.to('.particle-3', { opacity: 0 }, '-=2');

        // Particles group 2
        tl3.fromTo('.particle-4', { opacity: 0 }, { opacity: 1, delay: 3 });
        tl3.to('.particle-4', {
            rotation: '180deg',
            x: 250,
            y: 50,
            duration: 5,
        });
        tl3.to('.particle-4', { opacity: 0 });

        tl3.fromTo('.particle-5', { opacity: 0 }, { opacity: 1, delay: 5 }, '-=10');
        tl3.to('.particle-5', { rotation: '180deg', x: 220, y: -50, duration: 5 }, '<');
        tl3.to('.particle-5', { opacity: 0 }, '-=2');

        tl3.fromTo('.particle-6', { opacity: 0 }, { opacity: 1, delay: 5 }, '-=10');
        tl3.to('.particle-6', { rotation: '-180deg', x: 220, y: -50, duration: 5 }, '<');
        tl3.to('.particle-6', { opacity: 0 }, '-=2');
        tl3.fromTo('.particle-7', { opacity: 0 }, { opacity: 1, delay: 5 }, '-=7');
        tl3.to('.particle-7', { rotation: '-240deg', x: 220, y: -90, duration: 5 }, '<');
        tl3.to('.particle-7', { opacity: 0 }, '-=2');

        tl3.fromTo('.particle-group path', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }, '=');
        tl3.to('.particle-group path', { stagger: 0.04, rotation: '-240deg', x: 300, duration: 5 }, '<');
        tl3.to('.particle-group path', { opacity: 0 }, '-=7');
    }, []);

    return (
        <SectionStyle className='visual-home' isMobileSize={isMobileSize} visualNo={visualNo}>
            <div className='visual'>
                <img className='main' src={`assets/images/index/visual_${visualNo}.png`} alt='visual image' />
                <div className='mask'>
                    <img src='assets/images/visual/red-thing.png' alt='Visual Red' />
                </div>
            </div>
            <div className='top'>
                <div className='subtitle text-[5.6vw] md:text-[2.22vw] leading-[8.093vw] md:leading-[3.211vw] max-md:font-medium font-bold'>
                    NFT MARKET PLACE
                </div>
                <div className='title text-[18vw] md:text-[8.056vw] leading-[28.515vw] md:leading-[11.64vw] font-bold'>
                    HINATA
                </div>
                <div className='description w-[55.467vw] md:w-[20.833vw] text-[2.400vw] md:text-[0.903vw] leading-[4.533vw] md:leading-[1.806vw]'>
                    {`Market place 'HINATA' means the bright digital stage to
                    express each talents of artists and creaters.`}{' '}
                    <br></br>
                    {`This new
                    digital world that NFT brings us will give you the new
                    experience of expanding your possibility.`}
                </div>
            </div>

            <img className='pattern' src='assets/images/index/bg_pattern.png' alt='background pattern' />

            <div className='circle-1'></div>
            <div className='circle-2-gray'></div>
            <div className='circle-3-red'></div>

            <div className='scroll'>
                <div className='label'>SCROLL</div>
                <div className='c-scrolldown'>
                    <div className='c-line'></div>
                </div>
            </div>

            <div className='orbit'>
                <svg
                    width='392'
                    height='416'
                    viewBox='0 0 300 416'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='svg-orbit'
                >
                    <path
                        id='path'
                        d='M392.775 4.27471C136.978 54.7428 56.7246 158.301 4.00002 416.5'
                        stroke='#CB201B'
                        strokeWidth='3'
                    />
                    <circle id='circle' cx='35' cy='35' r='35' fill='#CB201B' />
                </svg>
            </div>

            <div className='particles'>
                <svg
                    width='24'
                    height='47'
                    viewBox='0 0 24 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='particle-1'
                >
                    <path
                        d='M3.34953 46.7824L19.1699 36.1725L23.3734 0.812683L0.228516 23.6996L3.34953 46.7824Z'
                        fill='url(#paint0_linear_3_22)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_3_22'
                            x1='-8'
                            y1='20.5'
                            x2='18'
                            y2='43.5'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop offset='0.10285' stopColor='#3E0806' />
                            <stop offset='0.536458' stopColor='#D8150E' />
                            <stop offset='0.742129' stopColor='#790905' />
                            <stop offset='0.742983' stopColor='#C40F09' />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className='particle-2'
                    width='33'
                    height='35'
                    viewBox='0 0 33 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M32.4271 0.949371L0.862346 13.4854L0.052002 34.042L32.4271 0.949371Z'
                        fill='url(#paint0_linear_3_37)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_3_37'
                            x1='12'
                            y1='17'
                            x2='1.5'
                            y2='7.5'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop stopColor='#CB211B' />
                            <stop offset='0.154081' stopColor='#870500' />
                            <stop offset='1' stopColor='#790D0A' />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className='particle-3'
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M17.0469 0.436005L9.69704 4.65468L0.834106 18.3907L16.3442 13.2247L17.0469 0.436005Z'
                        fill='url(#paint0_linear_3_38)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_3_38'
                            x1='5'
                            y1='13.5'
                            x2='5'
                            y2='13.5'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop stopColor='#560B09' />
                            <stop offset='1' stopColor='#CB211B' />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className='particle-4'
                    width='50'
                    height='50'
                    viewBox='0 0 18 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M17.0469 0.436005L9.69704 4.65468L0.834106 18.3907L16.3442 13.2247L17.0469 0.436005Z'
                        fill='url(#paint0_linear_3_38)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_3_38'
                            x1='5'
                            y1='13.5'
                            x2='5'
                            y2='13.5'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop stopColor='#560B09' />
                            <stop offset='1' stopColor='#CB211B' />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    width='24'
                    height='47'
                    viewBox='0 0 24 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='particle-5'
                >
                    <path
                        d='M3.34953 46.7824L19.1699 36.1725L23.3734 0.812683L0.228516 23.6996L3.34953 46.7824Z'
                        fill='url(#paint0_linear_3_22)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_3_22'
                            x1='-8'
                            y1='20.5'
                            x2='18'
                            y2='43.5'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop offset='0.10285' stopColor='#3E0806' />
                            <stop offset='0.536458' stopColor='#D8150E' />
                            <stop offset='0.742129' stopColor='#790905' />
                            <stop offset='0.742983' stopColor='#C40F09' />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    width='24'
                    height='47'
                    viewBox='0 0 24 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='particle-6'
                >
                    <path
                        d='M3.34953 46.7824L19.1699 36.1725L23.3734 0.812683L0.228516 23.6996L3.34953 46.7824Z'
                        fill='url(#paint0_linear_3_22)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_3_22'
                            x1='-8'
                            y1='20.5'
                            x2='18'
                            y2='43.5'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop offset='0.10285' stopColor='#3E0806' />
                            <stop offset='0.536458' stopColor='#D8150E' />
                            <stop offset='0.742129' stopColor='#790905' />
                            <stop offset='0.742983' stopColor='#C40F09' />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    width='30'
                    className='particle-7'
                    height='30'
                    viewBox='0 0 9 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M0.165771 9.41729L8.57292 6.20906L2.79935 0.885193L0.165771 9.41729Z'
                        fill='url(#paint0_linear_3_25)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_3_25'
                            x1='2.5'
                            y1='6.5'
                            x2='2.5'
                            y2='6.5'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop stopColor='#CB211B' />
                            <stop offset='1' stopColor='#580300' />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className='particle-group'
                    width='430'
                    height='325'
                    viewBox='0 0 430 325'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M9.62087 218.864L0.435059 222.287L4.07519 228.438L9.62087 218.864Z' fill='#CB211B' />
                    <path
                        d='M22.4848 84.6493L18.9269 75.0688L4.68927 61.497L7.90524 80.8411L22.4848 84.6493Z'
                        fill='#CB211B'
                    />
                    <path d='M209.107 194.354L229.384 178.376L214.215 165.991L209.107 194.354Z' fill='#CB211B' />
                    <path
                        d='M227.883 281.153L217.444 275.652L196.869 283.723L216.165 289.615L227.883 281.153Z'
                        fill='#CB211B'
                    />
                    <path d='M211.335 126.47L214.019 129.495L216.324 124.878L211.335 126.47Z' fill='#CB211B' />
                    <path d='M97.8641 186.902L106.303 203.739L113.868 202.261L97.8641 186.902Z' fill='#CB211B' />
                    <path d='M286.132 196.078L281.916 192.44L280.7 197.145L286.132 196.078Z' fill='#CB211B' />
                    <path d='M147.547 0.193573L132.917 3.60388L136.57 12.7486L147.547 0.193573Z' fill='#CB211B' />
                    <path
                        d='M139.14 104.366L127.795 95.9412L100.339 91.0215L118.318 111.06L139.14 104.366Z'
                        fill='#CB211B'
                    />
                    <path d='M55.955 162.265L50.7575 158.394L48.124 163.042L55.955 162.265Z' fill='#CB211B' />
                    <path
                        d='M117.002 261.101L120.901 265.307L131.1 264.714L123.313 258.941L117.002 261.101Z'
                        fill='#CB211B'
                    />
                    <path d='M258.986 112.589L255.181 115.607L260.48 118.329L258.986 112.589Z' fill='#CB211B' />
                    <path d='M271.799 172.376L265 175.736L265.494 178.717L271.799 172.376Z' fill='#CB211B' />
                    <path d='M70.1927 168.486L68.3695 165.512L66.9704 168.145L70.1927 168.486Z' fill='#CB211B' />
                    <path
                        d='M359.542 92.1204L365.816 89.5563L374.413 79.7485L361.619 82.2684L359.542 92.1204Z'
                        fill='#CB211B'
                    />
                    <path d='M418.278 172.976L425.476 176.595L429.072 173.747L418.278 172.976Z' fill='#CB211B' />
                    <path d='M290.285 90.9709L288.74 95.2465L295.59 92.9856L290.285 90.9709Z' fill='#CB211B' />
                    <path d='M259.644 223.411L275.75 236.92L287.233 231.337L259.644 223.411Z' fill='#CB211B' />
                    <path
                        d='M293.678 206.145L298.141 208.911L308.251 209.707L300.882 202.779L293.678 206.145Z'
                        fill='#CB211B'
                    />
                    <path d='M160.095 149.824L156.727 163.326L166.856 163.32L160.095 149.824Z' fill='#CB211B' />
                    <path
                        d='M315.329 172.345L321.349 171.088L327.313 160.769L317.513 164.867L315.329 172.345Z'
                        fill='#CB211B'
                    />
                    <path d='M37.2795 183.441L26.4161 183.302L23.428 189.504L37.2795 183.441Z' fill='#CB211B' />
                </svg>
            </div>
        </SectionStyle>
    );
};

export default VisualSection;

const SectionStyle = styled.div<{ isMobileSize: boolean; visualNo: number }>`
    height: 100vh;
    height: 100dvh;
    position: relative;
    overflow: hidden;
    animation: AnimateBG 20s ease infinite;
    .top {
        position: absolute;
        top: ${(props) => (props.isMobileSize ? '56%' : '54.5%')};
        transform: ${(props) => (props.isMobileSize ? '' : 'translate(0, -50%)')};
        width: ${(props) => (props.isMobileSize ? 'auto' : '40vw')};
        left: ${(props) => (props.isMobileSize ? '20px' : '11.806vw')};
        text-align: left;
        font-family: 'Jost';
        // font-weight: bold;
        z-index: 20;

        .title {
            font-size: ${(props) => (props.isMobileSize ? '18vw' : '8.056vw')};
            letter-spacing: 0.1em;
            margin-left: -0.7vw;
            line-height: 11.64vw;
            background: -webkit-linear-gradient(left, #f1651b, #cb201b);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .description {
            width: ${(props) => (props.isMobileSize ? '90%' : '20.833vw')};
            font-size: ${(props) => (props.isMobileSize ? '1.0rem' : '0.903vw')};
            font-weight: normal;
            line-height: ${(props) => (props.isMobileSize ? '1.4' : '2.0')};
        }
    }
    .visual {
        position: relative;
        margin-right: ${(props) => (props.isMobileSize ? '0' : '10vw')};
        height: ${(props) => (props.isMobileSize ? '58%' : '100%')};
        text-align: right;
        overflow: hidden;
        user-select: none;
        pointer-events: none;
        z-index: 10;
        &:after {
            content: '';
            background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
            height: 88px;
            left: 0;
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .main,
        .mask {
            position: absolute;
            bottom: 0;
            right: 0;
            width: auto;
            height: 80%;
        }
        .mask {
            mix-blend-mode: hard-light;
            mask-image: ${(props) => `url('assets/images/index/visual_${props.visualNo}_mask.png')`};
            //mask-image: url('assets/images/index/visual_1_mask.png');
            mask-position: right bottom;
            mask-size: auto 100%;
            mask-repeat: no-repeat;
            img {
                position: relative;
                height: 100%;
                scale: 1.5;
                opacity: 0.5;
                animation: red-animation 250s linear infinite;
            }
            @keyframes red-animation {
                from {
                    transform: translate3d(0px, 0px, 0px) rotate(0deg);
                }
                to {
                    transform: translate3d(0px, 0px, 0px) rotate(-360deg);
                }
            }
        }
    }

    .particles {
        position: absolute;
        overflow: hidden;
        bottom: ${(props) => (props.isMobileSize ? '42%' : '0')};
        right: 0;
        z-index: 1;

        .particle-1 {
            position: absolute;
            bottom: 2vw;
            right: 15rvw;
        }
        .particle-2 {
            position: absolute;
            bottom: 4vw;
            right: 15vw;
        }
        .particle-3 {
            position: absolute;
            bottom: 5vw;
            right: 15vw;
        }
        .particle-4 {
            position: absolute;
            bottom: 6vw;
            right: 16vw;
        }
        .particle-5 {
            position: absolute;
            bottom: 6vw;
            right: 13vw;
        }
        .particle-6 {
            position: absolute;
            bottom: 8vw;
            right: 16vw;
        }
        .particle-7 {
            position: absolute;
            bottom: 4vw;
            right: 17vw;
        }
    }

    .pattern {
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => (props.isMobileSize ? '35%' : 'auto')};
    }

    .circle-1 {
        position: absolute;
        opacity: 0;
        width: 10rem;
        height: 10rem;
        background-color: #cb201b;
        bottom: 0;
        left: ${(props) => (props.isMobileSize ? '80vw' : '10vw')};
        border-radius: 50%;
        z-index: 2;
    }

    .circle-2-gray {
        position: absolute;
        opacity: 0;
        width: 2rem;
        height: 2rem;
        background-color: #d5d4d5;
        border-radius: 50%;
        left: ${(props) => (props.isMobileSize ? '15vw' : '30vw')};
        top: ${(props) => (props.isMobileSize ? '25vw' : '5vw')};
        z-index: 2;
    }

    .circle-3-red {
        position: absolute;
        width: 1.4rem;
        opacity: 0;
        height: 1.4rem;
        background-color: #cb201b;
        border-radius: 50%;
        left: 53vw;
        top: 10vw;
        z-index: 2;
    }

    .scroll {
        position: absolute;
        top: ${(props) => (props.isMobileSize ? '35%' : '50%')};
        right: ${(props) => (props.isMobileSize ? '' : '0')};
        left: ${(props) => (props.isMobileSize ? '-5px' : '')};
        user-select: none;
        z-index: 10;
        .label {
            transform: rotate(90deg);
            font-family: 'Jost';
            font-size: 1.4rem;
            letter-spacing: 0.3em;
            @media (max-width: 768px) {
                font-size: 1.2rem;
            }
        }
        .c-scrolldown {
            width: 1px;
            height: 60px;
            position: absolute;
            top: 56px;
            left: 50%;
            margin: 0 auto;
            overflow: hidden;
            .c-line {
                width: 100%;
                height: 100%;
                display: block;
                background: linear-gradient(to bottom, black 50%, rgba(255, 255, 255, 0) 50%);
                background-position: 0 -60px;
                background-size: 100% 200%;
                animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
            }
        }
        @keyframes scrolldown {
            0% {
                background-position: 0 -60px;
            }
            75% {
                background-position: 0 0;
            }
            100% {
                background-position: 0 60px;
            }
        }
    }

    .orbit {
        position: absolute;
        bottom: ${(props) => (props.isMobileSize ? '42%' : '0')};
        width: 100%;
        height: 60%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 1;
        opacity: 0;
        .svg-orbit {
            height: ${(props) => (props.isMobileSize ? '340px' : '')};
        }
    }
`;
