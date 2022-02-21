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
    background: rgba(0, 51, 102, 1);
    box-shadow: inset -3px -3px 7px rgba(0, 38, 77, 1),
      inset 3px 3px 5px rgba(0, 79, 158, 1);
  }
  // 공(Dark mode)
  input:checked + label:after {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background: rgba(255, 222, 56, 1);
    box-shadow: inset -3px -3px 7px rgba(255, 224, 66, 1),
      inset 3px 3px 5px rgba(209, 174, 0, 1);
    content: '';
    left: calc(100% - 47.5px);
    right: 7.5px;
  }
  //배경(Light mode)
  label {
    display: block;
    position: relative;
    width: 120px;
    height: 60px;
    font-weight: 700;

    background: rgba(128, 227, 255, 1);
    border-radius: 60px;
    box-shadow: inset -3px -3px 7px rgba(41, 209, 255, 1),
      inset 3px 3px 5px rgba(0, 172, 219, 0.5);
    transition: background 0.7s;
  }
  //공(Light mode)
  label:after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: 'Light';
    color: rgb(0, 0, 0);
    position: absolute;
    left: 7.5px;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    font-size: 0.8rem;
    background: rgb(255, 252, 187);
    transform: translateY(-50%);
    box-shadow: inset -3px -3px 7px rgba(255, 249, 128, 1),
      inset 3px 3px 5px rgba(224, 213, 0, 1);
    transition: all 0.7s;
  }
  label span {
    display: none;
  }

  input:checked + label div {
    transform: translateX(71.5px) translateY(12.5px);
    margin: 0;
    position: absolute;
    width: 31px;
    height: 31px;
    z-index: 1;
    border-radius: 100%;
    background: rgba(0, 51, 102, 1);
  }
`;

const NavToggle = () => {
  return (
    <>
      <div css={navToggle}>
        <input type="checkbox" id="chk1" />

        <label htmlFor="chk1">
          <span>''</span>

          <div>
            <span>''</span>
          </div>
        </label>
      </div>
    </>
  );
};

export default NavToggle;
