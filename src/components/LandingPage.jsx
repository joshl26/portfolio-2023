import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const LandingPage = ({ chooseExperienceChangeHandler }) => {
  return (
    <Container>
      <Row>
        <div className="spacer"></div>
        <Col></Col>
        <Col md={1}>
          <Row>
            <button onClick={() => chooseExperienceChangeHandler()}>
              Continue...
            </button>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
