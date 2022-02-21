import { Link } from 'react-router-dom';

const NavLink = ({ item }) => {
  return <Link to={item.path}>{item.title}</Link>;
};

export default NavLink;
