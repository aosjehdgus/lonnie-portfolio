/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px),
  }
  to {
    opacity: 1;
  }
`;

const profileContainer = prop => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-top: 2rem;
  div {
    animation: ${fadeIn} 1s;
  }
  background: ${prop === 'About'
    ? '#e9ecef'
    : prop === 'Archive'
    ? '#dee2e6'
    : prop === 'Skill'
    ? '#e9ecef'
    : prop === 'Career'
    ? '#dee2e6'
    : prop === 'Project'
    ? '#e9ecef'
    : ''};
`;

const profileContentTitle = prop => css`
  font-size: 2rem;
  padding: 1rem 0.7rem 1rem 0.7rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: ${prop === 'About'
    ? '#ffd686'
    : prop === 'Archive'
    ? '#feab83'
    : prop === 'Skill'
    ? '#03c75a'
    : prop === 'Career'
    ? '#639ad3'
    : prop === 'Project'
    ? '#00293b'
    : ''};
  color: white;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const ProfileLayout = ({ title, content }) => {
  return (
    <div css={profileContainer(title)}>
      <h1 css={profileContentTitle(title)}>{title}</h1>
      {content}
    </div>
  );
};

export default ProfileLayout;
