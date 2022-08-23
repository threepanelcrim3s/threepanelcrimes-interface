import contract from "../contracts/NFTCollectible.json";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { sha256 } from "crypto-hash";
import { useNavigate } from "react-router-dom";
import "./nftdetection.css";

const contractAddress = "0xDF27FbDcfC0644d425e1C68539118C8f3A6BbddE";
const abi = contract.abi;

function NftDetection() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const navigate = useNavigate();

  const handleHash = async (key) => {
    const result = await sha256(key);
    localStorage.setItem("key", result);
    console.log("ayeee", localStorage.getItem("key"));
    const regexExp = /^[a-f0-9]{64}$/gi;
    console.log(regexExp.test(localStorage.getItem("key")));
    console.log("HASH", result);
  };

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    // All elements of desiredNFTCollections must be lowercase
    const desiredNFTCollections = [
      "0x159640309cf1e732cff90a3a7c23d3825cd50f5a",
    ];

    if (!ethereum) {
      alert("Please install metamask");
    } else {
      console.log("Wallet Exists");
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      console.log("Found authorized account: ", accounts[0]);
      setCurrentAccount(accounts[0]);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
    }
  };

  const ConnectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install metamask");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found account, address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {}
  };

  const checkNftHandler = async () => {
    const { ethereum } = window;
    // All elements of desiredNFTCollections should be lowercase
    const desiredNFTCollections = [
      "0x159640309cf1e732cff90a3a7c23d3825cd50f5a",
    ];

    if (!ethereum) {
      //  ERORR
      alert("Please install metamask");
    } else {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length !== 0) {
        console.log("Found authorized account: ", accounts[0]);
        setCurrentAccount(accounts[0]);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const options = {
          method: "GET",
          headers: { Accept: "application/json" },
        };
        // REPLACE ADDRESS BELOW WITH accounts[0]
        const ownerAddress = "0x62dE8494185454D1e0Ca800e52633A04Da2BFe67";

        let response = await fetch(
          "https://api.opensea.io/api/v1/assets?owner=" +
            ownerAddress +
            "&order_direction=desc&limit=20&include_orders=false",
          options
        )
          .then((response) => response.json())
          .catch((err) =>
            // ERROR
            console.error("ERROR", err)
          );

        response.assets.forEach((element) => {
          if (
            desiredNFTCollections.includes(
              String(element.asset_contract.address).toLowerCase()
            )
          ) {
            handleHash(element.asset_contract.address);
            console.log("success!");
            // REDIRECT
            navigate("/success");
          } else {
            navigate("/error");
            console.log("no NFT found");
          }
        });
      } else {
        //  ERROR
        navigate("/error");
        console.log("No Address Found");
      }
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={ConnectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };

  const checkNftButton = () => {
    return (
      <button onClick={checkNftHandler} className="cta-button mint-nft-button">
        REDIRECT
      </button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <div className="App">
      {/* <div>{connectWalletButton()}</div> */}
      <div>{checkNftButton()}</div>
    </div>
  );
}

export default NftDetection;
