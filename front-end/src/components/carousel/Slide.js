/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { map } from 'lodash/core';
import { css, jsx } from '@emotion/react';
import { mq } from '../../constants/MediaQuery';
import LonnieImage from '../../../asset/lonnie.png';
import DikeImage from '../../../asset/dike-img.png';
import NiklImage from '../../../asset/nikl-img.png';
import DongleImage from '../../../asset/dongle-img.png';
import ManageImage from '../../../asset/management.png';
import LoginImage from '../../../asset/login-product.png';
import MatImage from '../../../asset/mat-img.png';

const contentWrapper = css`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.01);
  text-decoration: none;
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.03),
    inset 3px 3px 5px rgba(0, 0, 0, 0.03);
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 1rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: rgba(0, 0, 0, 0.7);
      }
      img {
        width: 80%;
        height: auto;
      }
      p {
        font-size: 0.8rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.5);
        margin-right: 1rem;
        padding: 0.5rem;
      }
      span {
        font-size: 0.6rem;
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
    padding: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    list-style-type: square;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      display: flex;
      width: 100%;
      justify-content: space-between;
      line-height: 2rem;
      color: rgba(0, 0, 0, 0.7);
      span {
        text-transform: capitalize;
      }
      div {
        display: flex;
        width: 150px;
        justify-content: flex-start;
        padding: 0.1rem;
        border: 0;
        span {
          font-size: 0.6rem;
          color: rgba(0, 0, 0, 0.7);
          padding: 0.2rem;
          text-transform: inherit;
          border: 0;
          letter-spacing: 0.05rem;
        }
        a {
          font-size: 0.6rem;
          color: #99ccff;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      #title {
        font-weight: 600;
        font-size: 0.8rem;
        padding: 0.2rem;
      }
    }
  }
`;

const Slide = ({ type, title, description, period, development }) => {
  return (
    <article
      css={css`
        ${contentWrapper}
        ${mq[1]} {
          ul {
            li {
              div {
                width: fit-content;
              }
            }
          }
        }
        ${mq[2]} {
          header {
            padding: 1.5rem;
            flex-direction: row;
            div {
              width: 50%;
              h3 {
                line-height: 2.5rem;
                font-size: 1.4rem;
              }
              p {
                font-size: 1rem;
              }
            }
          }
        }
      `}
    >
      <header>
        <div>
          <h3>{title}</h3>
          <img
            alt={title}
            src={
              type === 'lonnie'
                ? LonnieImage
                : type === 'dike'
                ? DikeImage
                : type === 'nikl'
                ? NiklImage
                : type === 'management'
                ? ManageImage
                : type === 'login'
                ? LoginImage
                : type === 'dongle'
                ? DongleImage
                : type === 'mat'
                ? MatImage
                : ''
            }
          />
        </div>
        <div>
          <p>{period}</p>
          <span>{description}</span>
        </div>
      </header>

      <ul>
        {map(development, (value, sort) => {
          return value.length !== 0 ? (
            <li key={sort}>
              <span id="title">{sort}</span>
              <div>
                {sort === 'github' ? (
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
