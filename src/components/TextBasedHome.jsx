import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowCircleUp } from "react-icons/fa";
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
        <Row>
          <Col xxs={10} xs={10} sm={11} md={11} lg={11}>
            <h2 className="showcased-h2">SHOWCASED WORK</h2>
          </Col>
          <Col className="text-right" xxs={2} xs={2} sm={1} md={1} lg={1}>
            <a href="/portfolio">
              <FaArrowCircleUp className="showcased-work-link" />
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={6}>
            <a href="/portfolio/pomofocus">
              <div className="showcase-card-container-1" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col xxs={10} md={11}>
                  <h3 className="showcased-h3">POMOFOCUS</h3>
                </Col>
                <Col xxs={1} md={1}>
                  <a href="/portfolio/pomofocus">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </a>
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </a>
          </Col>
          <Col xs={6} md={6}>
            <a href="/portfolio/el-in">
              <div className="showcase-card-container-1" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col xxs={10} md={11}>
                  <h3 className="showcased-h3">ELECTRONICS INV</h3>
                </Col>
                <Col xxs={1} md={1}>
                  <a href="/portfolio/el-in">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </a>
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </a>
          </Col>
        </Row>
        <div className="spacer-small"></div>
        <Row>
          <Col xs={12} md={6}>
            <a href="/portfolio/3D Portfolio">
              <div className="showcase-card-container-1" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col xxs={10} md={11}>
                  <h3 className="showcased-h3">3d portfolio</h3>
                </Col>
                <Col xxs={1} md={1}>
                  <a href="/portfolio/3dportfolio">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </a>
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </a>
          </Col>
          <Col xs={12} md={6}>
            <a href="/portfolio/outdoorsy">
              <div className="showcase-card-container-1" />
              <div className="spacer-small"></div>
              <div className="showcase-border-top" />
              <div className="spacer-small"></div>
              <Row>
                <Col xxs={10} md={11}>
                  <h3 className="showcased-h3">OUTDOORSY</h3>
                </Col>
                <Col xxs={1} md={1}>
                  <a href="/portfolio/outdoorsy">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </a>
                </Col>
                <div className="spacer-small"></div>
              </Row>
            </a>
          </Col>
        </Row>
        <div className="spacer"></div>
      </section>
    </>
  );
};

export default TextBasedHome;
