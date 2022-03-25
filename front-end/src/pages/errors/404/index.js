/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../../configs/AppConfig';

const Error404Container = css`
  height: calc(100vh - 245.9px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    h3 {
      font-size: 10rem;
    }
    span {
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }
    button {
      font-size: 1rem;
      padding: 0.5rem;
      width: 50%;

      box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.2),
        inset 3px 3px 5px rgba(0, 0, 0, 0.2);
      border-radius: 12px;
      border: 0;
      cursor: pointer;
      background: rgba(255, 227, 115);
      a {
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
      }
    }
  }
`;

const Error404 = () => {
  return (
    <div css={Error404Container}>
      <div>
        <h3>404</h3>
      </div>
      <div>
        <span>Page Not Found</span>
        <button type="button">
          <Link to={HOME_PATH}>Go to home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error404;
