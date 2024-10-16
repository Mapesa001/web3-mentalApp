import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AIComponent from './components/AIComponent';
import Auth from './components/Auth';
import Chatbot from './components/Chatbot';
import Community from './components/Community';
import Profile from './components/Profile';
import Resources from './components/Resources';

const App: React.FC = () => {
    return (
        <Router>
            <Header /> {/* Ensure this is only here once */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai" element={<AIComponent />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/community" element={<Community />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </Router>
    );
};

export default App;
