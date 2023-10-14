import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Portfolio.css";
import RoundButton from "./RoundButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <main className="main-container">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">Portfolio</h1>
      </section>
      <section className="projects-section">
        <Row>
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link to={"/portfolio/el-in"}>
                <div className="showcase-card-container-el" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </Col>
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">electronics inventory</h3>
              <p className="showcased-p">
                Electronics Inventory is a cutting-edge web based app that
                efficiently organizes electronic lab inventory for both small
                businesses and individuals with ease. The organic layout design
                of the UI/UX was the impotese for this project.
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
              <div>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"FRONTEND CODE"}
                  href="https://github.com/joshl26/electronics-inventory-frontend"
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"BACKEND CODE"}
                  href="https://github.com/joshl26/electronics-inventory-backend"
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                  href="https://el-in.ca/"
                />
                <Link to={"/portfolio/el-in/"}>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                  />
                </Link>
              </div>
            </motion.div>
          </Col>
        </Row>
        <div className="spacer-small"></div>

        <Row>
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link to={"/portfolio/pomodor"}>
                <div className="showcase-card-container-po" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </Col>
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">Pomodor Timer</h3>
              <p className="showcased-p">
                A ReactJS and Redux Pomodoro timer based on the famous Pomofocus
                app.
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
                    <li>BABEL</li>
                    <li>WEBPACK</li>
                    <li>GIT</li>
                  </ul>
                </Col>
              </Row>
              <div>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"CODE"}
                  href={"https://github.com/joshl26/pomodoro-app"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                  href={"https:/joshlehman.ca/pomodor"}
                />
                <Link to={"/portfolio/pomodor"}>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                  />
                </Link>
              </div>
              <div className="spacer"></div>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link to={"/portfolio/3dportfolio"}>
                <div className="showcase-card-container-3d" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </Col>
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">3D Portfolio</h3>
              <p className="showcased-p">
                An experimental three dimensional portfolio site created with
                ThreeJS and Blender. Give it a try! I had alot of fun learning
                new technologies to complete this. In the end the limitations of
                responsive styling within this 3d environment meant I had to
                switch back to a more traditional portfolio website layout to
                offer improved user accessibility over different devices,
                specifically older browsers. Still it was a FUN experiment and I
                do see applications for this type of tech in the future (i.e.
                Augmented Reality) Reality.
              </p>
              <Row>
                <Col>
                  <ul className="showcased-list">
                    <li>JAVASCRIPT</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                  </ul>
                </Col>
                <Col>
                  <ul className="showcased-list">
                    <li>FRONTEND DESIGN</li>
                    <li>BABEL</li>
                    <li>WEBPACK</li>
                    <li>GIT</li>
                  </ul>
                </Col>
              </Row>
              <div>
                <RoundButton
                  href={"https://github.com/joshl26/portfolio-2023"}
                  buttonClass={"round-button"}
                  buttonText={"CODE"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                  href={"/portfolio/experimental"}
                />
                <Link to={"/portfolio/3dportfolio"}>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                  />
                </Link>
              </div>
              <div className="spacer"></div>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link to={"/portfolio/outdoorsy"}>
                <div className="showcase-card-container-out" />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </Col>

          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">outdoorsy</h3>
              <p className="showcased-p">
                Outdoorsy is a full-stack website project where users can create
                and review campsites. To review or create a campsite, you must
                have an account.
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
              <div>
                <RoundButton buttonClass={"round-button"} buttonText={"CODE"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                />
              </div>
              <div className="spacer"></div>
            </motion.div>
          </Col>
        </Row>
        <div className="spacer-small"></div>
      </section>
    </main>
  );
};

export default Portfolio;
