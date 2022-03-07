/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { SKILL } from '../../constants/Skill';
import useProfile from '../../swr/useProfile';
import Spinner from '../../components/common/Spinner';

const skillContentContainer = css`
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: 100%;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  background: #f8f9fa;
  overflow: scroll;
  section {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;

const skillContentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  img {
    width: 2rem;
  }
  div {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    h3 {
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }
    progress[value]::-webkit-progress-bar {
      background-color: whitesmoke;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    progress[value] {
      appearance: none;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
    }
    progress[value]::-webkit-progress-value {
      background-image: linear-gradient(to left, #2ecc71, #3498db);
    }
    label {
      font-size: 0.9rem;
      margin-top: 0.1rem;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const SkillContent = () => {
  const { isLoading } = useProfile();

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={skillContentContainer}>
      {SKILL.map((skills, index) => {
        return (
          <section key={`${skills + index}`}>
            {skills.map(({ name, proficiency, icon }) => {
              return (
                <article css={skillContentWrapper} key={name}>
                  {icon}
                  <div>
                    <h3>{name}</h3>
                    <progress id="proficiency" value={proficiency} max="100" />
                    <label htmlFor="proficiency">
                      숙련도 : {proficiency} %
                    </label>
                  </div>
                </article>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};

export default SkillContent;
