/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { FRONT_SKILL, BACK_SKILL, CLOUD_SKILL } from '../../constants/Skill';

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
  svg {
    width: 2rem;
    height: 2rem;
  }
  div {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    h3 {
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.2rem;
    }
    ul {
      li {
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.7);
        margin-top: 0.2rem;
      }
    }
  }
`;

const SkillContent = () => {
  const { isLoading } = useProfile();

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={skillContentContainer}>
      <section>
        {FRONT_SKILL.map(({ name, description, proficiency, icon }) => {
          return (
            <article css={skillContentWrapper} key={name}>
              {icon}
              <div>
                <h3>{name}</h3>
                <ul>
                  <li>{description}</li>
                  <li>{proficiency}</li>
                </ul>
              </div>
            </article>
          );
        })}
      </section>
      <section>
        {BACK_SKILL.map(({ name, description, proficiency, icon }) => {
          return (
            <article css={skillContentWrapper} key={name}>
              {icon}
              <div>
                <h3>{name}</h3>
                <ul>
                  <li>{description}</li>
                  <li>{proficiency}</li>
                </ul>
              </div>
            </article>
          );
        })}
      </section>
      <section>
        {CLOUD_SKILL.map(({ name, description, proficiency, icon }) => {
          return (
            <article css={skillContentWrapper} key={name}>
              {icon}
              <div>
                <h3>{name}</h3>
                <ul>
                  <li>{description}</li>
                  <li>{proficiency}</li>
                </ul>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default SkillContent;
