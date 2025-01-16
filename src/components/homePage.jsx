import React from "react";
import './homePage.css';
import videoBackground from '../assets/homePage_background.mp4';
import aboutImg from '../assets/aboutDeb.svg';

const HomePage = () => {
    return (
        <div className="homePage">
            <video className="videoBackground" autoPlay muted>
                <source src={videoBackground} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1>Deb's site</h1>
                <p>Welcome to my website!</p>
            </div>
            <div className="secondSlide">
                <div className={"contentText"}>
                    <h1>Hi, I'm Deb! </h1>
                    <p>I am a senior graduating in May 2025 with a degree in Computer Science from Missouri University of Science and Technology.</p>
                    <p>I have a deep passion for web and graphic design, and I aspire to become a front-end developer, creating beautifully crafted and creative websites. </p>
                    <p>In my free time, I enjoy spending quality moments with my family, traveling, and capturing memories with my film cameras.</p>
                    <button className="button-77" role="button">Projects</button>
                </div>
                <img src={aboutImg} alt="aboutImg"/>
            </div>
            <div className="thirdSlide">
                <h1>My Skills</h1>
            </div>
        </div>
    );
};

export default HomePage;
