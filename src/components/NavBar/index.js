import React from 'react';
import NavLink from '../NavLink';

const NavBar = () => (
    <nav>
        <NavLink>Home</NavLink>
        <NavLink to="/all-songs">All Songs</NavLink>
        <NavLink to="/tags">Tags</NavLink>
        <NavLink to="/authors">Authors</NavLink>
    </nav>
);

export default NavBar;