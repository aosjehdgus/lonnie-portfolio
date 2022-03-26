/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import ARCHIVE from '../../constants/Archive';
import { mq } from '../../constants/MediaQuery';

const archiveContentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.01);
  text-decoration: none;
  margin: 0.5rem;
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.03),
    inset 3px 3px 5px rgba(0, 0, 0, 0.03);
  transition: all 0.8s;
  &:hover {
    transform: scale(0.95);
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    h3 {
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.2rem;
      margin-left: 1rem;
      font-weight: 700;
    }
    img {
      width: 1.5rem;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 1rem;
    span {
      font-size: 0.7rem;
      color: rgba(0, 0, 0, 0.6);
      padding: 0.5rem;
      font-weight: 900;
      line-height: 1.5rem;
    }
    ul {
      list-style-type: disc;
      margin-top: 1rem;
      li {
        font-size: 0.7rem;
        padding: 0.5rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const ArchiveContent = () => {
  return (
    <div
      css={css`
        ${archiveContentContainer}
        ${mq[2]} {
          display: flex;
          flex-direction: row;
          width: 64%;
        }
      `}
    >
      {ARCHIVE.map(({ icon, title, link, description, contents }) => {
        return (
          <a
            target="_blank"
            href={`https://${link}`}
            css={css`
              ${contentWrapper}
              ${mq[2]} {
                width: 90%;
                height: 320px;
                header {
                  h3 {
                    font-size: 1.3rem;
                  }
                  img {
                    width: 2rem;
                  }
                }
                article {
                  span {
                    font-size: 0.8rem;
                  }
                  ul {
                    li {
                      font-size: 0.7rem;
                    }
                  }
              }
            `}
            rel="noreferrer"
            key={title}
          >
            <header>
              {icon}
              <h3>{title}</h3>
            </header>
            <article>
              <span>{description}</span>
              <ul>
                {contents.map(content => {
                  return <li key={content}>{content}</li>;
                })}
              </ul>
            </article>
          </a>
        );
      })}
    </div>
  );
};

export default ArchiveContent;
