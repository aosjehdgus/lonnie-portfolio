/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import Slide from './Slide';
import ReactLogo from '../../../asset/react.svg';
import ReduxLogo from '../../../asset/redux.svg';
import ReduxSagaLogo from '../../../asset/redux-saga.svg';
import WebpackLogo from '../../../asset/webpack.svg';
import NestJsLogo from '../../../asset/nestjs.svg';

const Container = css`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
  position: relative;
`;

const SliderContainer = css`
  width: 100%;
  display: flex;
`;

const SliderButton = css`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const TOTAL_SLIDE = 5;

const Slider = () => {
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
      {currentSlide}
      <div css={SliderContainer} ref={slideRef}>
        <Slide img={ReactLogo} />
        <Slide img={ReduxLogo} />
        <Slide img={ReduxSagaLogo} />
        <Slide img={WebpackLogo} />
        <Slide img={NestJsLogo} />
      </div>
      <button type="button" onClick={prevSlide} css={SliderButton}>
        Previous Slide
      </button>
      <button type="button" onClick={nextSlide} css={SliderButton}>
        Next Slide
      </button>
    </div>
  );
};

export default Slider;
