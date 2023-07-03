import React, { useRef } from "react";
import Lottie from "lottie-react";
import HamburgerMenu from "../data/lottie/menuAnimation.json";
import { Col, Row } from "react-bootstrap";
import "./Menu.css";

const Menu = (props) => {
  const { lottieRef } = useRef();

  const { onSectionChange, menuOpened, setMenuOpened } = props;

  const menuButtonClickHandler = () => {
    if (menuOpened) {
    } else {
    }

    setMenuOpened(!menuOpened);
  };

  return (
    <>
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
        animationData={HamburgerMenu}
        autoplay={false}
        onClick={() => menuButtonClickHandler()}
      />
      {/* <button
        style={{ top: "50px", left: "50px", position: "fixed" }}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        Menu
      </button> */}
      {menuOpened ? (
        <div
          style={{
            top: "0px",
            left: "0px",
            width: "250px",
            bottom: "0px",
            position: "fixed",
            backgroundColor: "rgba(236,236,236, 0.3)",
          }}
        >
          <Col>
            <div className="menu-spacer"></div>
            <Row className="menu-row">
              <MenuButton lable="About" onClick={() => onSectionChange(0)} />
            </Row>
            <div className="menu-sspacer"></div>

            <Row className="menu-row">
              <MenuButton lable="Skills" onClick={() => onSectionChange(1)} />
            </Row>
            <div className="menu-sspacer"></div>

            <Row className="menu-row">
              <MenuButton lable="Projects" onClick={() => onSectionChange(2)} />
            </Row>
            <div className="menu-sspacer"></div>
            <Row className="menu-row">
              <MenuButton lable="Contact" onClick={() => onSectionChange(3)} />
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
  const { lable, onClick } = props;

  return (
    <button className="menu-button" onClick={onClick}>
      {lable}
    </button>
  );
};

export default Menu;
