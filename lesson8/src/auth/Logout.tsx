import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './logout.scss'


const Logout: React.FC = () => {

    const handleLogout = () => {
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
    };

    return (
        <div className='logout-form'>
            <h2>Logout</h2>
            <Link to={'/'}>
                <button onClick={handleLogout}>Logout</button>
            </Link>
        </div>
    );
}

export default Logout;