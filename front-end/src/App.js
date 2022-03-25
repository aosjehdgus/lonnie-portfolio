/** @jsx jsx */
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { SWRConfig } from 'swr';
import { HOME_PATH, PROFILE_PATH } from './configs/AppConfig';
import NavBar from './components/common/nav';
import Footer from './components/common/footer';
import Spinner from './components/common/Spinner';

const appContainer = css`
  padding-top: 125px;
  position: relative;
  z-index: 0;
`;
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Error404 = lazy(() => import('./pages/errors/404'));

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
        <NavBar
          situation={
            location.pathname === HOME_PATH ||
            location.pathname === PROFILE_PATH
              ? ''
              : '404'
          }
        />
      </header>

      <main css={appContainer}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={PROFILE_PATH} element={<Profile />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </SWRConfig>
  );
};

export default App;
