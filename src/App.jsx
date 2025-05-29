import './App.css';
import NavBar from './components/navBar.jsx';
import HomePage from './components/homePage.jsx';
import Footer from './components/footer.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            <div id="projects">
                <carouselSlide/>
            </div>
            <div id="contact">
                <Footer/>
            </div>
        </BrowserRouter>
)
}

export default App
