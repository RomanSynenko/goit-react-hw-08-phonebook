import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../../redux/auth';
import './NavigationStyle.scss';

const Navigation = ({ isAuthenticated }) => {
    return (
        <nav>
            <NavLink
                className="link"
                activeClassName="activeLink"
                to="/"
                exact
            >
                Home
        </NavLink>
            {isAuthenticated && (<NavLink
                className='link'
                activeClassName='activeLink'
                to="/contacts"
                exact
            >
                Contacts
            </NavLink>
            )}
        </nav>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: authSelector.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);