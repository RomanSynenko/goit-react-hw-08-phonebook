import React from 'react';
import { NavLink } from 'react-router-dom';

import './AuthNavStyle.scss'

const AuthNav = () => {
    return (
        <nav>
            <NavLink
                className="link"
                activeClassName="activeLink"
                to="/register"
                exact
            >
                Register
      </NavLink>
            <NavLink
                className="link"
                activeClassName="activeLink"
                to="/login"
                exact
            >
                Login
      </NavLink>
        </nav>
    );
};

export default AuthNav;