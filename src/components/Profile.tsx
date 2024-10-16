import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const Profile: React.FC = () => {
    const [account, setAccount] = useState<string | null>(null);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.requestAccounts();
                setAccount(accounts[0]);
            }
        };

        loadWeb3();
    }, []);

    return (
        <div>
            <h2>Your Profile</h2>
            {account ? <p>Connected Account: {account}</p> : <p>Please connect your wallet.</p>}
            <h3>Your Achievements</h3>
            {/* Display milestones/achievements retrieved from blockchain */}
        </div>
    );
};

export default Profile;
