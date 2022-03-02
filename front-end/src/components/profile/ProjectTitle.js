/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const tawnyOrange = 'rgb(211, 128, 111)';

const contentTitle = css`
  font-size: 2rem;
  padding: 1rem 0.7rem 1rem 0.7rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: ${tawnyOrange};
  color: white;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);
`;

const ProjectTitle = () => {
  return <h1 css={contentTitle}>Project</h1>;
};

export default ProjectTitle;
