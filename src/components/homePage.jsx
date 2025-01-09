import React from "react";
import './homePage.css';
import videoBackground from '../assets/homePage_background.mp4';

const HomePage = () => {
    return (
        <div className="homePage">
            <video className="videoBackground" autoPlay muted>
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1>Hi, I'm Deb</h1>
                <p>Welcome to my website!</p>
            </div>
        </div>
    );
};

export default HomePage;
