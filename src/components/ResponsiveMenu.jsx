import React, { useState } from "react";
import "./ResponsiveMenu.css";
import { AnimatePresence, motion } from "framer-motion";

const ResponsiveMenu = ({ menuClicked, hamburgerMenuClicked }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { position: "absolute", zIndex: 10, opacity: 1, x: 0 },
    closed: { position: "absolute", zIndex: 0, opacity: 0, x: "-25%" },
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
          <a href="/home">
            <h3 className="responsive-menu-header">Home</h3>
          </a>
          <a href="/work">
            <h3 className="responsive-menu-header">Work</h3>
          </a>
          <a href="/portfolio">
            <h3 className="responsive-menu-header">Portfolio</h3>
          </a>
          <a href="/about">
            <h3 className="responsive-menu-header">About</h3>
          </a>
          <a href="/services">
            <h3 className="responsive-menu-header">Services</h3>
          </a>
          <a href="/contact">
            <h3 className="responsive-menu-header">Contact</h3>
          </a>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
