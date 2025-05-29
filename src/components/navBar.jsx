import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-text">DM</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
