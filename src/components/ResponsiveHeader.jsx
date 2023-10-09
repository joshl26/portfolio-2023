import React from "react";
import { Image } from "react-bootstrap";
import "./ResponsiveHeader.css";
import JLIconSmall from "../data/images/JL_Icon_Small.png";

const ResponsiveHeader = () => {
  return (
    <div className="header-container">
      <div className="header-hero-container">
        <Image className="header-hero-image" alt="" src={JLIconSmall}></Image>
      </div>
      <h1>ResponsiveHeader</h1>
    </div>
  );
};

export default ResponsiveHeader;
