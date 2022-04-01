/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import ProfileTitle from '../../components/common/main/ProfileTitle';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
  }
`;

const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  div {
    animation: ${fadeIn} 1s ease-in-out;
  }
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
    <div css={profileContainer} ref={scrollRef}>
      {showElement && (
        <>
          <ProfileTitle title={title} />
          {content}
        </>
      )}
    </div>
  );
};

export default ProfileLayout;
