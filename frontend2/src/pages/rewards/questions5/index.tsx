import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question5.css'
import YesUnclicked from '../../../assets/God clicked.png'
import Yesclicked from '../../../assets/God unclicked.png'
import NoUnclicked from '../../../assets/art clicked.png'
import Noclicked from '../../../assets/art unclicked.png'
import fifthIcon from '../../../assets/05.png'

const Question5 = () => {
  let navigate = useNavigate();
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)

  const goBack = () => {
    navigate("/onboarding");
  };

  const goNextPage = () => {
    //navigate("/rewards/question2");
  }

  return (<div className="question5-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberone"
      alt="number"
      src={fifthIcon}
      />
      <p className="text-wrapper">
        To check if you have recorded it accurately, what was the fifth word you wrote?
      </p>
      <p className="yesno">
        <button type='button' className="btn" onClick={() => {
          setYes(!yes)
          if (no) {
            setNo(false)
          }
          goNextPage()
        }}>
          <img 
          className="numberone"
          alt="yes"
          src={yes ? YesUnclicked : Yesclicked}
          />
        </button>
        <button type='button' className="btn" onClick={() => {
          setNo(!no)
          if (yes) {
            setYes(false)
          }
          goNextPage()
        }}> 
          <img 
          className="noanswer"
          alt="no"
          src={no ? NoUnclicked : Noclicked}
          />
        </button>
      </p>
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

export default Question5;
