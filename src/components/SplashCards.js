import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import {
  Card,
  CardBody,
  CardImage,
  CardSubtitle,
} from "@progress/kendo-react-layout";
import Threepanel from "../assets/threepanel.png";

const SplashCards = (props) => {
  return (
    <Card
      style={{
        backgroundColor: "#472E48",
        boxShadow: "0px 0px 25px rgba(0,0,0,0.2)",
        width: "360px",
        borderRadius: "7px",
        marginTop: "15px",
      }}
    >
      <div style={{ margin: "20px auto" }}>
        <CardImage
          src={props.image}
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "rgba(0,0,0,0.0)",
            borderRadius: "7px",
          }}
        />
        <CardBody
          style={{ padding: "0", margin: "10px 0px", textAlign: "center" }}
        >
          <p style={{ color: "white", fontWeight: "bold" }}>{props.title}</p>
          <p
            style={{
              color: "#ffffff",
              width: "300px",
              fontWeight: "bold",
            }}
          >
            {props.description}
          </p>
        </CardBody>
        <CardSubtitle
          style={{ borderTop: "1px solid #203A56", paddingTop: "10px" }}
        >
          <p style={{ position: "relative" }}>
            <img
              src={Threepanel}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />{" "}
            <span
              style={{
                position: "absolute",
                top: "13px",
                left: "50px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              <span style={{ color: "#455B78" }}> Creation of</span>{" "}
              ThreePanelCrimes
            </span>
          </p>
        </CardSubtitle>
      </div>
    </Card>
  );
};

export default SplashCards;
