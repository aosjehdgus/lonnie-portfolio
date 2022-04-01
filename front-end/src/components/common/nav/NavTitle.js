import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../../configs/AppConfig';
import { mq } from '../../../constants/MediaQuery';

const navigationTitle = css`
  padding: 1rem;
  line-height: 1.5rem;
  &:hover {
    transform: scale(1.05);
  }
  a {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 900;
    font-size: 1.2rem;
    text-decoration: none;
  }
  transition: all 1s;
`;
const NavTitle = () => {
  return (
    <h1
      css={css`
        ${navigationTitle}
        ${mq[1]} {
          padding: 1.5rem;
          a {
            font-size: 1.5rem;
          }
        }
        ${mq[2]} {
          a {
            font-size: 2rem;
          }
        }
        ${mq[3]} {
          a {
            font-size: 2.2rem;
          }
        }
      `}
    >
      <Link to={HOME_PATH}>Lonnie's Portfolio</Link>
    </h1>
  );
};

export default NavTitle;
