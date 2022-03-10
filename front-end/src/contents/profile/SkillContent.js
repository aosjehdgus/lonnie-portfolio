/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { SKILL } from '../../constants/Skill';
import { mq } from '../../constants/MediaQuery';

const skillContentContainer = css`
  display: flex;
  justify-content: space-around;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  background: #f8f9fa;
  width: 60%;
  article {
    display: flex;
    padding: 0.5rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const skillContentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 160px;
  img {
    width: 1.5rem;
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
      font-size: 1rem;
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
      width: 100%;
    }
    progress[value]::-webkit-progress-value {
      background-image: linear-gradient(to left, #2ecc71, #3498db);
    }
    label {
      font-size: 0.8rem;
      margin-top: 0.1rem;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const SkillContent = () => {
  return (
    <div
      css={css`
        ${skillContentContainer}
        ${mq[4]} {
          img {
            width: 2rem;
          }
          h3 {
            color: rgba(0, 0, 0, 0.7);
            font-size: 1.2rem;
            margin-bottom: 0.4rem;
          }
          label {
            font-size: 0.9rem;
          }
        }
      `}
    >
      <article>
        {SKILL.map(({ icon, name, proficiency }) => {
          return (
            <section css={skillContentWrapper} key={name}>
              {icon}
              <div>
                <h3>{name}</h3>
                <progress id="proficiency" value={proficiency} max="100" />
                <label htmlFor="proficiency">숙련도 : {proficiency} %</label>
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
};

export default SkillContent;
