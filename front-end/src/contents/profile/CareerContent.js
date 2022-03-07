/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
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

const contentWrapper = css`
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
  &:hover {
    transform: translateY(-20px);
    article {
      p {
        text-decoration: underline;
      }
    }
  }
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
      width: 2.5rem;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 1rem;
    span {
      font-size: 0.95rem;
      color: rgba(0, 0, 0, 0.7);
      padding: 0.5rem;
      font-weight: 500;
    }
    div {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.9rem;
        padding: 0.5rem;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

const CareerContent = () => {
  const { profile, isLoading } = useProfile();

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={careerContentContainer}>
      {CAREER.map(({ icon, title, link, description, contents }) => {
        return (
          <a
            target="_blank"
            href={`https://${link}`}
            css={contentWrapper}
            rel="noreferrer"
            key={title}
          >
            <header>
              {icon}
              <h3>{title}</h3>
            </header>
            <article>
              <span>{description}</span>
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
