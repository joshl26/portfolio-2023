import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ResponsiveHeader from "./ResponsiveHeader";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import RoundButton from "./RoundButton";
import ResponsiveFooter from "./ResponsiveFooter";
import "./PortfolioPomodor.css";

const PortfolioPomodor = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const hamburgerMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <>
      <ResponsiveHeader
        menuClicked={menuClicked}
        hamburgerMenuClicked={hamburgerMenuClicked}
        experience={"d"}
      />
      {menuClicked ? (
        <ResponsiveMenu
          hamburgerMenuClicked={hamburgerMenuClicked}
          menuClicked={menuClicked}
        />
      ) : (
        ""
      )}
      <main className="main-container">
        <section className="portfolio-pomodoro-section">
          <div className="portfolio-pomodoro-hero" />
        </section>
      </main>
      <ResponsiveFooter />
    </>
  );
};

export default PortfolioPomodor;
