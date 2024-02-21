import React, { useState } from 'react';
import { RegistrationUser } from '../components/RegistrationUser';
import { Link } from 'react-router-dom';
import './registration.scss'

const Registration: React.FC = () => {
    const [username, setUsername] = useState('');

    const handleRegister = () => {
        const existingUsers = JSON.parse(localStorage.getItem('RegistrationUsers') || '[]');
        const newUser: RegistrationUser = { username};
        existingUsers.push(newUser);
        localStorage.setItem('RegistrationUsers', JSON.stringify(existingUsers));
    };

    return (
        <div className='registration-form'>
            <h2>Registration</h2>
            <label>
                Username:
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </label>
            <Link to={'/'}>
                <button onClick={handleRegister}>Register</button>
            </Link>
        </div>
    );

}

export default Registration;