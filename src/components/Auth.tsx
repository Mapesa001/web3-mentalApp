import React, { useState } from 'react';
import './Auth.css'; // Import the CSS for styling

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle authentication logic (e.g., integrate with blockchain backend)
        console.log("Submitting:", isLogin ? "Login" : "Register");
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Create an account' : 'Already have an account?'}
            </button>
            <p className="note">Your data is secured with blockchain technology.</p>
        </div>
    );
};

export default Auth;
