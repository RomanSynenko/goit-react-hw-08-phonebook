import React from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation'
import './Header.scss';
import { authSelector } from '../../redux/auth';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const Header = ({ isAuthenticated }) => {
    return (
        <header className="header-container">
            <Navigation />
            <div className='registerContainer'>
                {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: authSelector.getIsAuthenticated(state),
});


export default connect(mapStateToProps, null)(Header);