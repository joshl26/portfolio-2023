import React from "react";
import "./Portfolio.css";
import ResponsiveFooter from "./ResponsiveFooter";
import ResponsiveHeader from "./ResponsiveHeader";

const Portfolio = () => {
  return (
    <>
      <ResponsiveHeader />
      <main className="main-container">
        <section className="portfolio-section">
          <h1 className="portfolio-h1">Portfolio</h1>
        </section>
      </main>
      <ResponsiveFooter />
    </>
  );
};

export default Portfolio;
