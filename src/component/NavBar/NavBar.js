import { NavLink } from "react-router-dom";

import "./NavBar.css"

const NavBar = () => {
    return <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
}
export default NavBar;