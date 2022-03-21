import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import App from './App';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Global styles={GlobalStyle} />
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
