import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddlerware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import reducer from './reducers/user_reducer';

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

const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddlerware,
    reduxThunk
)(createStore);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider
            store={createStoreWidthMiddleware(
                reducer,
                //
                //개발자 도구를 사용하기 위한 설정
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
            )}
        >
            <GlobalStyle />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
