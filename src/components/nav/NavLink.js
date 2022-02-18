/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import NAV_CONFIG from '../../configs/NavConfig';
import { useState, useEffect } from 'react';

const navLinkWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 30px 10px 10px;
`;

const navListItem = (prop) => css`
  padding: 10px;
  margin-left: 15px;
  a {
    color: ${prop === true
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(255, 255, 255, 0.8)'};
    font-size: ${prop === true ? 1.2 : 1}rem;
    font-weight: ${prop === true ? 700 : 500};
    text-decoration: none;
  }
  a:hover {
    color: rgba(255, 255, 255);
    transition: 0.2s;
  }
`;

const NavLink = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();

  const handleNavIndex = (prop) => {
    setSelectedIndex(prop);
  };

  useEffect(() => {
    NAV_CONFIG.map((config, index) => {
      if (location.pathname === config.path) {
        setSelectedIndex(index);
      }
    });
  }, []);

  console.log(selectedIndex);

  return (
    <ul css={navLinkWrapper}>
      {NAV_CONFIG.map((config, index) => {
        const { title, path } = config;
        return (
          <li
            css={navListItem(selectedIndex === index)}
            key={title}
            onClick={() => handleNavIndex(index)}
          >
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLink;
