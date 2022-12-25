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
  }
  a {
    color: #000000;
    text-decoration: none;
  }
`;
