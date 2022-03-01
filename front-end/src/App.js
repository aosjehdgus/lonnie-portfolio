/** @jsx jsx */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { css, jsx } from '@emotion/react';

import { HOME_PATH, PROFILE_PATH, CONTACT_PATH } from './configs/AppConfig';

import NavBar from './components/common/nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

const appContainer = css`
  padding-top: 140px;
`;

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main css={appContainer}>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={PROFILE_PATH} element={<Profile />} />
          <Route path={CONTACT_PATH} element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
