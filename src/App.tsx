import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import MainPage from './MainPage';
import ComicPage from './ComicPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <HeaderComponent />
                <NavComponent />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/comic" element={<ComicPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
