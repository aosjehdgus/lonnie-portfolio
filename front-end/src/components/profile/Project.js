/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import ProjectTitle from './ProjectTitle';
import ProjectContent from './ProjectContent';

const projectWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 140px);
  padding: 1rem;
`;

const Project = () => {
  return (
    <div css={projectWrapper}>
      <ProjectTitle />
      <ProjectContent />
    </div>
  );
};

export default Project;
