import React, { useState, useEffect } from 'react';
import '../SignIn'
import '../SignIn/SignIn.css'
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [account, setAccount] = useState('');
  const navigate=useNavigate()


  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {

   const accounts =   window.ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            if (accounts.length > 0) {
             
              const connectedAddress = accounts[0];
              console.log('Navigating to /header');
              navigate(`/home`);
            }
          })
          .catch((error) => {
            console.error('Error connecting to MetaMask:', error);
          });
      } else {
        console.error('MetaMask is not installed or accessible.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    
    
    <div className="signin-container">
    <h1 className='title'>NFT MARKETPLACE</h1><br/>
      {account ? (
        <p><b>Connected: {account}</b></p>
      ) : (
        <button className="signin-button" onClick={connectToMetaMask}>
         MetaMask 
        </button>
        
      )}
      <h5 className='Click'>Click here to Login</h5>
    </div>
    
  );
};

export default SignIn;