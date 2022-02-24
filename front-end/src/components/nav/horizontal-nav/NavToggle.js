/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const navToggle = css`
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: center;
  margin-left: 15px;
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
    background: rgb(255, 252, 187);
    box-shadow: inset -3px -3px 7px rgba(255, 249, 128, 1),
      inset 3px 3px 5px rgba(224, 213, 0, 1);
    content: 'Dark';
    left: calc(100% - 30px);
    right: 5px;
  }
  //배경(Light mode)
  label {
    display: block;
    position: relative;
    width: 80px;
    height: 40px;
    font-weight: 700;

    background: rgba(128, 227, 255, 1);
    border-radius: 40px;
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
    left: 5px;
    top: 50%;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    font-size: 0.5rem;
    transform: translateY(-50%);
    background: rgb(255, 252, 187);
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
    <div css={navToggle}>
      <input type="checkbox" id="chk1" />
      <label htmlFor="chk1">
        <span>''</span>
      </label>
    </div>
  );
};

export default NavToggle;
