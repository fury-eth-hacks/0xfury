import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './exclamation.css'
import Exc from '../../../assets/Important Maroon 1.png'
import Slide from '../../../assets/Slide.png'

const Exclamation = () => {
  let navigate = useNavigate();

  const goNextPage = () => {
    navigate("/rewards/question5");
  }

  const goBack = () => {
    navigate("/onboarding");
  };

  return (<div className="exclamation-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberone"
      alt="number"
      src={Exc}
      />
      <p className="text-wrapper">
      Privately write down this information; <span className="span">do not share it, not even with loved ones.</span>
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

export default Exclamation;
