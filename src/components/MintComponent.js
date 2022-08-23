import contract from "../contracts/NFTCollectible.json";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0xDF27FbDcfC0644d425e1C68539118C8f3A6BbddE";
const abi = contract.abi;

function MintComponent() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const MintNFTHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install metamask");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, abi, signer);

      console.log("Initialize Payment");
      let nftTxn = await nftContract.mintNFTs(1, {
        value: ethers.utils.parseEther("0.01"),
      });
      console.log("Mining... please wait");
      await nftTxn.wait();

      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
      );
      console.log("CURR", currentAccount);
    } catch (err) {
      console.log("ERROR MINTING", err);
    }
  };

  const mintNftButton = () => {
    return (
      <button onClick={MintNFTHandler} className="cta-button mint-nft-button">
        CLAIM
      </button>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const { ethereum } = window;
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        console.log("use Effect success");
      } catch (err) {
        console.log("MintComponent Error", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="mint-nft-container">
        <div>{mintNftButton()}</div>
      </div>
    </div>
  );
}

export default MintComponent;
