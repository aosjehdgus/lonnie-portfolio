/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavTitle from './NavTitle';
import NavLink from '../NavLink';

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

const HorizontalNav = () => {
  return (
    <nav css={horizontalNavWrapper}>
      <NavTitle />
      <NavLink />
    </nav>
  );
};

export default HorizontalNav;
