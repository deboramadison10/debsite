import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';

const App = () => {
    return(
        <div>
            <Navbar/>
        </div>
        <div>
            <Home/>
        </div>
    )
}

export default App
