/* eslint-disable react/prop-types */
/** @jsx jsx */
import _ from 'lodash';
import { css, jsx } from '@emotion/react';
import { mq } from '../../constants/MediaQuery';

const contentWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  background: #f8f9fa;
  text-decoration: none;
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 1rem;
      h3 {
        svg {
          margin-right: 1rem;
        }
        display: flex;
        padding: 1rem;
        align-items: center;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        color: rgba(0, 0, 0, 0.7);
      }
      img {
        width: 100%;
        height: auto;
      }
      p {
        font-size: 1.1rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.5);
        margin-right: 1rem;
        padding: 0.5rem;
      }
      span {
        font-size: 0.8rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        line-height: 1.6rem;
        letter-spacing: 0.05rem;
        padding: 0.5rem;
        padding-top: 1rem;
      }
    }
  }

  ul {
    height: 100%;
    padding: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    list-style-type: square;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      line-height: 2rem;
      color: rgba(0, 0, 0, 0.7);
      span {
        text-transform: capitalize;
      }
      div {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        padding: 0.1rem;
        border: 0;

        span {
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.7);
          padding: 0.2rem;
          text-transform: inherit;
          border: 0;
          letter-spacing: 0.05rem;
        }
        a {
          color: #99ccff;
        }
      }
      #title {
        font-weight: 600;
        font-size: 0.9rem;
        width: 150px;
        padding: 0.2rem;
      }
    }
  }
`;

const Slide = ({ title, icon, image, description, period, development }) => {
  return (
    <article
      css={css`
        ${contentWrapper}
        ${mq[4]} {
          header {
            flex-direction: row;

            div {
              width: 50%;
              h3 {
                line-height: 2.5rem;
                font-size: 1.6rem;
              }
            }
          }
        }
      `}
    >
      <header>
        <div>
          <h3>
            {icon}
            {title}
          </h3>
          {image}
        </div>
        <div>
          <p>{period}</p>
          <span>{description}</span>
        </div>
      </header>

      <ul>
        {_.map(development, (value, key) => {
          return value.length !== 0 ? (
            <li key={key}>
              <span id="title">{key}</span>
              <div>
                {key === 'github' ? (
                  <a href={value} target="_blank" rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  <span>{`${value}`}</span>
                )}
              </div>
            </li>
          ) : (
            ''
          );
        })}
      </ul>
    </article>
  );
};

export default Slide;
