/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import SkillTitle from './SkillTitle';
import SkillContent from './SkillContent';

const skillWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 140px);
  padding: 1rem;
`;

const Skill = () => {
  return (
    <div css={skillWrapper}>
      <SkillTitle />
      <SkillContent />
    </div>
  );
};

export default Skill;
