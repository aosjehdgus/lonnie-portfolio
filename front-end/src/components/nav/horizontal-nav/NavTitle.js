/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../../configs/AppConfig';

const navigationTitle = css`
  padding: 10px;
  a {
    color: #fff;
    font-size: 1.8rem;
    text-decoration: none;
  }
`;

const NavTitle = () => {
  return (
    <h1 css={navigationTitle}>
      <Link to={HOME_PATH}>Lonnie's Tech</Link>
    </h1>
  );
};

export default NavTitle;
