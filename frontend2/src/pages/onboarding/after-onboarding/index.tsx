import React, { useEffect } from "react";
import "./after-onboarding.css";
import { useNavigate } from "react-router-dom";
import {
  coreService
} from '../../../core/service'

const AfterBoarding = () => {
  let navigate = useNavigate();

  const goTo = () => {
    navigate("/loading");
  };

  useEffect(() => {
    const rotate = coreService.setRotateAnimation('.fury-logo-graphic');

    return () => {
      rotate.kill();
    }; 
  }, [])

  return (
    <div className="after-onboarding-index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe88bd328c829ae1d3b1d9/img/fury-logo-graphic-2@2x.png"
          />
          <img
            className="flower"
            alt="Flower"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe88bd328c829ae1d3b1d9/img/flower-congratulations.png"
          />
          <p className="congratulations-you">
            <span className="text-wrapper">Congratulations, you’ve created a </span>
            <span className="span">Fury</span>
            <span className="text-wrapper"> wallet!</span>
          </p>
          <div className="overlap">
            <button type='button' className="div" onClick={goTo}>
                Let’s begin.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterBoarding;
