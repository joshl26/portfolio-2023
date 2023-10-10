import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RoundButton from "./RoundButton";
import "./LandingPage.css";

const LandingPage = ({ chooseExperienceChangeHandler }) => {
  const buttonClass = "round-button";

  return (
    <section className="landing-section">
      <div className="landing-container">
        <Col>
          <h1 className="landing-header">
            Welcome to Josh Lehmans portfolio site!
          </h1>
        </Col>
        <div className="spacer"></div>
        <Row>
          <Col sm={1}></Col>
          <Col style={{ textAlign: "center" }}>
            <RoundButton
              buttonText={"Choose an experience type to begin"}
              href={"/"}
              buttonClass={buttonClass}
              clickHandler={() => chooseExperienceChangeHandler()}
            />
          </Col>
          <Col sm={1}></Col>
        </Row>
      </div>
    </section>
  );
};

export default LandingPage;
