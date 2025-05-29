import React from 'react';
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-text">DM</span>
            </div>
            <nav className="nav">
                <a href="#homePage" className="nav-link">Home</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#footer" className="nav-link">Contact</a>
            </nav>
        </nav>
    );
};

export default NavBar;
