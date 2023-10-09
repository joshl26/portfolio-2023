import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RoundButton from "./RoundButton";
import "./LandingPage.css";

const LandingPage = ({ chooseExperienceChangeHandler }) => {
  const buttonClass = "round-button";

  return (
    <section>
      <Col>
        <h1 className="landing-header">
          Welcome to Josh Lehmans portfolio site!
        </h1>
      </Col>
      <div className="spacer"></div>
      <Row>
        <Col></Col>
        <Col style={{ textAlign: "center" }}>
          <RoundButton
            buttonText={"Click here to continue..."}
            href={"/"}
            buttonClass={buttonClass}
            clickHandler={() => chooseExperienceChangeHandler()}
          />
        </Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default LandingPage;
