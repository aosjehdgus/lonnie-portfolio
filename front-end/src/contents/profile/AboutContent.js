/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import ABOUT from '../../constants/About';
import { mq } from '../../constants/MediaQuery';

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
      padding: 0.5rem 1rem 0.5rem 1rem;
      font-size: 1rem;
      line-height: 1rem;
      color: rgba(0, 0, 0, 0.7);
    }
    p {
      padding: 1rem;
      font-size: 0.8rem;
      color: rgba(0, 0, 0, 0.5);
      line-height: 1.5rem;
    }
  }
  article {
    display: flex;
    padding: 1rem;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const contentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 250px;
  svg {
    width: 30px;
    height: 30px;
  }
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
      font-size: 0.9rem;
    }
    span {
      font-size: 0.7rem;
      color: rgba(0, 0, 0, 0.7);
      margin-top: 0.2rem;
    }
  }
`;

const AboutContent = () => {
  return (
    <div
      css={css`
        ${aboutContentContainer}
        ${mq[2]} {
          header {
            h2 {
              font-size: 1.5rem;
              line-height: 2rem;
            }
            p {
              font-size: 1rem;
            }
          }
          article {
            display: flex;
            padding: 1rem;
            width: 100%;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        }
      `}
    >
      <header>
        <h2>긍정적 재료로 소통하는</h2>
        <h2>긍정 개발자</h2>
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
            <section
              css={css`
                ${contentWrapper}
                ${mq[2]}{
                  div {
                    h3 {
                      font-size: 1.2rem;
                    }
                    span {
                      font-size: 0.9rem;
                    }
                }
              `}
              key={name}
            >
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
