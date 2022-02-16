/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import { HOME_PATH } from '../configs/AppConfig';

import { Link } from 'react-router-dom';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #082032;
  margin: 0;
  padding: 0;
  border: 0;
  width: 100vw;
  height: 100vh;
`;

const divStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const typing = keyframes`
  40%, 60% {
    left: calc(100% + 30px);
  }
  100%{
    left: 0;
  }
`;

const slide = keyframes`
  100%{
    top: -180px;
  }
`;

const staticTextStyle = css`
  color: #fff;
  font-size: 40px;
  font-weight: 400;
`;

const dynamicTextStyle = css`
  line-height: 90px;
  height: 90px;
  overflow: hidden;
  padding-left: 20px;
  li {
    list-style: none;
    color: #ff4c29;
    font-size: 40px;
    font-weihgt: 500;
    top: 0;
    position: relative;
    animation: ${slide} 6s steps(2) infinite;
  }
  li: after {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #082032;
    border-left: 2px solid #ff4c29;
    animation: ${typing} 3s steps(9) infinite;
  }
`;

const buttonStyle = css`
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 10px;
  background-color: inherit;
  cursor: pointer;
  font-size: 30px;
  box-shadow: 1px 3px 10px #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Entry = () => {
  return (
    <div css={wrapperStyle}>
      <div css={divStyle}>
        <div
          css={css`
            ${staticTextStyle}
            ${mq[0]} {
              font-size: 50px;
            }
            ${mq[0]} {
              font-size: 60px;
            }
          `}
        >
          It's
        </div>
        <ul
          css={css`
            ${dynamicTextStyle}
            ${mq[0]} {
              li {
                font-size: 50px;
              }
            }
            ${mq[1]} {
              li {
                font-size: 60px;
              }
            }
          `}
        >
          <li>
            <span>Lonnie's Tech Blog</span>
          </li>
          <li>
            <span>My Develop Story</span>
          </li>
        </ul>
      </div>
      <button css={buttonStyle}>
        <Link to={HOME_PATH}>Click here!</Link>
      </button>
    </div>
  );
};

export default Entry;