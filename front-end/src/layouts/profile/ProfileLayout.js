/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px),
  }
  to {
    opacity: 1;
  }
`;

const tawnyOrange = 'rgb(211, 128, 111)';

const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 140px);
  padding: 1rem;
  div {
    animation: ${fadeIn} 1s;
  }
`;

const profileContentTitle = css`
  font-size: 2rem;
  padding: 1rem 0.7rem 1rem 0.7rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: ${tawnyOrange};
  color: white;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const ProfileLayout = ({ title, content }) => {
  return (
    <div css={profileContainer}>
      <h1 css={profileContentTitle}>{title}</h1>
      {content}
    </div>
  );
};

ProfileLayout.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.shape.isRequired,
};

export default ProfileLayout;
