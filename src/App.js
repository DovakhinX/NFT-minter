import NFT from "./artifacts/contracts/NFT.sol/NFT.json";
import { ethers } from "ethers";
import React, { useState } from "react";
import "./App.css";
import Navbar from "../src/Components/Navbar";

function App() {
  let [qty, setqty] = useState(1);
  let address = "paste deployed address here ";
  let account = null;

  ////////////////////////////////
  async function connect() {
    if (window.ethereum) {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let accounts = await provider.send("eth_requestAccounts", []);
      let account = accounts[0];
      document.getElementById("acc").textContent = account;
    }
  }

  async function mint() {
    if (typeof window.ethereum !== "undefined") {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let accounts = await provider.send("eth_requestAccounts", []);
      let account = accounts[0];
      let signer = provider.getSigner();
      let contract = new ethers.Contract(address, NFT.abi, signer);
      let txn = await contract.mint(account, qty);
      await txn.wait();
    }
  }

  return (
    <div className="App">
      <Navbar />
      <br/>
        <button onClick={connect}>Connect</button>
        <h4>
          Account:<span id="acc"></span>
        </h4>
        <input
          type="text"
          placeholder="enter the qty"
          value={qty}
          onChange={(e) => {
            setqty(e.target.value);
          }}
        />
        
        <br/>
        <span>(Max 2 per transaction)</span>

        <br />
        <br />

        <button onClick={mint}>Mint</button>
      </div>
  );
}

export default App;
