/** @jsx jsx */
import { css, jsx } from '@emotion/react';
// import moment from 'moment/src/moment';

import ABOUT from '../../constants/About';

const aboutContentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  width: 70%;
  background: #f8f9fa;
  header {
    padding: 1rem;
    h2 {
      padding: 1rem;
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.7);
    }
    p {
      padding: 1rem;
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.5);
      line-height: 1.5rem;
    }
  }
  article {
    display: flex;
    padding: 1rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const contentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 250px;
  div {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    h3 {
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.2rem;
    }
    span {
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.7);
      margin-top: 0.2rem;
    }
    a {
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.7);
      text-decoration: none;
      &:hover {
        font-size: 1.003rem;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

const AboutContent = () => {
  // const { name, birth, university, email, github, blog } = profile || {};

  // const birthday = moment(birth).format('YYYY.MM.DD');

  return (
    <div css={aboutContentContainer}>
      <header>
        <h2>긍정적 재료로 소통하는 긍정 개발자</h2>
        <p>
          "안녕하세요. 저는 재료공학 출신 프론트 엔드 개발자 김동현 입니다."
        </p>
        <p>
          재료를 다루며 무언가 새롭게 만드는 것에 흥미를 가지면서 개발을
          시작하게 되었습니다
        </p>
      </header>
      <article>
        {ABOUT.map(({ icon, name, content }) => {
          return (
            <section css={contentWrapper} key={name}>
              {icon}
              <div>
                <h3>{name}</h3>
                <span>{content}</span>
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
};

export default AboutContent;
