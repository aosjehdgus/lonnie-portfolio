/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../../configs/AppConfig';
import { mq } from '../../../constants/MediaQuery';

const navigationTitle = css`
  padding: 1rem;
  border-radius: 12px;
  line-height: 1.5rem;
  background: rgb(255, 255, 255);
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.1),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.02);
    transition: 0.5s;
  }

  a {
    color: rgba(0, 0, 0, 0.7);
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
