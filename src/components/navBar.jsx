import React from 'react';
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                {/*<span className="logo-icon">✨</span>*/}
                <span className="logo-text">DM</span>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/leadership">Leadership</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
