/* eslint-disable react/prop-types */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const contentWrapper = prop => css`
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
    padding: 2rem;
    h3 {
      svg {
        margin-right: 1rem;
      }
      display: flex;
      padding: 1rem;
      align-items: center;
      font-size: 1.3rem;
      color: rgba(0, 0, 0, 0.9);
    }
    img {
      width: 25rem;
    }
  }

  div {
    padding: 1rem;
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
  ul {
    height: 100%;
    padding: 1rem;
    list-style-type: square;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      font-size: 0.7rem;
      line-height: 2rem;
      color: rgba(0, 0, 0, 0.7);
      span {
        font-weight: 500;
        font-size: 0.8rem;
      }
    }
  }
`;

const Slide = ({
  title,
  icon,
  image,
  description,
  period,
  development,
  func,
  github,
}) => {
  const { front, back, database, build, deploy } = development;
  return (
    <article css={contentWrapper}>
      <header>
        <h3>
          {icon}
          {title}
        </h3>
        {image}
      </header>
      <div>
        <p>{period}</p>
        <span>{description}</span>
      </div>

      <ul>
        {github.length !== 0 ? (
          <li>
            <span>Github : </span>
            {github}
          </li>
        ) : null}
        {func.length !== 0 ? (
          <li>
            <span>기능 : </span> {func.map(data => data)}
          </li>
        ) : null}
        {front.length !== 0 ? (
          <li>
            <span>Front : </span> {front.map(data => data)}
          </li>
        ) : null}
        {back.length !== 0 ? (
          <li>
            <span>Back : </span> {back.map(data => data)}
          </li>
        ) : null}
        {database.length !== 0 ? (
          <li>
            <span>Database : </span>
            {database}
          </li>
        ) : null}
        {build.length !== 0 ? (
          <li>
            <span>Build : </span> {build.map(data => data)}
          </li>
        ) : null}
        {deploy.length !== 0 ? (
          <li>
            <span>Deploy : </span>
            {deploy}
          </li>
        ) : null}
      </ul>
    </article>
  );
};

export default Slide;
