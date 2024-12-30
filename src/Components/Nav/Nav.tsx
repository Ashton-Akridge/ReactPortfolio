import {useEffect} from "react";
import {gsap} from "gsap";
import { NavLink} from "react-router-dom";
import "./Nav.css";




const NavBar = () => {
    useEffect(() => {
        // Animation for the widget when the component mounts
        gsap.fromTo('.nav', {opacity: -1, y:30}, {opacity:1, y:0, duration: 1})
        // Animation for the widget when the component mounts
        gsap.fromTo('.home', {opacity: 0}, {opacity:1, ease: "power1.in", duration: 2, delay: 0.5})
        gsap.fromTo('.about', {opacity: 0}, {opacity:1, ease: "power1.in", duration: 2, delay: 0.75})
        gsap.fromTo('.skills', {opacity: 0}, {opacity:1, ease: "power1.in", duration: 2, delay: 1})
        gsap.fromTo('.contact', {opacity: 0}, {opacity:1, ease: "power1.in", duration: 2, delay: 1.25})
    }, []);
    return (
        <nav className="nav">
            <ul>
                <li className="home">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </NavLink>
                </li>
                <li className="about">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                        About
                    </NavLink>
                </li>
                <li className="skills">
                    <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
                        Skills
                    </NavLink>
                </li>
                <li className="contact">
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
