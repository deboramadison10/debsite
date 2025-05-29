import React from 'react';
import './footer.css';
import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg"
import emailLogo from "../assets/emailLogo.svg"
import discordLogo from "../assets/discordLogo.svg"

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="contact-info">
                <h1>CONTACT</h1>
                <div className="logos">
                    <a href="mailto:deboramadison10@gmail.com">
                        <img src={emailLogo} alt="Email Debora Madison"/>
                    </a>
                    <a href="https://discordapp.com/users/debae10">
                        <img src={discordLogo} alt="Email Debora Madison"/>
                    </a>
                </div>
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
