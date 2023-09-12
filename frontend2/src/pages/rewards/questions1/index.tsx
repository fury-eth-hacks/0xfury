import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question1.css'
import YesUnclicked from '../../../assets/yes unclicked.png'
import Yesclicked from '../../../assets/yes clicked.png'
import NoUnclicked from '../../../assets/no unclicked.png'
import Noclicked from '../../../assets/no clicked.png'
import firstIcon from '../../../assets/01.png'

const Question1 = () => {
  let navigate = useNavigate();
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)

  return (<div className="question1-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberone"
      alt="number"
      src={firstIcon}
      />
      <p className="text-wrapper">Look around. <span className="span">Are you by yourself?</span> 
      Are there any <span className="span">cameras or CCTVs</span> around or near you?</p>
      <p className="yesno">
        <button type='button' className="btn" onClick={() => {
          setYes(!yes)
          if (no) {
            setNo(false)
          }
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
        }}> 
          <img 
          className="noanswer"
          alt="no"
          src={no ? NoUnclicked : Noclicked}
          />
        </button>
      </p>
    </div>
  </div>
</div>)
};

export default Question1;
