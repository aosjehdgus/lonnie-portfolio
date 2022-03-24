/* eslint-disable react/prop-types */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavTitle from './NavTitle';
import NavList from './NavList';
import NavLink from './NavLink';
// import NavToggle from './NavToggle';
import NAV_CONFIG from '../../../configs/NavConfig';

const horizontalNavWrapper = css`
  display: flex;
  width: 100%;
  height: 100px;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 1);
  z-index: 1;
  border-radius: 12px;
`;

const navListWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 30px 10px 10px;
`;

const NavBar = ({ situation }) => {
  return (
    <nav css={horizontalNavWrapper}>
      <NavTitle />
      <ul css={navListWrapper}>
        <NavList>
          {NAV_CONFIG.map(item => {
            return situation !== '404' ? (
              <NavLink key={item.path} item={item} />
            ) : (
              <div key={item.path} />
            );
          })}
        </NavList>
        {/* <NavToggle /> */}
      </ul>
    </nav>
  );
};

export default NavBar;
