// src/components/Web3Component.tsx

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const Web3Component: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.requestAccounts();
        setAccount(accounts[0]);
      } else {
        alert('Please install MetaMask!');
      }
    };

    initWeb3();
  }, []);

  return (
    <div>
      <h2>Your Account: {account}</h2>
    </div>
  );
};

export default Web3Component;
