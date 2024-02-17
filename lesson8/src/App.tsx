import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import UserList from './user/UserList';
import UserDetails from './user/UserDetails'
import PostList from './post/PostList';
import PostDetails from './post/PostDetails';
import TodoList from './todo/TodoList';
import TodoEdit from './todo/TodoEdit';
import Registration from './auth/Registration';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import Logout from './auth/Logout';
import './app.scss'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className='menu'>
        <NavLink to="/users" >Users</NavLink>
        <NavLink to="/posts" >Posts</NavLink>
        <NavLink to="/todos" >Todos</NavLink>
        <NavLink to="/registration" >Registration</NavLink>
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/logout" >Logout</NavLink>
      </nav>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/edit/:todoId" element={<TodoEdit />} />
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;

