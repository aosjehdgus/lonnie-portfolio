/** @jsx jsx */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { css, jsx } from '@emotion/react';

import {
  HOME_PATH,
  PROFILE_PATH,
  PROJECT_PATH,
  SKILL_PATH,
  TECH_PATH,
} from './configs/AppConfig';

import HorizontalNav from './components/nav/horizontal-nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Tech from './pages/Tech';

const appContainer = css`
  padding-top: 140px;
`;

const App = () => {
  return (
    <>
      <header>
        <HorizontalNav />
      </header>
      <main css={appContainer}>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={PROFILE_PATH} element={<Profile />} />
          <Route path={PROJECT_PATH} element={<Project />} />
          <Route path={SKILL_PATH} element={<Skill />} />
          <Route path={TECH_PATH} element={<Tech />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
