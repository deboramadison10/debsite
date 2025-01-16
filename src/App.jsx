import './App.css';
import NavBar from './components/navBar.jsx';
import HomePage from './components/homePage.jsx';
import Footer from './components/footer.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectsPage from "./components/projectsPage.jsx";
import LeadershipPage from "./components/leadershipPage.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/leadership" element={<LeadershipPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
