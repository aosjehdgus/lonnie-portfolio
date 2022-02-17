/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavTitle from './NavTitle';
import NavLink from '../NavLink';

const horizontalNavWrapper = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 15px 10px;
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
