import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../components/User';
import './userList.scss'


const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to get data');
      }
      const data: { id: number; name: string; email: string }[] = await response.json();
      const initialUser: User[] = data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email
      }));
      setUsers(initialUser);
    } catch (error) {
      console.error('An error occurred while receiving data:', error);
    }
  }

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <nav>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default UserList;
