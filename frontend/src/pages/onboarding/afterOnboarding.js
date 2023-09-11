import React from "react";
import "./style.css";

function AfterOnBoarding() {
  return (
    <div className="index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe88bd328c829ae1d3b1d9/img/fury-logo-graphic-2@2x.png"
          />
          <p className="congratulations-you">
            <span className="text-wrapper">
              Congratulations, you’ve created a{" "}
            </span>
            <span className="span">Fury</span>
            <span className="text-wrapper"> wallet!</span>
          </p>
          <div className="overlap">
            <div className="div">Let’s begin.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterOnBoarding;
