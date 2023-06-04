import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Intro from './container/Intro/Intro';
import LandingPage from './container/LandingPage/LandingPage';
import SignUp from './container/SignUp/SignUp';
import About from './container/About/About';
import Payment from './container/Payment/Payment';
import Wallet from  './container/wallet/Wallet';
import { Navbar } from './components';
import './App.css';

const App = () => {
  const celoTestnetId = 44787;

  const [walletAvailable, setWalletAvailable] = useState(true);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");

  useEffect(() => {
    const checkWeb3Wallet = () => {
      if (!window.ethereum) setWalletAvailable(false);
      else setWalletAvailable(true);
    };

    checkWeb3Wallet();
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) setWalletAvailable(false);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts);
      setConnected(true);
    } catch (error) {
      setConnected(false);
    }
  };
  return (
  <>
  {/* <div>
    <LandingPage />
    { <About/> }
    {<Intro/>}
    {<Wallet/>}
  </div> */}
    <Routes>
      
      <Route path="register" element={<SignUp/>}/>
      <Route path="register/about/hire-creatives" element={<Intro/>}/>
      <Route path="connect-wallet" element={<Wallet/>}/>

      <Route path="register/about" element={<About/>}/>

      {/* <Route path="*" element={<LandingPage />} /> */}

      </Routes></>
  
  );
};

export default App;
