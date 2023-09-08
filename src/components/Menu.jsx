import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import HamburgerMenuDark from "../data/lottie/menuAnimationDark.json";
import HamburgerMenuLight from "../data/lottie/menuAnimationLight.json";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import "./Menu.css";

const Menu = (props) => {
  const lottieRef = useRef();

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
    lottieRef.current.setSpeed(2.75);
    if (menuOpened === false) {
      lottieRef.current.playSegments([15, 75], true);
      setMenuOpened(!menuOpened);
    } else {
      lottieRef.current.playSegments([75, 15], true);
      setMenuOpened(!menuOpened);
    }
  };

  useEffect(() => {}, [section]);

  return (
    <>
      {colorMode === "light" ? (
        <Lottie
          lottieRef={lottieRef}
          className="menu-open-button"
          animationData={HamburgerMenuLight}
          autoplay={false}
          loop={false}
          onClick={() => menuButtonClickHandler()}
        />
      ) : (
        <Lottie
          lottieRef={lottieRef}
          className="menu-open-button"
          animationData={HamburgerMenuDark}
          autoplay={false}
          loop={false}
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
        <motion.div
          initial={{ x: -200, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styleColormode("menu-container")}
        >
          <Row>
            <Col xs={2}></Col>
            <Col>
              <div className="menu-spacer"></div>
              <Row className="menu-row">
                <MenuButton
                  lable="Home"
                  // disabled={section === 0 ? true : false}
                  onClick={() => {
                    onSectionChange(0);
                    menuButtonClickHandler();
                  }}
                />
              </Row>
              <div className="menu-sspacer"></div>
              <Row className="menu-row">
                <MenuButton
                  lable="About"
                  // disabled={section === 1 ? true : false}
                  onClick={() => {
                    onSectionChange(1);
                    menuButtonClickHandler();
                  }}
                />
              </Row>
              <div className="menu-sspacer"></div>
              <Row className="menu-row">
                <MenuButton
                  lable="Projects"
                  // disabled={section === 2 ? true : false}
                  onClick={() => {
                    onSectionChange(2);
                    menuButtonClickHandler();
                  }}
                />
              </Row>
              <div className="menu-sspacer"></div>
              <Row className="menu-row">
                <MenuButton
                  lable="Contact"
                  // disabled={section === 3 ? true : false}
                  onClick={() => {
                    onSectionChange(3);
                    menuButtonClickHandler();
                  }}
                />
              </Row>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </motion.div>
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
