/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const white = 'rgb(255, 255, 255)';
const deepTaupe = 'rgb(123, 102, 96)';
const whiteSand = 'rgb(219, 213, 209)';
const fuchsiaPink = 'rgb(223, 136, 183)';
const tawnyOrange = 'rgb(211, 128, 111)';
const veryPeri = 'rgb(102, 103, 171)';
const cornSilk = 'rgb(237, 195, 115)';
const paradisePink = 'rgb(228, 69, 94)';

const navToggle = css`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  input {
    position: absolute;
    left: -1000%;
  }
  //배경(Dark mode)
  input:checked + label {
    background: #0e0c32;
    border: 5px solid #fffad8;
  }
  // 공(Dark mode)
  input:checked + label:after {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background: #becec3;
    content: 'Dark';
    left: calc(100% - 52.5px);
    right: 7.5px;
  }
  label {
    display: block;
    position: relative;
    width: 120px;
    height: 60px;
    font-weight: 700;
    border: 5px solid #fff;
    background: rgb(0, 163, 210, 0.7);
    border-radius: 60px;
    transition: background 0.4s;
  }
  label:after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: 'Light';
    color: rgb(0, 0, 0);
    position: absolute;
    left: 7.5px;
    top: 50%;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background: rgb(255, 252, 187);
    transform: translateY(-50%);
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.4s;
  }
  label span {
    display: none;
  }
`;

const NavToggle = () => {
  return (
    <div css={navToggle}>
      <input type="checkbox" id="chk1" />
      <label htmlFor="chk1">
        <span>''</span>
      </label>
    </div>
  );
};

export default NavToggle;
