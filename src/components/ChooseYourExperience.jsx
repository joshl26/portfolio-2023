import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "./ChooseYourExperience.css";

const ChooseYourExperience = ({ colorMode, setExperienceChangeHandler }) => {
  const refOne = useRef();
  const refTwo = useRef();

  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  const [animatedCursorOne, setAnimatedCursorOne] = useState(true);

  const [typingStatus, setTypingStatus] = useState("Initializing");

  var animatedFontStyleColor = colorMode === "dark" ? "white" : "black";

  return (
    <Container>
      <div className="spacer"></div>

      <Row>
        <Col md={3}></Col>
        <Col>
          <TypeAnimation
            ref={refOne}
            cursor={false}
            style={{
              color: animatedFontStyleColor,
              fontSize: "1.75rem",
            }}
            className={CURSOR_CLASS_NAME}
            sequence={[
              1250,
              "Choose your experience:",
              100,
              (el) => {
                setAnimatedCursorOne(false);
                el.classList.remove(CURSOR_CLASS_NAME);
              }, // A reference to the element gets passed as the first argument of a callback function
            ]}
            repeat={false}
          />
        </Col>
        <Col md={3}></Col>
      </Row>

      <div className="spacer"></div>
      <Row>
        <Col md={3}></Col>
        <Col>
          <Row>
            <TypeAnimation
              speed={100}
              ref={refTwo}
              cursor={false}
              style={{
                color: animatedFontStyleColor,
                fontSize: "1.75rem",
              }}
              className={CURSOR_CLASS_NAME}
              sequence={[
                (el) => {
                  setAnimatedCursorOne(false);
                  el.classList.remove(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
                3500,
                (el) => {
                  setAnimatedCursorOne(true);
                  el.classList.add(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
                "Text (3G/old Browser)",
                100,
                (el) => {
                  setAnimatedCursorOne(false);
                  el.classList.remove(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
              ]}
              repeat={false}
            />
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
      <div className="spacer"></div>
      <Row>
        <Col md={3}></Col>
        <Col>
          <Row>
            <TypeAnimation
              speed={100}
              ref={refTwo}
              cursor={false}
              style={{
                color: animatedFontStyleColor,
                fontSize: "1.75rem",
              }}
              className={CURSOR_CLASS_NAME}
              sequence={[
                (el) => {
                  setAnimatedCursorOne(false);
                  el.classList.remove(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
                3500,
                (el) => {
                  setAnimatedCursorOne(true);
                  el.classList.add(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
                "Video (4G/new Browser)",
                100,
                (el) => {
                  setAnimatedCursorOne(false);
                  el.classList.remove(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
              ]}
              repeat={false}
            />
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
      <div className="spacer"></div>
      <Row>
        <Col md={3}></Col>
        <Col>
          <Row onClick={() => setExperienceChangeHandler("interactive")}>
            <TypeAnimation
              speed={100}
              ref={refTwo}
              cursor={false}
              style={{
                color: animatedFontStyleColor,
                fontSize: "1.75rem",
              }}
              className={CURSOR_CLASS_NAME}
              sequence={[
                (el) => {
                  setAnimatedCursorOne(false);
                  el.classList.remove(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
                3500,
                (el) => {
                  setAnimatedCursorOne(true);
                  el.classList.add(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
                "Interactive (5G/Desktop)",
                100,
                (el) => {
                  setAnimatedCursorOne(false);
                  el.classList.remove(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
              ]}
              repeat={false}
            />
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>

      <div className="spacer"></div>

      {animatedCursorOne ? "1" : ""}
      {/* <TypeAnimation
      style={{
        whiteSpace: "pre-line",
        height: "195px",
        display: "block",
        textAlign: "center",
        color: animatedFontStyleColor,
      }}
      sequence={[
        `Line one\nLine Two\nLine Three\nLine Four\nLine Five

Line Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
        1000,
        "",
      ]}
      repeat={Infinity}
    /> */}
    </Container>
  );
};

export default ChooseYourExperience;
