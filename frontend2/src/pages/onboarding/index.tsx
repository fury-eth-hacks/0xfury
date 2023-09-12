import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  coreService
} from '../../core/service'

const OnBoarding = () => {
  let navigate = useNavigate();

  const goToGoogleAuthPage = () => {
    navigate("/onboarding/login");
  };

  useEffect(() => {
    const bounce1 = coreService.setBounceAnimation('.coin');
    const bounce2 = coreService.setBounceAnimation('.img');
    const bounce3 = coreService.setBounceAnimation('.coin-2');
    const bounce4 = coreService.setBounceAnimation('.plastic-cards');
    const rotate = coreService.setRotateAnimation('.fury-logo-graphic');

    return () => {
      bounce1.kill();
      bounce2.kill();
      bounce3.kill();
      bounce4.kill();
      rotate.kill();
    }; 
  }, [])

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
          <div>
            <button type='button' className="div" onClick={goToGoogleAuthPage}>
              Start today.
            </button>
          </div>
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
