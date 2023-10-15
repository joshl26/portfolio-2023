import React from "react";
import { motion } from "framer-motion";
import RoundButton from "./RoundButton";
import "./Portfolio.css";

const PortfolioPomodor = () => {
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
            <RoundButton
              href={"https://github.com/joshl26/pomodoro-app"}
              buttonText={"GIT"}
              buttonClass={"round-button"}
            />
          </span>
          <span>
            <RoundButton
              href={"https://joshlehman.ca/pomodor"}
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
          <div className="spacer-small"></div>

          <p className="portfolio-pomodoro-p">
            This project was started in winter 2023 as an introduction to
            ReactJS. The goal was to explore basic and advanced topics such as
            prop drilling, React Router, responsive UI/UX design, and state
            management with Redux.
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
            The idea with this project was to loosely replicate the UI/UX of the
            famous pomofocus app and make several improvements over their
            version.
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
            <span className="portfolio-pomodoro-font-noto">NOTO</span>
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
  );
};

export default PortfolioPomodor;
