import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration : none;
        color : inherit;
    }
    button {
        border : none;
        cursor : pointer;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-size: 12px;
    }
    img {
        width: 100%;
        height: auto;
    }
    button {
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: inherit;
    }
    input {
        &:focus {
            outline: none;
            border: none;
        }
    }
    textarea {
        border: none;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        resize: none; 
    }
    .ir {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }
    :root {
        --main-color: #B6E546;
        --main-disabled-color: #D8F494;
        --main-title-color: #000000;
        --subtitle-text: #767676;
        --disabled-text-color: #FFFFFF;
        --border-gray: #DBDBDB;
        --warning-color: #EB5757;
        --bg-color: #FFFFFF;
    }
`;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
