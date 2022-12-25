import styled from 'styled-components';

export const SectionStyle = styled.div<{
    isMobileSize: boolean;
    productsLength: number;
}>`
    background: #ffffff;
    background-image: url(/assets/images/index/bg_wave.jpg);
    background-size: ${(props) => (props.isMobileSize ? '200%' : 'cover')};
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;

    .slider-section {
        padding: ${(props) => (props.isMobileSize ? '20px 3vw' : '2.778vw 10vw')};
        z-index: 2;
        .slider-items:before {
            content: '';
            top: 0;
            left: 0;
            bottom: 0;
            position: absolute;
            width: 150px;
            z-index: 1;
            background: linear-gradient(90deg, #ffffff 29.17%, rgba(255, 255, 255, 0) 100%);
        }
        .slider-items:after {
            content: '';
            top: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            width: 150px;
            z-index: 1;
            background: linear-gradient(-90deg, #e7e7e7 29.17%, rgba(231, 231, 231, 0) 100%);
        }
        figure {
            padding: ${(props) => (props.isMobileSize ? '5px' : '0 10px')};
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
                        font-size: ${(props) => (props.isMobileSize ? '1.6vw' : '0.8rem')};
                        letter-spacing: 0.4em;
                        background: linear-gradient(90deg, #bdbdbd, #ffffff);
                        width: 40%;
                        height: 10%;
                        clip-path: polygon(0% 100%, 25% 0%, 100% 0%, 100% 100%);
                        padding-top: 0.5vh;
                        padding-left: 1rem;
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
        background: linear-gradient(135deg, #f4691b, #cb211b);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    .react-multi-carousel-list {
        width: ${(props) => (props.productsLength < 6 ? props.productsLength + 1 + '0%' : '100%')};
        margin-left: auto;
        margin-right: auto;
    }

    .react-multiple-carousel__arrow {
        background: linear-gradient(135deg, #cb211b, #f4691b);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        margin: 3px;
        width: ${(props) => (props.isMobileSize ? '40px' : '43px')};
        height: ${(props) => (props.isMobileSize ? '40px' : '43px')};
    }
    .react-multiple-carousel__arrow::before {
        color: #ffffff;
    }
    .react-multiple-carousel__arrow--left {
        left: 0;
    }
    .react-multiple-carousel__arrow--right {
        right: 0;
    }

    .pattern {
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${(props) => (props.isMobileSize ? '35%' : 'auto')};
        transform: rotateX(180deg);
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
