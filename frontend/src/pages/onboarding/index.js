import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  let navigate = useNavigate()

  const goToGoogleAuthPage = () => {
    navigate('/onboarding/login')
  }
  return (
    <button type='text' onClick={goToGoogleAuthPage}>
      Start Today
    </button>
  );
}

export default OnBoarding;