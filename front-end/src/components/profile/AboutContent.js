/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import moment from 'moment';
import {
  FaUser,
  FaUniversity,
  FaBirthdayCake,
  FaGithub,
  FaClipboardList,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import useProfile from '../../swr/useProfile';
import Spinner from '../common/controls/spinner';

const aboutContentContainer = css`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: calc(100% - 11rem);
  // background: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 0.5rem;
`;

const aboutArticleContainer = css`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  justify-content: space-between;
`;

const aboutSectionWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-between;
`;

const contentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem;
`;

const textWrapper = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.7);
`;

const textTitle = css`
  padding: 1rem;
  font-size: 1.2rem;
`;

const headerTitle = css`
  padding: 1rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.7);
`;

const headerContent = css`
  padding: 1rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);
`;

const AboutContent = () => {
  const { profile, isLoading } = useProfile();
  const { name, birth, university, email, github, blog } = profile || {};

  const birthday = moment(birth).format('YYYY.MM.DD');

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={aboutContentContainer}>
      <header>
        <h2 css={headerTitle}>긍정적 재료로 소통하는 긍정 개발자</h2>
        <p css={headerContent}>
          "안녕하세요. 저는 재료공학 출신 개발자 입니다."
        </p>
      </header>
      <article css={aboutArticleContainer}>
        <section css={aboutSectionWrapper}>
          <div css={contentWrapper}>
            <FaUser size={45} color="rgba(0, 0, 0, 0.7)" />
            <div css={textWrapper}>
              <h3 css={textTitle}>이름</h3>
              <span>{name}</span>
            </div>
          </div>
          <div css={contentWrapper}>
            <FaBirthdayCake size={45} color="rgba(0, 0, 0, 0.7)" />
            <div css={textWrapper}>
              <h3 css={textTitle}>생년월일</h3>
              <span>{birthday}</span>
            </div>
          </div>
        </section>
        <section css={aboutSectionWrapper}>
          <div css={contentWrapper}>
            <FaUniversity size={45} color="rgba(0, 0, 0, 0.7)" />
            <div css={textWrapper}>
              <h3 css={textTitle}>학력</h3>
              <span>
                {university.name} {university.major}
              </span>
              <span>
                {university.grade}/{university.totalGrade}
              </span>
            </div>
          </div>
          <div css={contentWrapper}>
            <MdEmail size={45} color="rgba(0, 0, 0, 0.7)" />
            <div css={textWrapper}>
              <h3 css={textTitle}>이메일</h3>
              <span>{email}</span>
            </div>
          </div>
        </section>
        <section css={aboutSectionWrapper}>
          <div css={contentWrapper}>
            <FaGithub size={45} color="rgba(0, 0, 0, 0.7)" />
            <div css={textWrapper}>
              <h3 css={textTitle}>깃허브</h3>
              <span>{github}</span>
            </div>
          </div>
          <div css={contentWrapper}>
            <FaClipboardList size={45} color="rgba(0, 0, 0, 0.7)" />
            <div css={textWrapper}>
              <h3 css={textTitle}>블로그</h3>
              <span>{blog}</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AboutContent;
