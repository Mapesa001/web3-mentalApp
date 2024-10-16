import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './Home.css';

const Home: React.FC = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [selectedMood, setSelectedMood] = useState<string>('');
    const [moodHistory, setMoodHistory] = useState<string[]>([]);
    const [connectionMessage, setConnectionMessage] = useState<string>(''); // Declare connectionMessage state

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    const accounts = await web3.eth.requestAccounts();
                    setAccount(accounts[0]);
                    setConnectionMessage(`Connected to ${accounts[0]}`);
                } catch (error) {
                    setConnectionMessage("Error connecting to MetaMask. Please try again.");
                    console.error("Error connecting to MetaMask:", error);
                }
            } else {
                setConnectionMessage("Ethereum wallet not found. Please install MetaMask.");
                console.error("Ethereum wallet not found");
            }
        };

        loadWeb3();
    }, []); // Remove the extra useEffect

    const handleMoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMood(e.target.value);
    };

    const handleMoodSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedMood) {
            setMoodHistory([...moodHistory, selectedMood]);
            setSelectedMood('');
        }
    };

    return (
        <div className="home">
            <h1>Welcome to the Mental Health Platform</h1>

            <div className="card">
                <h2>About This App</h2>
                <p>
                    This platform aims to support mental health by providing users with resources, online therapy sessions,
                    community support groups, and wellness workshops. Our goal is to create a safe space for individuals
                    to share their feelings and access helpful information.
                </p>
            </div>

            <div className="mood-section">
                <h2>Track Your Mood</h2>
                <form onSubmit={handleMoodSubmit} className="mood-form">
                    <select value={selectedMood} onChange={handleMoodChange} required>
                        <option value="" disabled>Select your mood</option>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Anxious">Anxious</option>
                        <option value="Excited">Excited</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Calm">Calm</option>
                        <option value="Angry">Angry</option>
                    </select>
                    <button type="submit">Add Mood</button>
                </form>
                <h3>Mood History</h3>
                <ul>
                    {moodHistory.length > 0 ? (
                        moodHistory.map((mood, index) => (
                            <li key={index}>{mood}</li>
                        ))
                    ) : (
                        <li>No mood entries yet.</li>
                    )}
                </ul>
            </div>

            {!account ? (
                <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
                    Connect Wallet
                </button>
            ) : (
                <p>{connectionMessage}</p> // Display connection message here
            )}

            <h2>Our Services</h2>
            <div className="services">
                <div className="service-card">
                    <h3>Online Therapy Sessions</h3>
                    <p>Access professional therapy from the comfort of your home through our secure platform.</p>
                </div>
                <div className="service-card">
                    <h3>Community Support Groups</h3>
                    <p>Join our support groups to connect with others and share your experiences in a safe environment.</p>
                </div>
                <div className="service-card">
                    <h3>Mental Health Resources</h3>
                    <p>Explore a variety of resources to learn more about mental health and wellness.</p>
                </div>
                <div className="service-card">
                    <h3>Wellness Workshops</h3>
                    <p>Participate in workshops that focus on improving mental well-being and resilience.</p>
                </div>
            </div>

            <h2>Helpful Resources</h2>
            <ul>
                <li><a href="https://www.nami.org/">NAMI</a></li>
                <li><a href="https://www.mentalhealth.gov/">MentalHealth.gov</a></li>
                <li><a href="https://www.who.int/mental_health/en/">WHO Mental Health</a></li>
            </ul>
        </div>
    );
};

export default Home;
