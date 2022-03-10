/* eslint-disable react/prop-types */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import Slide from './Slide';

const Container = css`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
  position: relative;
`;

const SliderContainer = css`
  width: 100%;
  display: -webkit-box;
  height: 60%;
`;

const SliderButtonContainer = css`
  display: flex;
  height: fit-content;
  justify-content: space-around;
  padding: 1rem;
  position: relative;
`;

const SliderButton = css`
  all: unset;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em 2em;
  border-radius: 20px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TOTAL_SLIDE = 5;

const Slider = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDE);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDE) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div css={Container}>
      <div css={SliderContainer} ref={slideRef}>
        {project.map(
          ({
            key,
            title,
            icon,
            image,
            description,
            period,
            development,
            func,
            github,
          }) => {
            return (
              <Slide
                key={key}
                title={title}
                icon={icon}
                image={image}
                description={description}
                period={period}
                development={development}
                func={func}
                github={github}
              />
            );
          },
        )}
      </div>
      <div css={SliderButtonContainer}>
        <button type="button" onClick={prevSlide} css={SliderButton}>
          <FcPrevious />
        </button>
        <button type="button" onClick={nextSlide} css={SliderButton}>
          <FcNext />
        </button>
      </div>
    </div>
  );
};

export default Slider;
