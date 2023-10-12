import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ResponsiveFooter.css";
import {
  FaBeer,
  FaLinkedinIn,
  FaGithub,
  FaYoutubeSquare,
} from "react-icons/fa";

const ResponsiveFooter = () => {
  return (
    <footer className="responsive-footer">
      <div className="footer-container">
        <Row>
          <Col xs={4} sm={2} md={3}>
            <div className="copyright-container">
              <p className="copyright-text">©Josh Lehman</p>
            </div>
          </Col>
          <Col xs={1} sm={2} md={7}></Col>
          <Col xs={6} sm={2} md={2}>
            <Row>
              <Col></Col>
              <Col xs={1} md={1}>
                <FaLinkedinIn
                  href="https://www.linkedin.com/in/joshrlehman/"
                  className="social-icon"
                />
              </Col>
              <Col></Col>
              <Col xs={1} md={1}>
                <a href="https://github.com/joshl26">
                  <FaGithub className="social-icon" />
                </a>
              </Col>
              <Col></Col>
              <Col xs={1} md={1}>
                <FaYoutubeSquare
                  href="https://www.youtube.com/channel/UCp73vCN8JROvOh-DrCczCew"
                  className="social-icon"
                />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
