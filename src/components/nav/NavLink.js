/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import NAV_CONFIG from '../../configs/NavConfig';

const navLinkWrapper = css`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  li {
    padding: 10px;
  }
  a {
    text-decoration: none;
  }
`;

const NavLink = () => {
  return (
    <ul css={navLinkWrapper}>
      {NAV_CONFIG.map((config) => {
        const { title, path } = config;
        return (
          <li key={title}>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLink;
