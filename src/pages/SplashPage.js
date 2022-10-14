import React from "react";
import NftDetection from "../components/NftDetection";
import "./splashpage.css";
import "./bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import SplashCards from "../components/SplashCards";
import Threepanel from "../assets/threepanel.png";
import Pepe from "../assets/pepe.png";
import Skull from "../assets/skull.png";
import Wave from "../assets/wave.png";
import Hug from "../assets/hug.png";

function SplashPage(props) {
  const navigate = useNavigate();

  const easterEggUrl = () => {
    const url = "https://3-panel-crimes.vercel.app/";
    //open new tab
    window.open(url, "_blank");
  };

  return (
    <>
      <section id="hero-banner">
        <div className="banner-inner">
          <div className="container"></div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="hero-title">THREE PANEL CRIMES</h2>
            </div>
          </div>
          <div className="row">
            <div className="features">
              <div
                className="col-md-4 col-sm-6 wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="0ms"
              >
                <a
                  href="https://twitter.com/3panelcrimes?s=20&t=7_V_4NtFw7sNqFNd5B2mVA"
                  className="hover"
                >
                  <SplashCards title="TWITTER" image={Skull} />
                </a>
                {/* <NftDetection /> */}
              </div>
              <div
                className="col-md-4 col-sm-6 wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="100ms"
              >
                <a
                  href="https://deca.art/threepanelcrimes/collections"
                  className="hover"
                >
                  <SplashCards title="DECA" image={Wave} />
                </a>
                {/* <div className="media service-box">
                  <div className="pull-left">
                    <i className="fa fa-compass"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Buy NFT</h4>
                    <p className="media-para">
                      Don't have a Three Panel Crime NFT? No worries, you can
                      buy one from opensea.io right here!
                    </p>
                    <button className="info-button">Buy</button>
                  </div>
                </div> */}
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="200ms"
              >
                <a href="https://discord.gg/MBdWJXdphq" className="hover">
                  <SplashCards title="DISCORD" image={Hug} />
                </a>
                {/* <div className="media service-box">
                  <div className="pull-left">
                    <i className="fa fa-database"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Info</h4>
                    <p className="media-para">
                      Morbi vitae tortor tempus, placerat leo et, suscipit
                      lectus. Phasellus ut euismod massa, eu
                    </p>
                    <button className="info-button">Info</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="bottom-right">
            <a href="https://3-panel-crimes.vercel.app/" target="_blank">
              <img src={Pepe} alt="threepanel" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default SplashPage;
