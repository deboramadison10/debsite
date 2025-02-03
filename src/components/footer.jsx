import React from 'react';
import './footer.css';
import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <h1>CONTACT</h1>
                <p>Email: debmadison10@gmail.com</p>
                <p>Discord: debae10</p>
            </div>
            <div className="trademark">
            <p>Proudly Developed by Me, Myself, and I</p>
            </div>
            <div className="connect-info">
                <h1>CONNECT</h1>
                <div className="logos">
                    <a href="https://github.com/deboramadison10">
                        <img src={githubLogo} alt="githubLogo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/debora-madison-028735210/">
                        <img src={linkedinLogo} alt="linkedinLogo"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
