import React, { useState } from "react";
import ResponsiveHeader from "./ResponsiveHeader";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import RoundButton from "./RoundButton";
import ResponsiveFooter from "./ResponsiveFooter";
import "./PortfolioPomodor.css";

const PortfolioOutdoorsy = () => {
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
            className="portfolio-pomodoro-hero"
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
          <section className="portfolio-pomodoro-section">
            <h2 className="portfolio-pomodoro-h2">DETAILS</h2>
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
                  <RoundButton
                    buttonText={"CSS3"}
                    buttonClass={"round-button"}
                  />
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
                  <RoundButton
                    buttonText={"GIT"}
                    buttonClass={"round-button"}
                  />
                </span>
              </span>
            </div>
            <p className="portfolio-pomodoro-p">
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
          <section className="portfolio-pomodoro-section">
            <h2 className="portfolio-pomodoro-h2">DESIGN INTENT</h2>
            <p className="portfolio-pomodoro-p">
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
          <section className="portfolio-pomodoro-section">
            <h2 className="portfolio-pomodoro-h2">FONT TYPES</h2>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <span className="portfolio-pomodoro-font-rale">RALE</span>
              <div className="portfolio-pomodoro-li">
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
              <span className="portfolio-pomodoro-font-luci">LUCI</span>
              <div className="portfolio-pomodoro-li">
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

        <section className="portfolio-pomodoro-section">
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
            <h2 className="portfolio-pomodoro-h2">SCREENS</h2>
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
            className="portfolio-pomodoro-screen-1"
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
            className="portfolio-pomodoro-screen-2"
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
            className="portfolio-pomodoro-screen-3"
          />
          <div className="spacer"></div>
        </section>
      </main>
      <ResponsiveFooter />
    </>
  );
};

export default PortfolioOutdoorsy;
