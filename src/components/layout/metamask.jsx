'use client'

import { useEffect, useState } from 'react';

export default function MetaMaskAuth() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error("Error checking if wallet is connected:", error);
      }
    } else {
      console.log("MetaMask not detected");
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {account ? (
        <div>
          <p>Connected account: {account}</p>
        </div>
      ) : (
        <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
