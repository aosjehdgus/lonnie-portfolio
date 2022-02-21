import { Link } from 'react-router-dom';
import React from 'react';

const NavLink = ({ item }) => {
  return <Link to={item.path}>{item.title}</Link>;
};

export default NavLink;
