import React, { useState } from 'react';
import { RegistrationUser } from '../components/RegistrationUser';
import { Link } from 'react-router-dom';
import './login.scss'

const Login: React.FC = () => {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        const existingUsers: RegistrationUser [] = JSON.parse(localStorage.getItem('RegistrationUsers') || '[]');
        const checkedUser: RegistrationUser = { username };
        const foundUser = existingUsers.find(user => user.username === checkedUser.username );
        if(foundUser){
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <label>
                Username:
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </label>
            <Link to={'/'}>
                <button onClick={handleLogin}>Login</button>
            </Link>
        </div>
    );
}

export default Login;