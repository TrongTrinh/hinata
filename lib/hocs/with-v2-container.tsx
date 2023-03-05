import { Component, FC } from 'react';
import { createGlobalStyle } from 'styled-components';

export const v2Container = (WrappedComponent: FC) => {
    return class HigherOrderComponent extends Component {
        render() {
            return (
                <>
                    <GlobalStyle />
                    <WrappedComponent />
                </>
            );
        }
    };
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 10px;
    font-family:
    'Noto Sans JP',
    'Helvetica Neue',
    Arial,
    'Hiragino Kaku Gothic ProN',
    'Hiragino Sans',
    Meiryo,
    sans-serif;
    background: #ffffff;
     background-image: url(/assets/images/index/bg_wave.jpg);
     background-size: 110% 100%;
     animation: AnimateBG 15s linear infinite; 
  } 
@keyframes AnimateBG {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0% 0%;
    }
}

  a {
    color: #000000;
    text-decoration: none;
  }
`;
