import React, { useEffect, useState } from 'react';
import Web3 from 'web3'
import CryptoPolls from '../abis/CryptoPolls.json';
import Navbar from './Navbar';
import Polls from './Polls';
import './App.css';


function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [account, setAccount] = useState(null);
  const [cryptoPolls, setCryptoPolls] = useState(null);

  
  useEffect(() => {
    loadWeb3()
      .then(() => {
        loadBlockchainData();
      })
  }, [])

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      alert('Ethereum wallet not found');
    }
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();

    if (accounts.length > 0) {
      setAccount(accounts[0]);
    }

    const networkId = await web3.eth.net.getId();
    const networkData = CryptoPolls.networks[networkId];
    if (networkData) {
      const abi = CryptoPolls.abi;
      const address = networkData.address;
      
      const _cryptoPolls = new web3.eth.Contract(abi, address);
      setCryptoPolls(_cryptoPolls);
    }
  }
  
  return (
    <div className="App">
      <Navbar account={account} activeItem={activeItem} setActiveItem={setActiveItem}/>
      { activeItem === 'polls' && cryptoPolls ? <Polls cryptoPolls={cryptoPolls}/> : null }
    </div>
  );
}

export default App;
