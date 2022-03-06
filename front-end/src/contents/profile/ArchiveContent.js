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
import Spinner from '../../components/common/Spinner';

const aboutContentContainer = css`
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: calc(100% - 11rem);
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  section {
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
  }
`;

const contentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 1);
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
    span {
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.7);
      margin-top: 0.2rem;
    }
    a {
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.7);
      text-decoration: none;
      &:hover {
        font-size: 1.003rem;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

const ArchiveContent = () => {
  const { profile, isLoading } = useProfile();
  // const { name, birth, university, email, github, blog } = profile || {};

  // const birthday = moment(birth).format('YYYY.MM.DD');

  return isLoading ? (
    <Spinner />
  ) : (
    <div css={aboutContentContainer}>
      <section css={contentWrapper}>
        <FaGithub size={45} color="rgba(0, 0, 0, 0.7)" />
        <div>
          <h3>깃허브</h3>
          <span>github.com/aosjehdgus</span>
        </div>
      </section>

      <section css={contentWrapper}>
        <FaClipboardList size={45} color="rgba(0, 0, 0, 0.7)" />
        <div>
          <h3>블로그</h3>
          <span>aosjehdgus.tistory.com</span>
        </div>
      </section>
    </div>
  );
};

export default ArchiveContent;
