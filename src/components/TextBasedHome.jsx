import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TextBasedHome.css";

const TextBasedHome = () => {
  return (
    <>
      <section className="title-container">
        <h1 className="text-based-title">
          CREATING <span className="title-accent">PRAGMATIC </span>&
          <span className="title-accent"> THOUGHTFUL</span> SOFTWARE
          <br />
          <span className="title-year">-SINCE 2021-</span>
        </h1>
      </section>
      <section className="showcased-work">
        <Link to={"/portfolio"}>
          <Row>
            <Col>
              <h2 className="showcased-h2">SHOWCASED WORK</h2>
            </Col>
            <Col className="text-right">
              <div className="spacer-xsmall"></div>
              <FaArrowCircleUp className="showcased-work-link" />
            </Col>
          </Row>
        </Link>
        <Row>
          <Col xs={6} md={6}>
            <Link to={"/portfolio/el-in"}>
              <div className="showcase-card-container-el" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col>
                  <h3 className="showcased-h3">ELECTRONICS INVENTORY</h3>
                </Col>
                <Col className="text-right">
                  <FaArrowCircleUp className="showcased-work-link" />
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </Link>
          </Col>
          <Col xs={6} md={6}>
            <Link to={"/portfolio/pomodor"}>
              <div className="showcase-card-container-po" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col>
                  <h3 className="showcased-h3">POMODOR TIMER</h3>
                </Col>
                <Col className="text-right">
                  <FaArrowCircleUp className="showcased-work-link" />
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </Link>
          </Col>
        </Row>
        <div className="spacer-small"></div>
        <Row>
          <Col xs={12} md={6}>
            <Link to={"/portfolio/3dportfolio"}>
              <div className="showcase-card-container-3d" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col>
                  <h3 className="showcased-h3">3D PORTFOLIO</h3>
                </Col>
                <Col className="text-right">
                  <FaArrowCircleUp className="showcased-work-link" />
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={"/portfolio/outdoorsy"}>
              <div className="showcase-card-container-out" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col>
                  <h3 className="showcased-h3">OUTDOORSY</h3>
                </Col>
                <Col className="text-right">
                  <FaArrowCircleUp className="showcased-work-link" />
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </Link>
          </Col>
        </Row>
        <div className="spacer"></div>
      </section>
    </>
  );
};

export default TextBasedHome;
