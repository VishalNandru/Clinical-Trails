// src/components/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';
import Navbar from './Navbar';
import '../App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <Router>
            <Navbar onSearch={handleSearch} />
            <div className="container">
                <MainRouter searchTerm={searchTerm} />
            </div>
        </Router>
    );
}

export default App;
