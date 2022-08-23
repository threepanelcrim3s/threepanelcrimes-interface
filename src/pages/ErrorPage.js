import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Typed from "react-typed";
import "./errorpage.css";
import { useNavigate } from "react-router-dom";

const Error = ({ pageProps }) => {
  const [displayGlitch, setDisplayGlitch] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const defultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../assets/loading.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="hero-loading">
        {/* <Lottie options={defultOptions} height={400} width={400} /> */}
      </div>
    );
  } else {
    return (
      <div className="hero bg-image error">
        <div className="overlay-itro">
          <button onClick={() => console.log("hello")} className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </button>
        </div>

        <div className="hero-content display-table">
          <div className="table-cell">
            <div>
              <h1 className="hero-title">
                {/* Error, you do not have a required NFT. 
                You can buy one below 👇 */}
                <Typed
                  strings={["ERROR", "NFT NOT DETECTED", "PURCHASE BELOW 👇"]}
                  loop
                  typeSpeed={75}
                  backSpeed={50}
                  backDelay={1000}
                />
              </h1>
              <a
                href="https://opensea.io/threepanelcrimes"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="buyNFT">
                  <h5>Buy</h5>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Error;
