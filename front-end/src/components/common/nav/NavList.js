import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { mq } from '../../../constants/MediaQuery';

const navListItem = prop => css`
  a {
    cursor: pointer;
    margin: 1rem;
    padding: 0.5rem;
    color: ${prop === true ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
    font-size: ${prop === true ? 1.15 : 0.9}rem;
    font-weight: ${prop === true ? 900 : 500};
    text-decoration: none;
  }
  a:hover {
    color: rgba(0, 0, 0);
    transition: 0.2s;
  }
`;

const NavList = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();

  const handleNavIndex = prop => {
    setSelectedIndex(prop);
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    children.map((child, index) => {
      if (child.key === location.pathname) {
        setSelectedIndex(index);
      }
    });
  }, []);

  return children.map((child, index) => {
    return (
      <li
        key={child.key}
        onClick={() => handleNavIndex(index)}
        css={css`
          ${navListItem(selectedIndex === index)}
          ${mq[2]} {
            a {
              cursor: pointer;
              margin: 1rem;
              padding: 0.5rem;
              color: ${(selectedIndex === index) === true
                ? 'rgba(0, 0, 0, 1)'
                : 'rgba(0, 0, 0, 0.8)'};
              font-size: ${(selectedIndex === index) === true ? 1.5 : 1.2}rem;
              font-weight: ${(selectedIndex === index) === true ? 700 : 500};
              text-decoration: none;
            }
            a:hover {
              color: rgba(0, 0, 0);
              transition: 0.2s;
            }
          }
        `}
      >
        {child}
      </li>
    );
  });
};

export default NavList;
