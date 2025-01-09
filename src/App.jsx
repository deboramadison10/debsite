// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar.jsx';
import HomePage from './components/homePage.jsx';
import Footer from './components/footer.jsx';

const App = () => {
    return(
        <div>
            <div className={"NavBar"}>
                <NavBar/>
            </div>
            <HomePage/>
            <Footer/>
        </div>
    )
}

export default App
