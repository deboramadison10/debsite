import './App.css';
import NavBar from './components/navBar.jsx';
import HomePage from './components/homePage.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
)
}

export default App
