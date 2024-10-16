import React, { useState } from 'react';
import Web3 from 'web3';

const AIComponent: React.FC = () => {
    const [tip, setTip] = useState<string>('');
    const [account, setAccount] = useState<string | null>(null);

    const storeTipOnBlockchain = async (tip: string) => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);
            // Call smart contract here to store the tip.
            // await smartContract.methods.storeTip(tip).send({ from: accounts[0] });
            console.log('Tip stored on the blockchain:', tip);
        } else {
            console.error("Ethereum wallet not found");
        }
    };

    const handleTip = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTip(e.target.value);
    };

    const handleSubmit = () => {
        storeTipOnBlockchain(tip);
    };

    return (
        <div>
            <h2>Get Personalized AI Mental Health Tips</h2>
            <input type="text" value={tip} onChange={handleTip} placeholder="Enter a mental health tip" />
            <button onClick={handleSubmit}>Store on Blockchain</button>
        </div>
    );
};

export default AIComponent;
