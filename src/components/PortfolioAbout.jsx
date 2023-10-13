import React, { useState } from "react";
import ResponsiveHeader from "./ResponsiveHeader";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import RoundButton from "./RoundButton";
import ResponsiveFooter from "./ResponsiveFooter";
import "./PortfolioPomodor.css";

const PortfolioAbout = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const hamburgerMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <main className="main-container">
      <section></section>
    </main>
  );
};

export default PortfolioAbout;
