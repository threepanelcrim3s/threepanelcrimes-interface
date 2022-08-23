import React, { useEffect, useState } from "react";
import MintComponent from "../components/MintComponent";
import "./redirectpage.css";
import Lottie from "react-lottie";
import animationData from "../assets/24344-retro-loading-bar";
import Typed from "react-typed";

function RedirectPage(props) {
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
      <div className="hero">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  } else {
    return (
      <div className="hero">
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title">
                <Typed
                  strings={["ACCESS GRANTED", "CLAIM YOUR PRIZE"]}
                  loop
                  typeSpeed={75}
                  backSpeed={50}
                  backDelay={1000}
                />
              </h1>
              <MintComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RedirectPage;
