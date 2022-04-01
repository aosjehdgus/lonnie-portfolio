import React from 'react';
import { css, keyframes } from '@emotion/react';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const loading = css`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`;

const spinner = css`
  width: 64px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: rgba(255, 227, 115);
  border-bottom-color: rgba(255, 227, 115);
  animation: ${spin} 0.8s ease infinite;
`;

const Spinner = () => {
  return (
    <div css={loading}>
      <div css={spinner} />
    </div>
  );
};

export default Spinner;
