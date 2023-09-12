import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question4.css'
import fourthIcon from '../../../assets/04.png'
import Slide from '../../../assets/Slide.png'

const Question4 = () => {
  let navigate = useNavigate();

  const goNextPage = () => {
    navigate("/rewards/exclamation");
  }

  const goBack = () => {
    navigate("/onboarding");
  };

  return (<div className="question4-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberone"
      alt="number"
      src={fourthIcon}
      />
      <p className="text-wrapper">
        Write down the <span className="span">extremely long</span> string of characters as shown on the email you have opened.
      </p>
        <div>
          <button type='button' className="btn" onClick={goNextPage}>
            <img
              className="google"
              alt="Slide"
              src={Slide}
              />
          </button>
        </div>
      <p className="warning">
        <a onClick={() => {goBack()}}>
          <span className="span-skip">Skip</span>
        </a>
      </p>
      <p className="warning1">(you will lose all rewards opportunities)</p>
    </div>
  </div>
</div>)
};

export default Question4;
