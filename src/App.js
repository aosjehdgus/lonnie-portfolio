import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  ENTRY_PATH,
  HOME_PATH,
  PROFILE_PATH,
  PROJECT_PATH,
  SKILL_PATH,
  TECH_PATH,
} from './configs/AppConfig';

import HorizontalNav from './components/nav/horizontal-nav';
import Entry from './pages/Entry';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Tech from './pages/Tech';

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {pathname === ENTRY_PATH ? null : <HorizontalNav />}
      <Routes>
        <Route path={ENTRY_PATH} element={<Entry />} />
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={PROFILE_PATH} element={<Profile />} />
        <Route path={PROJECT_PATH} element={<Project />} />
        <Route path={SKILL_PATH} element={<Skill />} />
        <Route path={TECH_PATH} element={<Tech />} />
      </Routes>
    </>
  );
};

export default App;
