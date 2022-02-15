/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

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
  font-size: 60px;
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
    font-size: 60px;
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

const Entry = () => {
  return (
    <div css={wrapperStyle}>
      <div css={divStyle}>
        <div css={staticTextStyle}>I'm</div>
        <ul css={dynamicTextStyle}>
          <li>
            <span>Lonnie</span>
          </li>
          <li>
            <span>Developer</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Entry;
