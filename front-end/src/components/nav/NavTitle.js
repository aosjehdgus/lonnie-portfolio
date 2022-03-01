/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../configs/AppConfig';

const breakpoints = [370, 576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const navigationTitle = css`
  padding: 10px;
  a {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

const NavTitle = () => {
  return (
    <h1
      css={css`
        ${navigationTitle}
        ${mq[2]} {
          a {
            font-size: 1.5rem;
          }
        }
        ${mq[3]} {
          a {
            font-size: 2rem;
          }
        }
      `}
    >
      <Link to={HOME_PATH}>Lonnie's Portfolio</Link>
    </h1>
  );
};

export default NavTitle;
