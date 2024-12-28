import { NavLink } from "react-router-dom";

import "./Nav.css";

const NavBar = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
