/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import AboutTitle from './AboutTitle';
import AboutContent from './AboutContent';

const aboutWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 140px);
  padding: 1rem;
`;

const About = () => {
  return (
    <div css={aboutWrapper}>
      <AboutTitle />
      <AboutContent />
    </div>
  );
};

export default About;
