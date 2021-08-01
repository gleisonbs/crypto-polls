import React, { useEffect, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import Web3 from 'web3'
import Voting from '../abis/Voting.json';
import Navbar from './Navbar';
import './App.css';


function App() {
  const [account, setAccount] = useState(null);
  
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
  }
  
  return (
    <div className="App">
      <Navbar account={account}/>
    </div>
  );
}

export default App;
