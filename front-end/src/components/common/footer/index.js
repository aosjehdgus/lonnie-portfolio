/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import GithubLogo from '../../../../asset/github.svg';
import TistoryLogo from '../../../../asset/tistory.svg';
import FacebookLogo from '../../../../asset/facebook.svg';
import InstagramLogo from '../../../../asset/instagram.svg';

const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.1);

  section {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.5rem;
    span {
      font-size: 0.8rem;
      color: rgba(0, 0, 0, 0.5);
    }
    img {
      width: 2rem;
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
    <footer css={footerContainer}>
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
