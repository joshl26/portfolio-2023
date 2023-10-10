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
          <Col>
            <div className="copyright-container">
              <p className="copyright-text">©Josh Lehman - 2023</p>
            </div>
          </Col>
          <Col></Col>
          <Col md={2}>
            <Row>
              <Col></Col>
              <Col md={1}>
                <FaLinkedinIn className="social-icon" />
              </Col>
              <Col></Col>
              <Col md={1}>
                <FaGithub className="social-icon" />
              </Col>
              <Col></Col>
              <Col md={1}>
                <FaYoutubeSquare className="social-icon" />
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
