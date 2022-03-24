/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react';
import { css, jsx, keyframes } from '@emotion/react';
import { mq } from '../../constants/MediaQuery';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
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
    animation: ${fadeIn} 1s ease-in-out;
  }
`;
const profileContentTitle = prop => css`
  font-size: 1.5rem;
  padding: 1rem 0.7rem 1rem 0.7rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: ${prop === 'About'
    ? 'rgba(255, 227, 115)'
    : prop === 'Archive'
    ? 'rgba(252, 156, 84)'
    : prop === 'Skill'
    ? 'rgba(253, 94, 83)'
    : prop === 'Career'
    ? 'rgba(75, 61, 96)'
    : prop === 'Project'
    ? 'rgba(21, 40, 82) '
    : ''};
  color: white;
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.03),
    inset 3px 3px 5px rgba(0, 0, 0, 0.03);
  position: relative;
`;

const ProfileLayout = ({ title, content }) => {
  const [showElement, setShowElement] = useState(true);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    let mounted = true;
    window.addEventListener('scroll', () => {
      if (mounted) {
        const scroll = scrollRef.current.getBoundingClientRect();
        setShowElement(scroll.top <= 945);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [scrollRef.current]);

  return (
    <div css={profileContainer(title)} ref={scrollRef}>
      {showElement && (
        <>
          <h1
            css={css`
              ${profileContentTitle(title)}
              ${mq[2]} {
                font-size: 2rem;
              }
            `}
          >
            {title}
          </h1>
          {content}
        </>
      )}
    </div>
  );
};

export default ProfileLayout;
