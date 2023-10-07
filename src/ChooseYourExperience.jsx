import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const ChooseYourExperience = ({ colorMode }) => {
  const ref = useRef();

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
          <>
            <TypeAnimation
              ref={ref}
              cursor={false}
              style={{
                fontSize: "1.75rem",
              }}
              className={CURSOR_CLASS_NAME}
              sequence={[
                "One",
                800,
                "One Two",
                800,
                "One Two Three",
                (el) => {
                  setAnimatedCursorOne(false);
                  el.classList.remove(CURSOR_CLASS_NAME);
                }, // A reference to the element gets passed as the first argument of a callback function
                2000,
                (el) => {
                  setAnimatedCursorOne(true);
                  el.classList.add(CURSOR_CLASS_NAME);
                },
                "",
              ]}
              repeat={Infinity}
            />

            <style global jsx>{`
              .custom-type-animation-cursor::after {
                content: "|";
                animation: cursor 1.1s infinite step-start;
              }
              @keyframes cursor {
                50% {
                  opacity: 0;
                }
              }
            `}</style>
          </>
        </Col>
        <Col md={3}></Col>
      </Row>
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
