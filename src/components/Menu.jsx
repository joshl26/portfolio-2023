import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import HamburgerMenuDark from "../data/lottie/menuAnimationDark.json";
import HamburgerMenuLight from "../data/lottie/menuAnimationLight.json";

import { Col, Row } from "react-bootstrap";
import "./Menu.css";

const Menu = (props) => {
  const { lottieRef } = useRef();

  const { onSectionChange, menuOpened, setMenuOpened, colorMode, section } =
    props;

  const styleColormode = (styleClass) => {
    if (colorMode === "light") {
      return `${styleClass}-light`;
    } else {
      return `${styleClass}-dark`;
    }
  };

  const menuButtonClickHandler = () => {
    if (menuOpened) {
    } else {
    }

    setMenuOpened(!menuOpened);
  };

  return (
    <>
      {colorMode === "light" ? (
        <Lottie
          lottieRef={lottieRef}
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            left: "10px",
            top: "10px",
            zIndex: 10,
          }}
          animationData={HamburgerMenuLight}
          autoplay={false}
          onClick={() => menuButtonClickHandler()}
        />
      ) : (
        <Lottie
          lottieRef={lottieRef}
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            left: "10px",
            top: "10px",
            zIndex: 10,
          }}
          animationData={HamburgerMenuDark}
          autoplay={false}
          onClick={() => menuButtonClickHandler()}
        />
      )}

      {/* <button
        style={{ top: "50px", left: "50px", position: "fixed" }}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        Menu
      </button> */}
      {menuOpened ? (
        <div className={styleColormode("menu-container")}>
          <Col>
            <div className="menu-spacer"></div>
            <Row className="menu-row">
              <MenuButton
                lable="Home"
                disabled={section === 0 ? true : false}
                onClick={() => onSectionChange(0)}
              />
            </Row>
            <div className="menu-sspacer"></div>

            <Row className="menu-row">
              <MenuButton
                lable="About"
                disabled={section === 1 ? true : false}
                onClick={() => onSectionChange(1)}
              />
            </Row>
            <div className="menu-sspacer"></div>

            <Row className="menu-row">
              <MenuButton
                lable="Projects"
                disabled={section === 2 ? true : false}
                onClick={() => onSectionChange(2)}
              />
            </Row>
            <div className="menu-sspacer"></div>
            <Row className="menu-row">
              <MenuButton
                lable="Contact"
                disabled={section === 3 ? true : false}
                onClick={() => onSectionChange(3)}
              />
            </Row>
          </Col>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const MenuButton = (props) => {
  const { lable, onClick, disabled } = props;

  return (
    <button disabled={disabled} className="menu-button" onClick={onClick}>
      {lable}
    </button>
  );
};

export default Menu;
