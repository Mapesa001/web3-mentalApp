import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

declare global {
    interface Window {
        ethereum?: any;
    }
}

const Chatbot: React.FC = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [botResponse, setBotResponse] = useState<string>('');
    const [account, setAccount] = useState<string | null>(null);

    useEffect(() => {
        loadBlockchainData();
    }, []);

    const loadBlockchainData = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);
        } else {
            console.error("Ethereum wallet is not available");
        }
    };

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSend = async () => {
        // Add user's message to chat history
        setChatHistory([...chatHistory, `You: ${message}`]);

        // Default chatbot responses before connecting to the backend
        let defaultBotResponse = '';
        if (message.toLowerCase().includes('hello')) {
            defaultBotResponse = 'Hello! How can I assist you with your mental health today?';
        } else if (message.toLowerCase().includes('feeling sad')) {
            defaultBotResponse = 'I\'m sorry to hear that. Remember, it\'s okay to feel sad sometimes. Want to talk about it?';
        } else if (message.toLowerCase().includes('anxiety')) {
            defaultBotResponse = 'Anxiety can be tough, but deep breaths and grounding exercises might help. Would you like some tips on that?';
        } else if (message.toLowerCase().includes('thank you')) {
            defaultBotResponse = 'You\'re welcome! I\'m here to help whenever you need.';
        } else {
            defaultBotResponse = 'I\'m not sure how to respond to that, but I\'m here to listen!';
        }

        setBotResponse(defaultBotResponse);
        setChatHistory([...chatHistory, `You: ${message}`, `Bot: ${defaultBotResponse}`]);

        // Simulate clearing input after sending
        setMessage('');
    };

    return (
        <div>
            <h2>Mental Health Chatbot</h2>
            <div>
                {chatHistory.map((chat, index) => (
                    <p key={index}>{chat}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={handleMessage}
                placeholder="Type your message"
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chatbot;
