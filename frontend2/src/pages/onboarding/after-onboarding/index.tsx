import React, { useEffect, useState } from "react";
import "./after-onboarding.css";
import { useNavigate } from "react-router-dom";
import {
  coreService
} from '../../../core/service'
import Copy from '../../../assets/copy.png'

const AfterBoarding = () => {
  let navigate = useNavigate();
  const [address, setAddress] = useState('')
  const [copySuccess, setCopySuccess] = useState(false);

  const goTo = () => {
    navigate("/loading");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopySuccess(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  useEffect(() => {
    const binamiAddr: any = coreService.getItem('biconomySmartAccount');
    setAddress(binamiAddr)

    return () => {
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
          {copySuccess && <span className="clipboard">{'Copied to clipboard!'}</span>}
          <p className={`${copySuccess ? 'address' : 'address-no-copy'}`}>
            <span className="elipsis">Address: {address}</span>
            <div>
              <button type='button' className="btn" onClick={copyToClipboard}>
                <img
                  className="logo" 
                  alt="copyclipboard"
                  src={Copy}
                  />
              </button>
            </div>
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
