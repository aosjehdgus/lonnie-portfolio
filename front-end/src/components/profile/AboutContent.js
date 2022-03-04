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
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  header {
    h2 {
      padding: 1rem;
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.7);
    }
    p {
      padding: 1rem;
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  article {
    display: flex;
    padding: 0.5rem;
    width: 100%;
    justify-content: space-between;
    section {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      justify-content: space-between;
    }
  }
`;

const contentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    h3 {
      padding: 1rem;
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.2rem;
    }
    span {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.7);
    }
    a {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.7);
      text-decoration: none;
      &:hover {
        font-size: 1.003rem;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

const AboutContent = () => {
  const { profile, isLoading } = useProfile();
  // const { name, birth, university, email, github, blog } = profile || {};

  // const birthday = moment(birth).format('YYYY.MM.DD');

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={aboutContentContainer}>
      <header>
        <h2>긍정적 재료로 소통하는 긍정 개발자</h2>
        <p>
          "안녕하세요. 저는 재료공학 출신 프론트 엔드 개발자 김동현 입니다."
        </p>
      </header>
      <article>
        <section>
          <div css={contentWrapper}>
            <FaUser size={45} color="rgba(0, 0, 0, 0.7)" />
            <div>
              <h3>이름</h3>
              {/* <span>{name}</span> */}
            </div>
          </div>
          <div css={contentWrapper}>
            <FaBirthdayCake size={45} color="rgba(0, 0, 0, 0.7)" />
            <div>
              <h3>생년월일</h3>
              {/* <span>{birthday}</span> */}
            </div>
          </div>
        </section>
        <section>
          <div css={contentWrapper}>
            <FaUniversity size={45} color="rgba(0, 0, 0, 0.7)" />
            <div>
              <h3>학력</h3>
              <span>{/* {university.name} {university.major} */}</span>
              {/* <span>
                {university.grade}/{university.totalGrade}
              </span> */}
            </div>
          </div>
          <div css={contentWrapper}>
            <MdEmail size={45} color="rgba(0, 0, 0, 0.7)" />
            <div>
              <h3>이메일</h3>
              {/* <a href="mailto:kdhsea@gmail.com">{email}</a> */}
            </div>
          </div>
        </section>
        <section>
          <div css={contentWrapper}>
            <FaGithub size={45} color="rgba(0, 0, 0, 0.7)" />
            <div>
              <h3>깃허브</h3>
              {/* <a href={`https://${github}`} target="_blank" rel="noreferrer">
                {github}
              </a> */}
            </div>
          </div>
          <div css={contentWrapper}>
            <FaClipboardList size={45} color="rgba(0, 0, 0, 0.7)" />
            <div>
              <h3>블로그</h3>
              {/* <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                {blog}
              </a> */}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AboutContent;
