import React from "react";
import { Col, Image, Nav, Row } from "react-bootstrap";
import "./ResponsiveHeader.css";
import JLIconSmall from "../data/images/JL_Icon_Small.png";
import { useState } from "react";

const ResponsiveHeader = ({ menuClicked, hamburgerMenuClicked }) => {
  var hamburgerMenuStyle = menuClicked ? "is-active" : "";

  return (
    <header className="header-container">
      <div>
        <Row>
          <Col>
            <div className="header-hero-container">
              <a href="/">
                <Image
                  className="header-hero-image"
                  alt="header hero image"
                  src={JLIconSmall}
                ></Image>
              </a>
            </div>
          </Col>
          <Col></Col>
          <Col>
            <div className="hamburger-container">
              <div
                onClick={hamburgerMenuClicked}
                className={`hamburger hamburger--spring + ${hamburgerMenuStyle}`}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
