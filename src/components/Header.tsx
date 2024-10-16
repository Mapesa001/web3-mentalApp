import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>Mental Health App</h1>
            <div className="header-buttons">
            
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ai">AI Component</Link></li>
                <li><Link to="/auth">Auth</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </div>
    );
};

export default Header;
