/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import ARCHIVE from '../../constants/Archive';
import useProfile from '../../swr/useProfile';
import Spinner from '../../components/common/Spinner';
import { mq } from '../../constants/MediaQuery';

const archiveContentContainer = css`
  display: block;
  justify-content: space-around;
  width: 100%;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  padding-left: 1.5rem;
  border-radius: 12px;
  background: #f8f9fa;
  text-decoration: none;
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
    p {
      font-size: 0.9rem;
      color: #99ccff;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
    span {
      font-size: 0.95rem;
      color: rgba(0, 0, 0, 0.7);
      padding: 0.5rem;
      font-weight: 500;
    }
    ul {
      list-style-type: disc;
      margin-top: 1rem;
      li {
        font-size: 0.9rem;
        padding: 0.5rem;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

const ArchiveContent = () => {
  const { profile, isLoading } = useProfile();

  return isLoading ? (
    <Spinner />
  ) : (
    <div
      css={css`
        ${archiveContentContainer}
        ${mq[4]} {
          display: flex;
          width: 70%;
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
              ${mq[4]} {
                display: block;
                width: 70%;
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
              <p>{link}</p>
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
