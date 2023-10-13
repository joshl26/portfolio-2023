import React from "react";
import "./ResponsiveMenu.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ menuClicked, hamburgerMenuClicked }) => {
  const variants = {
    open: { position: "absolute", zIndex: 10, opacity: 1 },
    closed: {
      position: "absolute",
      zIndex: -10,
      opacity: 0,
      width: "0px",
    },
  };

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={menuClicked ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0, x: "-25%" }}
        className="responsive-menu-section"
      >
        <div className="responsive-menu-container">
          <div className="menu-spacer"></div>
          <Link onClick={() => hamburgerMenuClicked()} to="/">
            <h3 className="responsive-menu-header">Home</h3>
          </Link>
          <Link onClick={() => hamburgerMenuClicked()} to="/about">
            <h3 className="responsive-menu-header">About</h3>
          </Link>
          <Link onClick={() => hamburgerMenuClicked()} to="/portfolio">
            <h3 className="responsive-menu-header">Portfolio</h3>
          </Link>
          <Link onClick={() => hamburgerMenuClicked()} to="/manifesto">
            <h3 className="responsive-menu-header">Mission</h3>
          </Link>
          <Link
            onClick={() => hamburgerMenuClicked()}
            to="https://drive.google.com/file/d/1zPQ_i4jfnUcPgrqQ_EfHCEHXGyEiQUFX/view?usp=sharing"
          >
            <h3 className="responsive-menu-header">Resume</h3>
          </Link>
          <Link onClick={() => hamburgerMenuClicked()} to="/services">
            <h3 className="responsive-menu-header">Services</h3>
          </Link>
          <Link onClick={() => hamburgerMenuClicked()} to="/contact">
            <h3 className="responsive-menu-header">Contact</h3>
          </Link>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
