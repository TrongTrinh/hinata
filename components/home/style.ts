import styled from 'styled-components';

export const SectionStyle = styled.div<{
    isMobileSize: boolean;
    productsLength: number;
}>`
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;

    .slider-section {
        padding: ${(props) => (props.isMobileSize ? '20px 0' : '2.778vw 0')};
        margin: 0 auto;
        z-index: 2;
        figure {
            .img-wrap {
                position: relative;
                width: 100%;
                height: 100%;
                .frame {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: auto;
                    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
                }
                .mask {
                    position: relative;
                    width: 100%;
                    mask-image: url('/assets/images/index/frame_mask.png');
                    mask-size: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        object-fit: cover;
                    }
                }
                .mask::before {
                    content: '';
                    padding-top: 100%;
                    display: block;
                }
            }
        }
        .slick-slide > div {
            width: 82px !important;
            @media (max-width: 768px) {
                width: 50px !important;
            }
        }
        .slick-current > div {
            width: 95px !important;
            margin-left: -5px;
            @media (max-width: 768px) {
                width: 60px !important;
            }
        }
        .slick-track {
            gap: 20px;
            @media (max-width: 768px) {
                gap: 12px;
            }
        }
    }
    .slider-template .slick-slider.slick-initialized {
        display: flex;
        align-items: center;
    }
    .slider-template .slick-track {
        display: flex !important;
        align-items: center;
    }
    .slick-custom-arrow {
        width: ${(props) => (props.isMobileSize ? '40px' : '50px')};
        height: ${(props) => (props.isMobileSize ? '40px' : '50px')};
    }
    .slick-custom-arrow:hover {
        opacity: 0.8;
    }
    .slick-custom-arrow::before {
        color: #ffffff;
        display: none;
    }
    .slick-custom-arrow.slick-prev {
        left: -8px;
        @media (max-width: 768px) {
            left: -9px;
        }
    }
    .slick-custom-arrow.slick-next {
        right: -17px;
        @media (max-width: 768px) {
            right: -15px;
        }
    }

    .main-section {
        flex-grow: 1;
        display: flex;
        flex-direction: ${(props) => (props.isMobileSize ? 'column' : 'row')};
        align-items: center;
        z-index: 2;
        .top {
            position: relative;
            width: ${(props) => (props.isMobileSize ? '100vw' : '47vw')};
            padding: ${(props) => (props.isMobileSize ? '0 3rem' : '0 2vw 0 11.803vw')};
            text-align: left;
            font-family: 'Jost';
            .title {
                font-size: ${(props) => (props.isMobileSize ? '4.4rem' : '6.528vw')};
                line-height: 6.528vw;
                margin-top: 1.767vw;
            }
        }
        .cards {
            .card {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            figure {
                position: relative;
                width: 100%;
                height: 100%;

                .wrap {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 72%;
                    height: 76%;
                }

                .figcaption-wrap {
                    transform: translateX(calc(-50% + 5%)) translateY(calc(-50% + 5%));

                    figcaption {
                        width: 60%;
                        height: 60%;
                        background: linear-gradient(90deg, #bdbdbd, #ffffff);
                        border-radius: 0.5rem;
                        box-shadow: 0.3vw 0.3vw 0.5vw rgba(0, 0, 0, 0.5);
                        text-align: left;
                        padding: 3% 6%;
                        overflow: hidden;
                        color: #898786;
                        .name {
                            font-size: ${(props) => (props.isMobileSize ? '10vw' : '5vw')};
                            font-weight: bold;
                            line-height: 1;
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            text-transform: uppercase;
                            color: transparent;
                            -webkit-text-stroke: 1px #898786;
                        }
                        .description {
                            font-size: ${(props) => (props.isMobileSize ? '2.4vw' : '1.2vw')};
                            padding-top: 2%;
                        }
                    }
                }

                .img-wrap {
                    transform: translateX(calc(-50% + 30%)) translateY(calc(-50% + 20%));

                    .frame {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 60%;
                        height: auto;
                        filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
                    }
                    .mask {
                        position: relative;
                        width: 60%;
                        mask-image: url('/assets/images/index/frame_mask.png');
                        mask-size: 100%;
                        img {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            object-fit: cover;
                        }
                    }
                    .mask::before {
                        content: '';
                        padding-top: 100%;
                        display: block;
                    }
                    .label {
                        position: absolute;
                        top: 23%;
                        left: 41.7%;
                        font-size: ${(props) => (props.isMobileSize ? '10vw' : '4.5vw')};
                        text-align: left;
                        transform: rotate(90deg);
                    }
                    .tab {
                        position: absolute;
                        top: -6%;
                        left: 18%;
                        font-weight: bold;
                        font-size: ${(props) => (props.isMobileSize ? '1.6vw' : '0.8vw')};
                        letter-spacing: 0.4em;
                        background: linear-gradient(90deg, #bdbdbd, #ffffff);
                        width: 40%;
                        height: 10%;
                        clip-path: polygon(0% 100%, 25% 0%, 100% 0%, 100% 100%);
                        padding-top: 0.5vh;
                        padding-left: ${(props) => (props.isMobileSize ? '9vw' : '5vw')};
                    }
                    .sold {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translateY(-50%);
                        width: 100%;
                        font-family: 'Jost';
                        font-weight: bold;
                        font-size: ${(props) => (props.isMobileSize ? '2vw' : '1.5vw')};
                        color: #ffffff;
                        background: linear-gradient(90deg, #f4691b, #cb211b);
                    }
                }
                .plate-wrap {
                    transform: ${(props) =>
                        props.isMobileSize
                            ? 'translateX(calc(-50% - 5%)) translateY(calc(-57% + 60%))'
                            : 'translateX(calc(-50% - 5%)) translateY(calc(-46% + 60%))'};

                    .plate {
                        width: 45%;
                        background: linear-gradient(90deg, #bdbdbd, #ffffff);
                        border-radius: 0.5rem;
                        text-align: left;
                        padding: 0.4vw 0.5vw;

                        .creator {
                            color: #898786;
                            font-size: ${(props) => (props.isMobileSize ? '2.2vw' : '0.903vw')};
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            text-transform: uppercase;
                            margin-bottom: -0.1vh;
                        }
                        .name {
                            font-size: ${(props) => (props.isMobileSize ? '3.2vw' : '1.042vw')};
                            line-height: 1.6;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            text-transform: uppercase;
                            font-weight: 600;
                            margin-bottom: 0.5vh;
                        }
                        hr {
                            border: none;
                            border-top: 1px solid #898786;
                        }
                        .price {
                            line-height: 1.6;
                            margin-top: 0.2vh;

                            .label {
                                font-size: ${(props) => (props.isMobileSize ? '2vw' : '0.833vw')};
                                color: #898786;
                                padding-right: 2%;
                            }
                            .value {
                                font-size: ${(props) => (props.isMobileSize ? '2.4vw' : '1.042vw')};
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
        }
    }

    .button {
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    // .react-multi-carousel-list {
    //     width: ${(props) => (props.productsLength < 6 ? props.productsLength + 1 + '0%' : '100%')};
    //     margin-left: auto;
    //     margin-right: auto;
    // }

    .pattern {
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${(props) => (props.isMobileSize ? '35%' : 'auto')};
        transform: rotateX(180deg);
        z-index: -1;
    }

    .dots-container {
        position: absolute;
        bottom: 0;
        left: 2.5vw;
        display: ${(props) => (props.isMobileSize ? 'none' : 'flex')};
        flex-direction: column;
        align-items: center;
        transform: translate(-50%);

        .number {
            font-size: 1.3rem;
            color: #898786;
        }

        .dots {
            height: 6px;
            width: 17px;
            margin: 7px 0;
            background-color: #ffffff;
            border: 1px solid #898786;
            border-radius: 4px;
            display: inline-block;
            transition: background-color 0.3s ease;
        }

        .between-dots {
            margin-top: 10px;
            height: 1px;
            width: 4px;
            margin: 7px 0;
            background-color: #898786;
            display: inline-block;
        }
        .isActive,
        .dots:hover {
            background-color: #898786;
        }
    }

    .product {
        z-index: 2;
    }

    .previous {
        z-index: 1;
    }

    .hidden {
        display: none;
    }
`;
