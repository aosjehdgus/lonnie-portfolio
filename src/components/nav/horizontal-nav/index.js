/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavTitle from './NavTitle';
import NavLink from '../NavLink';

const cornSilk = 'rgb(237, 195, 115)';

const horizontalNavWrapper = css`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 15px 10px;
  margin-bottom: 20px;
  background: ${cornSilk};
  h1 {
    color: #fff;
    padding: 10px;
    font-size: 30px;
  }
  &:hover {
    height: 150px;
    h1 {
      transition: 0.5s;
      font-size: 35px;
    }
    transition: 0.5s;
    a {
      transition: 0.5s;
      font-size: 22px;
    }
  }
`;

const HorizontalNav = () => {
  return (
    <div css={horizontalNavWrapper}>
      <NavTitle />
      <NavLink />
    </div>
  );
};

export default HorizontalNav;
