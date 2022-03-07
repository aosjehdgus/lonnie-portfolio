/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import CAREER from '../../constants/Career';
import useProfile from '../../swr/useProfile';
import Spinner from '../../components/common/Spinner';

const careerContentContainer = css`
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: calc(100% - 11rem);
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
  width: 70%;
  height: 100%;
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
  }
  span {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 1rem;
    padding-left: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
  }
  article {
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 1rem;
    height: 100%;
    justify-content: ${prop !== 'Job' ? 'space-between' : 'flex-start'};

    div {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.8rem;
        padding: 0.5rem;
        color: rgba(0, 0, 0, 0.7);
        overflow: hidden;
      }
    }
  }
`;

const CareerContent = () => {
  const { isLoading } = useProfile();

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={careerContentContainer}>
      {CAREER.map(({ icon, title, link, description, contents }) => {
        return (
          <a
            target="_blank"
            href={`https://${link}`}
            css={contentWrapper(title)}
            rel="noreferrer"
            key={title}
          >
            <header>
              {icon}
              <h3>{title}</h3>
            </header>
            <span>{description}</span>
            <article>
              {contents.map(({ period, content }) => {
                return (
                  <div>
                    <span>{period}</span>
                    <span>{content}</span>
                  </div>
                );
              })}
            </article>
          </a>
        );
      })}
    </div>
  );
};

export default CareerContent;
