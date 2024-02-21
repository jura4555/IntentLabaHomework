import { Outlet, Navigate, Route } from "react-router";

const PrivateRoute: React.FC = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') || false;
    const isLoggedIn = isAuthenticated ? JSON.parse(isAuthenticated) : false;

    return (
        isLoggedIn ? <Outlet /> : <Navigate to = "/login"/>
    );
}

export default PrivateRoute;