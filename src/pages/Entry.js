/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import { HOME_PATH } from '../configs/AppConfig';

import { Link } from 'react-router-dom';

const breakpoints = [370, 576, 768, 992, 1200];

const white = 'rgb(255, 255, 255)';
const deepTaupe = 'rgb(123, 102, 96)';
const whiteSand = 'rgb(219, 213, 209)';
const fuchsiaPink = 'rgb(223, 136, 183)';
const tawnyOrange = 'rgb(211, 128, 111)';
const veryPeri = 'rgb(102, 103, 171)';
const cornSilk = 'rgb(237, 195, 115)';
const paradisePink = 'rgb(228, 69, 94)';

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${cornSilk};
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
  color: ${white};
  font-size: 30px;
  font-weight: 600;
`;

const dynamicTextStyle = css`
  line-height: 90px;
  height: 90px;
  overflow: hidden;
  padding-left: 20px;
  li {
    list-style: none;
    color: ${paradisePink};
    font-size: 30px;
    font-weight: 600;
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
    background-color: rgb(237, 195, 115);
    border-left: 2px solid ${paradisePink};
    animation: ${typing} 3s steps(9) infinite;
  }
`;

const buttonStyle = css`
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 15px;
  background-color: inherit;
  cursor: pointer;
  font-size: 28px;
  box-shadow: 2px 3px 3px #fff;
  a {
    color: ${white};
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
              font-size: 35px;
            }
            ${mq[1]} {
              font-size: 50px;
            }
            ${mq[2]} {
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
                font-size: 35px;
              }
            }
            ${mq[1]} {
              li {
                font-size: 50px;
              }
            }
            ${mq[2]} {
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
