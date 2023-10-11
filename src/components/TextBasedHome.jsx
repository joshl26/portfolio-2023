import React from "react";
import { Col, Row } from "react-bootstrap";
import "./TextBasedHome.css";

const TextBasedHome = () => {
  return (
    <>
      <section className="title-container">
        <h1 className="text-based-title">
          CREATING <span className="title-accent">THOUGHTFUL </span>&
          <span className="title-accent"> HUMAN</span> SOFTWARE
          <br />
          <span className="title-year">-SINCE 2021-</span>
        </h1>
      </section>
      <section className="showcased-work">
        <h2 className="showcased-h2">SHOWCASED WORK</h2>
        <Row>
          <Col xs={12} md={6}>
            <div className="showcase-card-container"></div>
          </Col>
          <Col xs={12} md={6}>
            <div className="showcase-card-container margin-top"></div>
          </Col>
        </Row>
        <div className="spacer-small"></div>
        <Row>
          <Col xs={12} md={6}>
            <div className="showcase-card-container"></div>
          </Col>
          <Col xs={12} md={6}>
            <div className="showcase-card-container margin-top"></div>
          </Col>
        </Row>

        <div className="spacer"></div>
      </section>
    </>
  );
};

export default TextBasedHome;
