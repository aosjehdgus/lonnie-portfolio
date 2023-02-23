/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { mq } from '../../../constants/MediaQuery';

const ProfileTitle = styled.h1`
  font-size: 1.5rem;
  padding: 1rem 0.7rem 1rem 0.7rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: ${props =>
    props.idx % 2 === 0 ? 'rgba(255, 227, 115)' : 'rgba(0, 0, 0, 0.3)'};
  color: white;
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.2),
    inset 3px 3px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  ${mq[2]} {
    font-size: 2rem;
  }
`;

const _ProfileContatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  div {
    animation: ${fadeIn} 1s ease-in-out;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
  }
`;

const ProfileContatiner = ({ idx, title, content }) => {
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
    <_ProfileContatiner ref={scrollRef}>
      {showElement && (
        <>
          <ProfileTitle idx={idx}>{title}</ProfileTitle>
          {content}
        </>
      )}
    </_ProfileContatiner>
  );
};

export default ProfileContatiner;
