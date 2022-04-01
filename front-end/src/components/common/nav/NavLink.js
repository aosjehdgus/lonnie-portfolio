import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ item }) => {
  return <Link to={item.path}>{item.title}</Link>;
};

NavLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

NavLink.defaultProps = {
  item: {},
};

export default NavLink;
