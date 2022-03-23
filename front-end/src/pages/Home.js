/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import { mq } from '../constants/MediaQuery';

const white = 'rgb(255, 255, 255)';
const deepTaupe = 'rgb(123, 102, 96)';
const whiteSand = 'rgb(219, 213, 209)';
const fuchsiaPink = 'rgb(223, 136, 183)';
const tawnyOrange = 'rgb(211, 128, 111)';
const veryPeri = 'rgb(102, 103, 171)';
const cornSilk = 'rgb(237, 195, 115)';
const paradisePink = 'rgb(228, 69, 94)';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${white};
  margin: 0;
  padding: 0;
  border: 0;
  width: 100vw;
  height: calc(100vh - 250px);
`;

const divStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
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
  color: ${veryPeri};
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
`;

const dynamicTextStyle = css`
  line-height: 90px;
  height: 90px;
  overflow: hidden;
  padding-left: 20px;
  li {
    list-style: none;
    color: ${paradisePink};
    font-size: 1.5rem;
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
    background-color: ${white};
    border-left: 2px solid ${paradisePink};
    animation: ${typing} 3s steps(9) infinite;
  }
`;

// eslint-disable-next-line react/function-component-definition
const Home = () => {
  return (
    <div css={wrapperStyle}>
      <div css={divStyle}>
        <div
          css={css`
            ${staticTextStyle}
            ${mq[0]} {
              font-size: 2rem;
            }
            ${mq[1]} {
              font-size: 3rem;
            }
            ${mq[2]} {
              font-size: 4rem;
            }
            ${mq[3]} {
              font-size: 5rem;
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
                font-size: 2rem;
              }
            }
            ${mq[1]} {
              li {
                font-size: 3rem;
              }
            }
            ${mq[2]} {
              li {
                font-size: 4rem;
              }
            }
            ${mq[3]} {
              li {
                font-size: 5rem;
              }
            }
          `}
        >
          <li>
            <span>Lonnie's Portfolio</span>
          </li>
          <li>
            <span>Development Story</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
