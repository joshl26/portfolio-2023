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
              <img
                className="showcase-card-container-el"
                alt="electronics inventory hero"
                src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
              />
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
              <img
                className="showcase-card-container-po"
                alt="pomodoro timer hero"
                src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384650/PortfolioSite/Iphone_horizontal_and_vertical_pomo_vases_ng2hpt.png"
              />
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
              <img
                className="showcase-card-container-3d"
                alt="3d portfolio hero"
                src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384654/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
              />
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
              <img
                className="showcase-card-container-out"
                alt="outdoorsy app hero"
                src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384653/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
              />
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
