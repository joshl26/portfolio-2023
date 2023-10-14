import React from "react";
import { Col, Row } from "react-bootstrap";
import "./PortfolioPomodor.css";
import RoundButton from "./RoundButton";

const PortfolioAbout = () => {
  return (
    <main className="main-container">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">ABOUT</h1>
      </section>
      <div className="spacer-small"></div>
      <section>
        <div>
          <p className="portfolio-pomodoro-p">
            With 17 years of combined experience in software engineering,
            full-stack programming, web development, mechanical engineering,
            robotics, and automation, I am a versatile and creative
            problem-solver who can deliver innovative digital solutions for
            various industries and domains. I have multiple certifications in
            SolidWorks, web development, and React, as well as strong
            programming skills in C#, Linux, SQL, and C++.
          </p>
        </div>
        <div>
          <p className="portfolio-pomodoro-p">
            Currently, I am a Software Engineer at Blackrock Design Haus, where
            I develop and maintain web applications using React, TypeScript,
            MySQL, MongoDB, AWS, and Google Cloud. I also develop cloud-based
            industrial WiFi IOT sensors using ESP8266 and ESP32
            microcontrollers, and machine learning and machine vision algorithms
            for robotics and self-driving vehicles projects. I enjoy
            collaborating with all parties to design and implement user-friendly
            and functional interfaces, systems, and devices that meet the needs
            and expectations of the clients and users. My goal is to continue
            learning and growing as a web developer, full-stack programmer, and
            software engineer, and to contribute to the advancement and
            innovation of the digital world.
          </p>
        </div>
      </section>
      <section className="portfolio-pomodoro-section">
        <div>
          <h2 className="portfolio-pomodoro-h2">ENGINEERING EXPERIENCE</h2>
        </div>
        <Row>
          <Col md={12} lg={4}>
            <div className="experience-card">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"JUNIOR SOFTWARE DEV/WEBSITE DESIGNER/SQL ADMIN"}
              />
              <h4 className="portfolio-about-h4">OCT 2006 - FEB 2018</h4>
              <ul>
                <li>
                  Coded custom SQL queries/views/detailed cost reports using
                  Crystal in conjunction with Infor VISUAL Manufacturing CRM SQL
                  Server database to produce stunning, live data cost reports
                  for the CEO of the company.
                </li>
                <li>
                  Developed custom VB applications to allow the Engineering
                  department to interface with SolidWorks 3D CAD design
                  software. The program opens a new window within the SolidWorks
                  application. This window has multiple sliders and input boxes
                  that allow live control of model constraints. This was
                  accomplished by using SolidWork's built-in API.
                </li>
                <li>
                  Worked with a local studio to design/produce a WordPress
                  website: nyemfg.ca. Utilized open source program Blender and
                  Adobe Creative suite (PS, Ai, id) to accomplish this.
                </li>
                <li>
                  Custom programming of Siemens Micromaster VFD AC drive
                  controllers to regulate the HVAC system in a large welding
                  shop. Features a custom user interface. This upgrade resulted
                  in a 20% increase in air quality during periods of heavy
                  welding.
                </li>
              </ul>
              <div>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SQL SERVER"}
                />
                <RoundButton buttonClass={"round-button"} buttonText={"ODBC"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"CRYSTAL REPORTS"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"INFOR VISUAL"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"WORDPRESS"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"VISUAL BASIC"}
                />

                <RoundButton buttonClass={"round-button"} buttonText={"API"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"ADOBE"}
                />
                <RoundButton buttonClass={"round-button"} buttonText={"PS"} />
                <RoundButton buttonClass={"round-button"} buttonText={"Ai"} />
                <RoundButton buttonClass={"round-button"} buttonText={"id"} />
              </div>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="experience-card">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"AUTOCAD LISP PROGRAMMER/HMI TOUCHSCREEN DESIGN"}
              />

              <h4 className="portfolio-about-h4">MAR 2018 - FEB 2022</h4>
              <ul>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
              </ul>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="experience-card">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LEAD SOFTWARE DEVELOPER/ENGINEERING MANAGER"}
              />
              <h4 className="portfolio-about-h4">SEPT 2022 - CURRENT</h4>
              <ul>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
              </ul>
              <RoundButton buttonClass={"round-button"} buttonText={"TEST"} />
            </div>
          </Col>
        </Row>
      </section>
      <div className="spacer-small"></div>
    </main>
  );
};

export default PortfolioAbout;
