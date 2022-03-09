/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import CAREER from '../../constants/Career';
import { mq } from '../../constants/MediaQuery';

const careerContentContainer = css`
  display: block;
  justify-content: space-around;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
`;

const contentWrapper = prop => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 12px;
  background: #f8f9fa;
  text-decoration: none;

  margin: 1rem;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    h3 {
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.6rem;
      margin-left: 1rem;
      font-weight: 700;
    }
    img {
      width: 10rem;
    }
  }
  div {
    padding: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    p {
      font-size: 1rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
      margin-right: 1rem;
      margin-bottom: ${prop === 'summary' ? '0' : '1rem'};
    }
    span {
      font-size: 0.8rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.7);
      line-height: 1.3rem;
    }
  }

  article {
    display: flex;
    flex-direction: ${prop === 'summary' ? 'column' : 'row'};
    flex-grow: 3;
    padding: 0.5rem;
    height: 100%;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;
      align-items: ${prop === 'summary' ? 'center' : 'flex-start'};
      flex-direction: ${prop === 'summary' ? 'row' : 'column'};
      padding: 0.5rem;
      border: 0;
      p {
        font-size: 0.85rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.5);
        border: 0;
      }
      span {
        font-size: 0.7rem;
        color: rgba(0, 0, 0, 0.8);
        border: 0;
      }
      ul {
        height: 100%;
        list-style-type: square;
        margin-left: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          font-size: 0.7rem;
          line-height: 2rem;
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
`;

const CareerContent = () => {
  return (
    <div
      css={css`
        ${careerContentContainer}
        ${mq[4]} {
          display: flex;
          width: 70%;
          height: 100%;
        }
      `}
    >
      {CAREER.map(({ key, working, icon, title, description, contents }) => {
        return (
          <section css={contentWrapper(key)} key={key}>
            <header>
              {icon}
              <h3>{title}</h3>
            </header>
            <div>
              <p>{working}</p>
              <span>{description}</span>
            </div>
            <article>
              {contents.map(({ period, project, content, developments }) => {
                return key === 'summary' ? (
                  <div key={content}>
                    <p>{period}</p>
                    <span>{content}</span>
                  </div>
                ) : (
                  <div key={project}>
                    <div>
                      <p>{period}</p>
                      <span>{project}</span>
                    </div>
                    <ul>
                      {developments.map(development => {
                        return <li key={development}>{development}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </article>
          </section>
        );
      })}
    </div>
  );
};

export default CareerContent;
