
import React, { useState,useEffect } from "react";
import "../Assets/videohomestyle.css";
import logo from "../images/logo Lf.png";
import {useLocation, NavLink } from "react-router-dom";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <>
            <nav>
                <img src={logo} alt="letsfamelogo" style={{ width: "200px", height: "40px" }} />
                <ul className={`navitems ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home
                    </NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About us
                    </NavLink></li>
                    <li><NavLink to="/howitsworks" className={({ isActive }) => (isActive ? 'active' : '')}>How its Works
                    </NavLink></li>
                    <li><NavLink to="/plans" className={({ isActive }) => (isActive ? 'active' : '')}>Plans
                    </NavLink></li>
                    <li><NavLink to="/readourblog" className={({ isActive }) => (isActive ? 'active' : '')}>Read Our Blog
                    </NavLink></li>
                    <li>
                        <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
                    FAQ
                    </NavLink>
                    </li>
                    <li><NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active' : '')}>Conatct Us
                    </NavLink></li>
                </ul>
                <div className="menubar" onClick={toggleMenu}><i className="bi bi-list"></i></div>
            </nav>
        </>
    );
}
