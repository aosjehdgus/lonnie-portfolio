import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FcNext } from '@react-icons/all-files/fc/FcNext';
import { FcPrevious } from '@react-icons/all-files/fc/FcPrevious';
import { ACTIVITY_PERIOD, ACTIVITY } from '../../constants/Activity';
import { mq } from '../../constants/MediaQuery';

const activityContainer = css`
  display: flex;
  width: 80%;
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

const activityContent = css`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 12px;
  width: 100%;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: all 0.5s;
`;

const activity = css`
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
  transform: ${prop === true ? 'translateY(5%)' : 'translateY(-5%)'};
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

const ActivityContents = styled.div`
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
      width: 45%;
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
      p {
        color: rgba(0, 0, 0, 0.5);
        font-size: 0.7rem;
        padding: 0.5rem;
        line-height: 2rem;
      }
    }
    &:nth-of-type(odd) {
      justify-content: flex-start;
    }
    &:nth-of-type(even) {
      justify-content: flex-end;
    }
  }
  ${mq[2]} {
    div {
      section {
        h4 {
          font-size: 1rem;
        }
        span {
          font-size: 0.9rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

const TOTAL_SLIDE = ACTIVITY_PERIOD.length;

const ActivityContent = () => {
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
        ${activityContainer}
        ${mq[2]} {
          width: 60%;
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
        {ACTIVITY_PERIOD.map(({ key, year }) => {
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
      {/* TODO: Detail 에 대한 내용 추가 및 Css 정의 하기  */}
      <div css={activityContent}>
        {ACTIVITY.map(({ key, content }) => {
          return slide === key ? (
            <ActivityContents key={key}>
              {content.map(({ period, description, role }) => {
                return (
                  <div key={description}>
                    <section>
                      <h4>{period}</h4>
                      <span>{description}</span>
                      {role ? <p>{role}</p> : ''}
                    </section>
                  </div>
                );
              })}
            </ActivityContents>
          ) : (
            ''
          );
        })}
      </div>
    </div>
  );
};

export default ActivityContent;
