import React from "react";
import "./ResponsiveMenu.css";

const ResponsiveMenu = () => {
  return (
    <section className="responsive-menu-section">
      <div className="responsive-menu-container">
        <div className="spacer"></div>
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
    </section>
  );
};

export default ResponsiveMenu;
