import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ResponsiveFooter.css";
import { FaLinkedinIn, FaGithub, FaYoutubeSquare } from "react-icons/fa";

const ResponsiveFooter = () => {
  return (
    <footer className="responsive-footer">
      <div className="footer-container">
        <Row>
          <Col xs={4} sm={2} md={3}>
            <div className="copyright-container">
              <a
                href={
                  "mailto:joshlehman.dev@gmail.com?subject=Portfolio%20Site%20Contact"
                }
              >
                <p className="copyright-text">©Josh Lehman</p>
              </a>
            </div>
          </Col>
          <Col></Col>
          <Col xs={6} sm={6} md={3}>
            <Row>
              <Col></Col>
              <Col className="social-icon-col">
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href="https://www.linkedin.com/in/joshrlehman/"
                >
                  <FaLinkedinIn className="social-icon" />
                </a>
              </Col>
              <Col className="social-icon-col">
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href="https://github.com/joshl26"
                >
                  <FaGithub className="social-icon" />
                </a>
              </Col>
              <Col className="social-icon-col">
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCp73vCN8JROvOh-DrCczCew"
                >
                  <FaYoutubeSquare className="social-icon" />
                </a>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="spacer"></div>
    </footer>
  );
};

export default ResponsiveFooter;
