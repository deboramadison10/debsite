import React from "react";
import './homePage.css';
import videoBackground from '../assets/homePage_background.mp4';
import aboutImg from '../assets/aboutDeb.svg';
import {FaCss3Alt, FaHtml5, FaJsSquare, FaPaintBrush, FaReact, FaVuejs} from "react-icons/fa";
import {SiTailwindcss, SiFlask, SiGodotengine} from "react-icons/si";
import Footer from "./footer.jsx";

const HomePage = () => {
    return (
        <div id="homePage" className="homePage">
            <video className="videoBackground" autoPlay muted>
                <source src={videoBackground} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1>Deb's site</h1>
                <p>My digital portfolio!</p>
            </div>
            <div className="secondSlide">
                <div className={"contentText"}>
                    <h1>Hi, I'm Deb! </h1>
                    <p>I recently graduated in May 2025 with a degree in Computer Science from Missouri University of
                        Science and Technology.</p>
                    <p>I have a deep passion for web and graphic design, and I aspire to become a front-end developer,
                        creating beautifully crafted and creative websites. </p>
                    <p>In my free time, I enjoy spending quality moments with my family, traveling, and capturing
                        memories with my film cameras.</p>
                    <button
                        className="button-77"
                        role="button"
                        onClick={() => {
                            const el = document.getElementById("contact");
                            if (el) el.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        Contact Me
                    </button>
                </div>
                <img src={aboutImg} alt="aboutImg"/>
            </div>
            <div id="projects" className="projects">
                <div className="carouselSlide">
                    <h1>Projects</h1>
                    <div className="carouselContainer">
                        <div className="carouselItem">
                            <h2>Office Resource Booking</h2>
                            <p>Led the design and implementation of the frontend and user interface for a web-based
                                office resource booking</p>
                            <a
                                href="https://github.com/deboramadison10/Office-Resource-Booking-System"
                                target="_blank"
                                rel="noreferrer"
                                className="button-77"
                            >
                                Check Repo
                            </a>
                            <div className="techIcons">
                                <FaHtml5 title="HTML5" size={24}/>
                                <FaCss3Alt title="CSS3" size={24}/>
                                <FaJsSquare title="JavaScript" size={24}/>
                                <FaVuejs title="Vue.js" size={24}/>
                            </div>
                        </div>
                        <div className="carouselItem">
                            <h2>Boeing Search Simulator</h2>
                            <p>Designed and developed the entire frontend and UI/UX for an air-to-ground search
                                simulation website, including a
                                custom Game Boy-style interface to visualize and compare search algorithms
                                interactively.
                            </p>
                            <a
                                href="https://github.com/CS4091/TEAM_N"
                                target="_blank"
                                rel="noreferrer"
                                className="button-77"
                            >
                                Check Repo
                            </a>
                            <div className="techIcons">
                                <FaHtml5 title="HTML5" size={24}/>
                                <FaCss3Alt title="CSS3" size={24}/>
                                <FaJsSquare title="JavaScript" size={24}/>
                                <FaReact title="React" size={24}/>
                                <SiTailwindcss title="Tailwind CSS" size={24}/>
                            </div>
                        </div>
                        <div className="carouselItem">
                            <h2>Gamora's Pup-venture</h2>
                            <p>- Best Retro Project Winner at Missouri S&T PickHacks 2025 - </p>
                            <p> Developed a side-scrolling game created with Godot and Piskel in which players guide a
                                corgi through agility tasks to obtain badges.</p>
                            <a
                                href="https://devpost.com/software/gamora-s-pup-venture"
                                target="_blank"
                                rel="noreferrer"
                                className="button-77"
                            >
                                Check Devpost
                            </a>
                            <div className="techIcons">
                                <SiGodotengine title="Godot Engine" size={24}/>
                                <FaPaintBrush title="Piskel (Pixel Art)" size={24}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer" style={{paddingTop: '60px'}}>
                <Footer/>
            </div>
        </div>
    );
};

export default HomePage;
