import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question2.css'
import YesUnclicked from '../../../assets/yes unclicked.png'
import Yesclicked from '../../../assets/yes clicked.png'
import NoUnclicked from '../../../assets/no unclicked.png'
import Noclicked from '../../../assets/no clicked.png'
import secondIcon from '../../../assets/02.png'

const Question2 = () => {
  let navigate = useNavigate();
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)

  const goBack = () => {
    navigate("/onboarding");
  };

  const goNextPage = () => {
    navigate("/rewards/question3");
  }

  return (<div className="question2-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberone"
      alt="number"
      src={secondIcon}
      />
      <p className="text-wrapper">That's Great.
      Now, <span className="span">do you have pen and paper?</span> You will need it for the next few steps.</p>
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

export default Question2;
