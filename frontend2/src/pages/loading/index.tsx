import React from "react";
import "./loading.css";
import GlassSphere from '../../assets/Glass Spheres.png' 

const Loading = () => {
  return (
    <div className="loading-index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="plastic-cards"
            alt="Plastic cards"
            src={GlassSphere}
          />
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

export default Loading;
