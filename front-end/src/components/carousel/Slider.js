/* eslint-disable react/prop-types */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import Slide from './Slide';

const Container = css`
  width: 60%;
  overflow: hidden;
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
  justify-content: space-between;
  position: absolute;
  top: 42%;
  transform: translateY(50%);
  z-index: 1;
  width: 100%;
`;

const SliderButton = css`
  all: unset;
  padding: 0.5rem;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TOTAL_SLIDE = 6;

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
      <div css={SliderButtonContainer}>
        <button type="button" onClick={prevSlide} css={SliderButton}>
          <FcPrevious />
        </button>
        <button type="button" onClick={nextSlide} css={SliderButton}>
          <FcNext />
        </button>
      </div>
      <div css={SliderContainer} ref={slideRef}>
        {project.map(
          ({ key, title, icon, image, description, period, development }) => {
            return (
              <Slide
                key={key}
                title={title}
                icon={icon}
                image={image}
                description={description}
                period={period}
                development={development}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default Slider;
