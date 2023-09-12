import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./first.css";
import {
  coreService
} from '../../../core/service'
import EducationVoucher from '../../../assets/Education Voucher.png' 

const RewardFirst = () => {
  let navigate = useNavigate();

  const goBack = () => {
    navigate("/onboarding");
  };

  const goTo = () => {
    navigate("/rewards/question1");
  };

  useEffect(() => {

    return () => {
    }; 
  }, [])

  return (
    <div className="rewards-first-index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="plastic-cards"
            alt="Plastic cards"
            src={EducationVoucher}
          />
          <p className="text-wrapper">Earn $ rewards
            by learning to protect your <span className="span">Fury</span> wallet</p>
          <div className="rectangle" />
          <div>
            <button type='button' className="div" onClick={goTo}>
              Continue
            </button>
          </div>
          <p className="warning">
            <a onClick={() => {goBack()}}>
              Or <span className="span-skip">Skip</span>
            </a>
          </p>
          <p className="warning1">(you will lose all rewards opportunities)</p>
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

export default RewardFirst;