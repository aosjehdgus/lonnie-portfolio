/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import useProfile from '../../swr/useProfile';

const AboutContent = () => {
  const { name, university, github, blog } = useProfile();

  return (
    <>
      <p>{name}</p>
      <p>{github}</p>
      <p>{blog}</p>
    </>
  );
};

export default AboutContent;
