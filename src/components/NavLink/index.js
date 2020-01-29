import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NavLink = ({ to }) => (
    <Link to={to}>Hello</Link>
);

NavLink.propTypes = {
    to: PropTypes.string.isRequired
};

NavLink.defaultProps = {
    to: '/'
};

export default NavLink;
