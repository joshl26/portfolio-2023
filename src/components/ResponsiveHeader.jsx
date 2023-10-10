import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./ResponsiveHeader.css";
import JLIconSmall from "../data/images/JL_Icon_Small.png";
import RoundButton from "./RoundButton";

const ResponsiveHeader = ({
  menuClicked,
  hamburgerMenuClicked,
  experience,
  chooseYourExperience,
}) => {
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
            {experience && experience !== "interactive" ? (
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
            ) : !chooseYourExperience ? (
              <div className="hamburger-container">
                <RoundButton
                  href={"/contact"}
                  buttonClass="round-button"
                  buttonText={"Contact"}
                  clickHandler={() => {}}
                />
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
