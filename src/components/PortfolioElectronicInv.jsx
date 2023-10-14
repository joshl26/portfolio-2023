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
            <RoundButton
              href={"https://github.com/joshl26/electronics-inventory-frontend"}
              buttonText={"GIT"}
              buttonClass={"round-button"}
            />
          </span>
          <span>
            <RoundButton
              buttonText={"LIVE SITE"}
              buttonClass={"round-button"}
              href={"https://el-in.ca"}
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
              <h4>SPRING 2023-CURRENT</h4>
            </span>
            <span>
              <h4>COMMMERCIAL PRODUCT</h4>
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
            Electronics Inventory (Ei) is a Full featured inventory management
            and control system designed for small and large businesses alike!
            Easy to set up and get started, also has the flexibility to scale
            for corporate environments. Cloud-based architecture under the hood
            assures you can see your inventory levels from any device, anywhere!
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
            The intent with this application was to deliver key business metrics
            regarding the lifecycle of electronics inventory in your business.
            The organic layout allows the free flow of information to the
            correct people within your organixation.
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
            <span>
              <h1 className="portfolio-elin-font-nunito">NUNITO</h1>
            </span>
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
            <span className="portfolio-elin-font-cabin">CABIN</span>
            <div className="portfolio-elin-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>100</li>
                <li>200</li>
                <li>300</li>
                <li>400</li>
                <li>500</li>
                <li>600</li>
                <li>700</li>
                <li>800</li>
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
