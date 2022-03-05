/** @jsx jsx */
import { Route, Routes, useLocation } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { SWRConfig } from 'swr';

import { HOME_PATH, PROFILE_PATH, CONTACT_PATH } from './configs/AppConfig';
import waterColorImg from '../asset/watercolor.jpg';
import NavBar from './components/common/nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

const appContainer = prop => css`
  padding-top: 140px;
  position: relative;
  z-index: 0;
  ${prop === 'home'
    ? ''
    : `&:before {
      content: '';
      position: absolute;
      top: 120px;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url(${waterColorImg});
      background-size: cover;
      background-position: center center;
      opacity: 0.25;}`}
`;

const App = () => {
  const location = useLocation();
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then(res => res.json()),
      }}
    >
      <header>
        <NavBar />
      </header>
      <main
        css={appContainer(location.pathname === HOME_PATH ? 'home' : 'content')}
      >
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={PROFILE_PATH} element={<Profile />} />
          <Route path={CONTACT_PATH} element={<Contact />} />
        </Routes>
      </main>
    </SWRConfig>
  );
};

export default App;
