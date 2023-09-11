import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const OnBoarding = () => {
  let navigate = useNavigate();

  const goToGoogleAuthPage = () => {
    navigate("/onboarding/login");
  };

  return (
    <div className="index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="background"
            alt="Background"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/background.svg"
          />
          <img
            className="plastic-cards"
            alt="Plastic cards"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/plastic-cards.png"
          />
          <img
            className="coin"
            alt="Coin"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/coin-1.png"
          />
          <img
            className="img"
            alt="Coin"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/coin-2-1.png"
          />
          <img
            className="coin-2"
            alt="Coin"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/coin-3-1.png"
          />
          <p className="text-wrapper">Create your first wallet with us</p>
          <div className="rectangle" />
          <button className="div" type="text" onClick={goToGoogleAuthPage}>
            Start Today
          </button>{" "}
          <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/fury-logo-graphic-2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
