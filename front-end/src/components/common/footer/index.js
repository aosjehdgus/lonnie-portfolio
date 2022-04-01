import React from 'react';
import { css } from '@emotion/react';
import GithubLogo from '../../../../asset/github.svg';
import TistoryLogo from '../../../../asset/tistory.svg';
import FacebookLogo from '../../../../asset/facebook.svg';
import InstagramLogo from '../../../../asset/instagram.svg';
import { mq } from '../../../constants/MediaQuery';

const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.1),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  section {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    span {
      font-size: 0.6rem;
      text-align: center;
      line-height: 1.5rem;
      color: rgba(0, 0, 0, 0.5);
    }
    img {
      width: 1.5rem;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
  #logo {
    width: 250px;
    justify-content: space-between;
  }
`;

const Footer = () => {
  return (
    <footer
      css={css`
        ${footerContainer}
        ${mq[2]} {
          section {
            span {
              font-size: 0.8rem;
            }
            img {
              width: 2rem;
            }
          }
        }
      `}
    >
      <section id="logo">
        <a
          href="https://github.com/aosjehdgus"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubLogo} alt="github" />
        </a>
        <a
          href="https://aosjehdgus.tistory.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={TistoryLogo} alt="tistory" />
        </a>
        <a
          href="https://www.facebook.com/donghyun.dongle/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={FacebookLogo} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/doooonghyuni/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={InstagramLogo} alt="instagram" />
        </a>
      </section>
      <section>
        <span>
          Copyright 2022. Kim Dong Hyun All pictures cannot be copied without
          permission.
        </span>
      </section>
    </footer>
  );
};

export default Footer;
