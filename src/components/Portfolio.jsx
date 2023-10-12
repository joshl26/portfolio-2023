import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowCircleUp } from "react-icons/fa";
import "./Portfolio.css";
import ResponsiveFooter from "./ResponsiveFooter";
import ResponsiveHeader from "./ResponsiveHeader";
import RoundButton from "./RoundButton";

const Portfolio = () => {
  const clickHandler = () => {};
  return (
    <>
      <ResponsiveHeader />
      <main className="main-container">
        <section className="portfolio-section">
          <h1 className="portfolio-h1">Portfolio</h1>
        </section>
        <section className="projects-section">
          <Row>
            <Col xs={12} md={6}>
              <a href="/portfolio/el-in">
                <div className="showcase-card-container-1" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </a>
              <div className="spacer"></div>
            </Col>
            <Col xs={12} md={6}>
              <div className="showcase-border-top">
                <h3 className="showcased-h3">electronics inventory</h3>
                <p className="showcased-p">
                  Electronics Inventory is a cutting-edge SAAS webapp that
                  efficiently organizes electronic lab inventory for both small
                  businesses and individuals with ease.
                </p>
                <Row>
                  <Col>
                    <ul className="showcased-list">
                      <li>JAVASCRIPT</li>
                      <li>CSS3</li>
                      <li>HTML5</li>
                      <li>WIREFRAMING</li>
                      <li>UI/UX DESIGN</li>
                      <li>REACT</li>
                      <li>REDUX</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="showcased-list">
                      <li>BACKEND DESIGN</li>
                      <li>EXPRESS</li>
                      <li>REST API</li>
                      <li>BABEL</li>
                      <li>WEBPACK</li>
                      <li>GIT</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"FRONTEND CODE"}
                    href={
                      "https://github.com/joshl26/electronics-inventory-frontend"
                    }
                    clickHandler={clickHandler}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"BACKEND CODE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"LIVE SITE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                  />
                </Row>
              </div>
            </Col>
          </Row>
          <div className="spacer-small"></div>
          <Row>
            <Col xs={12} md={6}>
              <a href="/portfolio/el-in">
                <div className="showcase-card-container-2" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </a>
              <div className="spacer"></div>
            </Col>
            <Col xs={12} md={6}>
              <div className="showcase-border-top">
                <h3 className="showcased-h3">electronics inventory</h3>
                <p className="showcased-p">
                  Electronics Inventory is a cutting-edge SAAS webapp that
                  efficiently organizes electronic lab inventory for both small
                  businesses and individuals with ease.
                </p>
                <Row>
                  <Col>
                    <ul className="showcased-list">
                      <li>JAVASCRIPT</li>
                      <li>CSS3</li>
                      <li>HTML5</li>
                      <li>WIREFRAMING</li>
                      <li>UI/UX DESIGN</li>
                      <li>REACT</li>
                      <li>REDUX</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="showcased-list">
                      <li>BACKEND DESIGN</li>
                      <li>EXPRESS</li>
                      <li>REST API</li>
                      <li>BABEL</li>
                      <li>WEBPACK</li>
                      <li>GIT</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"FRONTEND CODE"}
                    href={
                      "https://github.com/joshl26/electronics-inventory-frontend"
                    }
                    clickHandler={clickHandler}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"BACKEND CODE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"LIVE SITE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                  />
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <a href="/portfolio/el-in">
                <div className="showcase-card-container-3" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </a>
              <div className="spacer"></div>
            </Col>
            <Col xs={12} md={6}>
              <div className="showcase-border-top">
                <h3 className="showcased-h3">electronics inventory</h3>
                <p className="showcased-p">
                  Electronics Inventory is a cutting-edge SAAS webapp that
                  efficiently organizes electronic lab inventory for both small
                  businesses and individuals with ease.
                </p>
                <Row>
                  <Col>
                    <ul className="showcased-list">
                      <li>JAVASCRIPT</li>
                      <li>CSS3</li>
                      <li>HTML5</li>
                      <li>WIREFRAMING</li>
                      <li>UI/UX DESIGN</li>
                      <li>REACT</li>
                      <li>REDUX</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="showcased-list">
                      <li>BACKEND DESIGN</li>
                      <li>EXPRESS</li>
                      <li>REST API</li>
                      <li>BABEL</li>
                      <li>WEBPACK</li>
                      <li>GIT</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"FRONTEND CODE"}
                    href={
                      "https://github.com/joshl26/electronics-inventory-frontend"
                    }
                    clickHandler={clickHandler}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"BACKEND CODE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"LIVE SITE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                  />
                </Row>
              </div>
            </Col>
          </Row>
          <div className="spacer"></div>

          <Row>
            <Col xs={12} md={6}>
              <a href="/portfolio/el-in">
                <div className="showcase-card-container-4" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </a>
              <div className="spacer"></div>
            </Col>

            <Col xs={12} md={6}>
              <div className="showcase-border-top">
                <h3 className="showcased-h3">electronics inventory</h3>
                <p className="showcased-p">
                  Electronics Inventory is a cutting-edge SAAS webapp that
                  efficiently organizes electronic lab inventory for both small
                  businesses and individuals with ease.
                </p>
                <Row>
                  <Col>
                    <ul className="showcased-list">
                      <li>JAVASCRIPT</li>
                      <li>CSS3</li>
                      <li>HTML5</li>
                      <li>WIREFRAMING</li>
                      <li>UI/UX DESIGN</li>
                      <li>REACT</li>
                      <li>REDUX</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="showcased-list">
                      <li>BACKEND DESIGN</li>
                      <li>EXPRESS</li>
                      <li>REST API</li>
                      <li>BABEL</li>
                      <li>WEBPACK</li>
                      <li>GIT</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"FRONTEND CODE"}
                    href={
                      "https://github.com/joshl26/electronics-inventory-frontend"
                    }
                    clickHandler={clickHandler}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"BACKEND CODE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"LIVE SITE"}
                  />
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                  />
                </Row>
              </div>
            </Col>
          </Row>
          <div className="spacer-small"></div>
        </section>
      </main>
      <ResponsiveFooter />
    </>
  );
};

export default Portfolio;
