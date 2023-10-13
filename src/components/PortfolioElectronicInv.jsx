import React from "react";
import { motion } from "framer-motion";
import RoundButton from "./RoundButton";
import "./PortfolioElectronicInv.css";

const PortfolioElectronicInv = () => {
  return (
    <main className="main-container">
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          className="portfolio-elin-hero"
        />
      </section>
      <div className="spacer-small"></div>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <span>
            <RoundButton buttonText={"GIT"} buttonClass={"round-button"} />
          </span>
          <span>
            <RoundButton
              buttonText={"LIVE SITE"}
              buttonClass={"round-button"}
            />
          </span>
          <span>
            <RoundButton buttonText={"UI/UX"} buttonClass={"round-button"} />
          </span>
        </motion.div>
      </section>
      <div className="spacer-small"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.5,
          },
        }}
      >
        <section className="portfolio-elin-section">
          <h2 className="portfolio-elin-h2">DETAILS</h2>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <h4>Winter 2022-Fall 2023</h4>
            </span>
            <span>
              <h4>Personal Development Project</h4>
            </span>
          </div>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <span>
                <RoundButton
                  buttonText={"JAVASCRIPT"}
                  buttonClass={"round-button"}
                />
              </span>
              <span>
                <RoundButton buttonText={"CSS3"} buttonClass={"round-button"} />
              </span>
              <span>
                <RoundButton
                  buttonText={"HTML5"}
                  buttonClass={"round-button"}
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"WIREFRAMING"}
                  buttonClass={"round-button"}
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"UI/UX DESIGN"}
                  buttonClass={"round-button"}
                />
              </span>
            </span>
            <span>
              <span>
                <RoundButton
                  buttonText={"REACT"}
                  buttonClass={"round-button"}
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"REDUX"}
                  buttonClass={"round-button"}
                />
              </span>

              <span>
                <RoundButton
                  buttonText={"BABEL"}
                  buttonClass={"round-button"}
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"WEBPACK"}
                  buttonClass={"round-button"}
                />
              </span>
              <span>
                <RoundButton buttonText={"GIT"} buttonClass={"round-button"} />
              </span>
            </span>
          </div>
          <p className="portfolio-elin-p">
            HTML5 - A markup language for creating web pages and web
            applications. CSS3 - used for describing the presentation of a
            document written in a markup language. Bootstrap - A free and
            open-source front-end web framework for designing websites and web
            applications quickly. Node.js - Open-source, cross-platform
            JavaScript run-time environment for executing JavaScript code
            server-side. Redux - For state management.
          </p>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.25,
          },
        }}
      >
        <section className="portfolio-elin-section">
          <h2 className="portfolio-elin-h2">DESIGN INTENT</h2>
          <p className="portfolio-elin-p">
            HTML5 - A markup language for creating web pages and web
            applications. CSS3 - used for describing the presentation of a
            document written in a markup language. Bootstrap - A free and
            open-source front-end web framework for designing websites and web
            applications quickly. Node.js - Open-source, cross-platform
            JavaScript run-time environment for executing JavaScript code
            server-side. Redux - For state management.
          </p>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.5,
          },
        }}
      >
        <section className="portfolio-elin-section">
          <h2 className="portfolio-elin-h2">FONT TYPES</h2>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span className="portfolio-elin-font-rale">RALE</span>
            <div className="portfolio-elin-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>200</li>
                <li>300</li>
                <li>500</li>
                <li>900</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span className="portfolio-elin-font-luci">LUCI</span>
            <div className="portfolio-elin-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>200</li>
                <li>300</li>
                <li>500</li>
                <li>900</li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
      <section className="portfolio-elin-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <h2 className="portfolio-elin-h2">SCREENS</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          className="portfolio-elin-screen-1"
        />
        <div className="spacer"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          className="portfolio-elin-screen-2"
        />
        <div className="spacer"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          className="portfolio-elin-screen-3"
        />
        <div className="spacer"></div>
      </section>
    </main>
  );
};

export default PortfolioElectronicInv;
