import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hook/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import "./NavBar.css"

const NavBar = () => {

    const {user} = useAuthValue();

    return <nav className="nav">
        <NavLink to="/">Home</NavLink>
        {!user && (
            <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </>
        )}
        {user && (
            <>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/posts/create">New Post</NavLink>
            </>
        )}
        <NavLink to="/about">About</NavLink>
    </nav>
}
export default NavBar;