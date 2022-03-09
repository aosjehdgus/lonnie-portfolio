/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const IMG = css`
  width: 100%;
  height: 70vh;
`;

const Slide = ({ img }) => {
  return <img css={IMG} src={img} alt={img} />;
};

export default Slide;
