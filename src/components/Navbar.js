
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); 
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 onClick={handleLogoClick} className="navbar-logo">Clinical Trials</h1>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/studies">All Studies</Link>
                </div>
                <input
                    type="text"
                    placeholder="Search studies..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="navbar-search"
                />
            </div>
            
        </nav>
    );
};

export default Navbar;
