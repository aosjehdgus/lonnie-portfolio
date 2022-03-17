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

const Slide = ({ type, title, description, period, development }) => {
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
