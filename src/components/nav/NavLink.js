/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import NAV_CONFIG from '../../configs/NavConfig';

const navLinkWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 30px 10px 10px;
  li {
    padding: 10px;
    margin-left: 15px;
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 19px;
    text-decoration: none;
  }
  a:hover {
    font-size: 23px;
    color: rgba(255, 255, 255);
    transition: 0.2s;
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
