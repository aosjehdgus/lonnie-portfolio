/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navListItem = prop => css`
  padding: 0.5rem;
  margin: 1rem;
  cursor: pointer;
  a {
    color: ${prop === true
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(255, 255, 255, 0.8)'};
    font-size: ${prop === true ? 1.5 : 1.2}rem;
    font-weight: ${prop === true ? 700 : 500};
    text-decoration: none;
  }
  a:hover {
    color: rgba(255, 255, 255);
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
        css={navListItem(selectedIndex === index)}
      >
        {child}
      </li>
    );
  });
};

export default NavList;
