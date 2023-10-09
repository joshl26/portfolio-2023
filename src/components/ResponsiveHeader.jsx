import React from "react";
import { Col, Image, Nav, Row } from "react-bootstrap";
import "./ResponsiveHeader.css";
import JLIconSmall from "../data/images/JL_Icon_Small.png";

const ResponsiveHeader = () => {
  return (
    <header>
      <div className="header-container">
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
              <div className="hamburger hamburger--spring">
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
