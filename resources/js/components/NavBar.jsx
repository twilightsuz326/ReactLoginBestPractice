import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h1>NavBar</h1>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
        </div>
    );
}

export default NavBar;