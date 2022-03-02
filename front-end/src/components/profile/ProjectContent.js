/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import moment from 'moment';
import useProfile from '../../swr/useProfile';
import Spinner from '../common/controls/spinner';

const aboutContentWrapper = css`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: calc(100% - 11rem);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
`;

const aboutArticleWrapper = css`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
`;

const aboutSectionWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
`;

const ProjectContent = () => {
  const { profile, isLoading } = useProfile();
  const { name, birth, university, email, github, blog } = profile || {};

  const birthday = moment(birth).format('YYYY.MM.DD');

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={aboutContentWrapper}>
      <header>
        <h2>긍정적 재료로 소통하는 긍정 개발자</h2>
        <p>"안녕하세요. 저는 재료공학 출신 개발자 입니다."</p>
      </header>
      <article css={aboutArticleWrapper}>
        <section css={aboutSectionWrapper}>
          <div>{name}</div>
          <div>{birthday}</div>
          <div>
            {university.name} {university.major}( {university.grade}/
            {university.totalGrade})
          </div>
        </section>
        <section css={aboutSectionWrapper}>
          <div>{email}</div>
          <div>{github}</div>
          <div>{blog}</div>
        </section>
      </article>
    </div>
  );
};

export default ProjectContent;
