/** @jsx jsx */
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { SWRConfig } from 'swr';
import { HOME_PATH, PROFILE_PATH } from './configs/AppConfig';
import NavBar from './components/common/nav';
import Footer from './components/common/footer';
import Spinner from './components/common/Spinner';

const appContainer = prop => css`
  padding-top: 120px;
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
      background: #f8f9fa;
      background-size: cover;
      background-position: center center;
      opacity: 0.5;}`}
`;
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));

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
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={PROFILE_PATH} element={<Profile />} />
            {/* <Route path={CONTACT_PATH} element={<Contact />} /> */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </SWRConfig>
  );
};

export default App;
