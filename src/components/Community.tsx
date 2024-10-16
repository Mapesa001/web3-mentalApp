import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

declare global {
    interface Window {
        ethereum?: any;
    }
}

const Community: React.FC = () => {
    const [proposal, setProposal] = useState<string>('');
    const [account, setAccount] = useState<string | null>(null);
    const [submittedProposals, setSubmittedProposals] = useState<string[]>([
        "Organize a weekly mental health discussion group.",
        "Create a resource list for coping strategies.",
        "Host a webinar with a mental health professional."
    ]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

    const handleProposal = async () => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.requestAccounts();
                setAccount(accounts[0]);

                // Here you would call your smart contract to submit the proposal
                // await yourSmartContract.methods.submitProposal(proposal).send({ from: accounts[0] });
                
                // Simulate the submission
                setSubmittedProposals([...submittedProposals, proposal]);
                setProposal('');
                setSuccessMessage('Proposal submitted successfully!');
            }
        } catch (err) {
            setError('Failed to submit the proposal. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Community Proposals</h2>
            <input
                type="text"
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                placeholder="Submit a proposal"
            />
            <button onClick={handleProposal} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Proposal'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <h3>Submitted Proposals:</h3>
            <ul>
                {submittedProposals.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Community;
