/* eslint-disable no-nested-ternary */
import React from 'react';
import { css } from '@emotion/react';
import { mq } from '../../../constants/MediaQuery';

const profileTitle = prop => css`
  font-size: 1.5rem;
  padding: 1rem 0.7rem 1rem 0.7rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: ${prop === 'About'
    ? 'rgba(255, 227, 115)'
    : prop === 'Archive'
    ? 'rgba(0, 0, 0, 0.3)'
    : prop === 'Skill'
    ? 'rgba(255, 227, 115)'
    : prop === 'Activity'
    ? 'rgba(0, 0, 0, 0.3)'
    : prop === 'Project'
    ? 'rgba(255, 227, 115) '
    : ''};
  color: white;
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.2),
    inset 3px 3px 5px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ProfileTitle = ({ title }) => {
  return (
    <h1
      css={css`
        ${profileTitle(title)}
        ${mq[2]} {
          font-size: 2rem;
        }
      `}
    >
      {title}
    </h1>
  );
};

export default ProfileTitle;
