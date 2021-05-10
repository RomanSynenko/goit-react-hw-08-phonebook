import React from 'react';
import { connect } from 'react-redux';
import { authSelector, authOperation } from '../../../redux/auth';

import './UserMenuStyle.scss'

const UserMenu = ({ name, logOut }) => {
    return (
        <div className="logout-container">
            <span className='welcone-text'>Welcome {name} </span>
            <button className="logout-button" type="button" onClick={logOut}>
                Log out
        </button>
        </div>
    );
};

const mapStateToProps = state => ({
    name: authSelector.getUserName(state),
});

const mapDispatchToProps = {
    logOut: authOperation.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);