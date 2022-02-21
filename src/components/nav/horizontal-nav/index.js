/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavTitle from './NavTitle';
import NavList from './NavList';
import NavLink from './NavLink';
import NavToggle from './NavToggle';
import NAV_CONFIG from '../../../configs/NavConfig';

const cornSilk = 'rgb(237, 195, 115)';

const horizontalNavWrapper = css`
  display: flex;
  width: 100%;
  height: 100px;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 15px 10px;
  margin-bottom: 20px;
  background: ${cornSilk};
`;

const navListWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 30px 10px 10px;
`;

const HorizontalNav = () => {
  return (
    <nav css={horizontalNavWrapper}>
      <NavTitle />
      <ul css={navListWrapper}>
        <NavList>
          {NAV_CONFIG.map((item, index) => {
            return <NavLink key={item.path} item={item} />;
          })}
        </NavList>
        <NavToggle />
      </ul>
    </nav>
  );
};

export default HorizontalNav;
