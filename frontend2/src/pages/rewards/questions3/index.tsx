import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question3.css'
import YesUnclicked from '../../../assets/yes unclicked.png'
import Yesclicked from '../../../assets/yes clicked.png'
import NoUnclicked from '../../../assets/no unclicked.png'
import Noclicked from '../../../assets/no clicked.png'
import secondIcon from '../../../assets/03.png'

const Question3 = () => {
  let navigate = useNavigate();
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)

  const goNextPage = () => {
    navigate("/rewards/question5");
  }

  const goBack = () => {
    navigate("/onboarding");
  };

  return (<div className="question3-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberone"
      alt="number"
      src={secondIcon}
      />
      <p className="text-wrapper">
        Open up your email app and find the email we’ve just sent to you.
      </p>
      <div className="text-wrapper-2">Continue with</div>
        <div>
          <button type='button' className="btn" onClick={goNextPage}>
            <img
              className="google"
              alt="Google"
              src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fec1d2abb3145103b59ea0/img/google.png"
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

export default Question3;
