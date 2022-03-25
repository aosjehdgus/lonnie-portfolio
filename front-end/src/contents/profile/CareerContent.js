/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState } from 'react';
import { FcNext } from '@react-icons/all-files/fc/FcNext';
import { FcPrevious } from '@react-icons/all-files/fc/FcPrevious';
import { PERIOD_CAREER, CAREER } from '../../constants/Career';
import { mq } from '../../constants/MediaQuery';

const careercareerContent = css`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  background: rgba(0, 0, 0, 0.01);
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.03),
    inset 3px 3px 5px rgba(0, 0, 0, 0.03);
`;

const careerContent = css`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 12px;
  width: 100%;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: all 0.5s;
`;

const career = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  div {
    display: flex;
    padding: 0.3rem;
    section {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      padding: 0.5rem;
      h4 {
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.9rem;
        padding: 0.5rem;
        line-height: 1.5rem;
      }
      span {
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.7rem;
        padding: 0.5rem;
        line-height: 1.5rem;
      }
      ul {
        font-size: 0.6rem;
        color: rgba(0, 0, 0, 0.6);
        padding: 0.5rem;
        line-height: 1.5rem;
      }
    }
    &:nth-child(odd) {
      justify-content: flex-start;
    }
    &:nth-child(even) {
      justify-content: flex-end;
    }
  }
`;

const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  height: 120px;
`;

const yearButton = prop => css`
  padding: 0.5rem;
  border: 0;
  background: inherit;
  margin: 0.5rem;
  color: ${prop === true ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)'};
  font-size: ${prop === true ? '1.3rem' : '0.9rem'};
  font-weight: ${prop === true ? '900' : '500'};
  transition: all 1s;
  transform: ${prop === true ? 'translateY(10%)' : 'translateY(-10%)'};
  cursor: pointer;
`;

const moveButton = css`
  display: flex;
  justify-content: center;
  aling-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background: inherit;
  border: 0;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const TOTAL_SLIDE = PERIOD_CAREER.length;

const CareerContent = () => {
  const [slide, setSlide] = useState(1);

  const handleSlide = prop => {
    setSlide(prop);
  };

  const prevButton = () => {
    if (slide === 1) {
      setSlide(TOTAL_SLIDE);
    } else {
      setSlide(slide - 1);
    }
  };

  const nextButton = () => {
    if (slide === TOTAL_SLIDE) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <div
      css={css`
        ${careercareerContent}
        ${mq[2]} {
          width: 80%;
        }
      `}
    >
      <div
        css={css`
          ${buttonContainer}
        `}
      >
        <button type="button" onClick={prevButton} css={moveButton}>
          <FcPrevious />
        </button>
        {PERIOD_CAREER.map(({ key, year }) => {
          return (
            <button
              css={css`
                ${yearButton(slide === key)}
                ${mq[2]} {
                  font-size: ${(slide === key) === true ? '2rem' : '1.5rem'};
                }
              `}
              type="button"
              key={key}
              onClick={() => handleSlide(key)}
            >
              {year}
            </button>
          );
        })}
        <button type="button" onClick={nextButton} css={moveButton}>
          <FcNext />
        </button>
      </div>
      <div css={careerContent}>
        {CAREER.map(({ key, content }) => {
          return slide === key ? (
            <article
              key={key}
              css={css`
                ${career}
                ${mq[2]} {
                  div {
                    section {
                      h4 {
                        font-size: 1.1rem;
                      }
                      span {
                        font-size: 1rem;
                      }
                      ul {
                        font-size: 0.8rem;
                      }
                    }
                  }
                }
              `}
            >
              {content.map(({ period, description, role, detail }) => {
                return (
                  <div key={description}>
                    <section>
                      <h4>{period}</h4>
                      <span>{description}</span>
                      <span>{role}</span>
                      <ul>
                        {detail?.map(data => (
                          <li key={data}>{data}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                );
              })}
            </article>
          ) : (
            ''
          );
        })}
      </div>
    </div>
  );
};

export default CareerContent;
