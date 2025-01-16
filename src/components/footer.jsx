import React from 'react';
import './footer.css';
import githubLogo from "../assets/github-logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Proudly Developed by Me, Myself, and I</p>
            <div>
                {/*<div className="contact-info">*/}
                {/*    <h1>CONTACT</h1>*/}
                {/*    <p>Email: debmadison10@gmail.com</p>*/}
                {/*    <p>Discord: debae10</p>*/}
                {/*</div>*/}
                {/*<div className="connect-info">*/}
                {/*    <h1>CONNECT</h1>*/}
                {/*    <a href="https://github.com/deboramadison10">*/}
                {/*        <img src={githubLogo} alt="GitHub Logo"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </footer>
    );
};

export default Footer;
