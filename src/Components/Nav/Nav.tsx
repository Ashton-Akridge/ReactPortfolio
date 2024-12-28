import { useState, useEffect } from "react";
import "./Nav.css";

const NavBar = () => {
    const [currentPath, setCurrentPath] = useState<string>("");

    useEffect(() => {
        setCurrentPath(window.location.pathname); // Get the current URL path
    }, []);

    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/" className={currentPath === "/" ? "active" : ""}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" className={currentPath === "/about" ? "active" : ""}>
                        About
                    </a>
                </li>
                <li>
                    <a href="/skills" className={currentPath === "/skills" ? "active" : ""}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="/contact" className={currentPath === "/contact" ? "active" : ""}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;