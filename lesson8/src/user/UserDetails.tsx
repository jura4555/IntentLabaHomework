import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../components/User';
import './userDetails.scss'

const UserDetails: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const { userId } = useParams<{ userId: string }>();

    useEffect(() => {
        fetchUserDetails();
    }, [userId]);

    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to get user');
            }
            const data: { id: number; name: string; email: string } = await response.json();
            const user: User = { id: data.id, name: data.name, email: data.email };
            setUser(user);
        } catch (error) {
            console.error('An error occurred while receiving data:', error);
        }
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-details-container">
            <h2>User Details</h2>
            <p><strong>Id:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
}

export default UserDetails;