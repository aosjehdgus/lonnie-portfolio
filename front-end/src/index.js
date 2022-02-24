import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <BrowserRouter>
    <Global styles={GlobalStyle} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
