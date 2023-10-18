import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Portfolio.css";
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
          <p className="portfolio-p">
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
          <p className="portfolio-p">
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
      <section className="portfolio-main-section">
        <div>
          <h2 className="portfolio-h2">ENGINEERING EXPERIENCE</h2>
        </div>
        <Row>
          <Col md={12} lg={4}>
            <div className="experience-card">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"JUNIOR SOFTWARE DEV/WEBSITE DESIGNER/SQL ADMIN"}
              />
              <h4 className="portfolio-about-h4">OCT 2006 - FEB 2018</h4>
              <ul className="portfolio-about-list">
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
                <li>
                  Successful application and receipt of a $50,000 grant towards
                  the training of the Engineering department, via the Yves
                  Landry Foundation.
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
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"PHOTOSHOP"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"ILLUSTRATOR"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"INDESIGN"}
                />
              </div>
            </div>
            <div className="spacer-small"></div>
          </Col>
          <Col md={12} lg={4}>
            <div className="experience-card">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"SOFTWARE DEVELOPER (LISP)/GRAPHIC DESIGNER"}
              />
              <h4 className="portfolio-about-h4">MAR 2018 - FEB 2022</h4>
              <ul className="portfolio-about-list">
                <li>
                  Created custom AutoCAD LISP routines to take CAD drawings from
                  Autodesk Inventor and convert them to native AutoCAD 2000 file
                  type. The layers, line colors, type, and weights were adjusted
                  while conforming to the company's standards which were precise
                  and pre-determined by years of experience.
                </li>
                <li>
                  These LISP routines have helped to save the engineering
                  department hours of extra work that was spent doing this by
                  hand when the routines achieve a better result in seconds.
                </li>
                <li>
                  Participated in several successful Research and Development
                  projects including Pilot1000 Stretch Wrapper, Automatic Film
                  Cut Mechanism, and Rover Mobile Battery Powered Stretch
                  Wrapper.
                </li>
                <li>
                  Managed Robotic Weld Cell creation thru installation created a
                  marked improvement in factory throughput. Designed and
                  commissioned dozens of custom weld fixtures for every major
                  product line.
                </li>
                <li>
                  Oversaw administration of Autodesk Inventor Vault containing
                  upwards of 50,000 individual parts, assemblies, and drawings.
                  Mentoring employees in current best practices for the team
                  environment.
                </li>
                <li>
                  Created Autodesk Inventor to DWG export system using LISP
                  routines which export and then reduce/rename the Autocad DWG
                  layers to match Cousins Engineering Standards.
                </li>
              </ul>
              <div>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"AUTOCAD"}
                />
                <RoundButton buttonClass={"round-button"} buttonText={"LISP"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"TYPESCRIPT"}
                />
                <RoundButton buttonClass={"round-button"} buttonText={"HMI"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"ADOBE"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"PHOTOSHOP"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"ILLUSTRATOR"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"JQUERY"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LOGO DESIGN"}
                />
              </div>
            </div>
            <div className="spacer-small"></div>
          </Col>
          <Col md={12} lg={4}>
            <div className="experience-card">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LEAD SOFTWARE DEVELOPER/ENGINEERING MANAGER"}
              />
              <h4 className="portfolio-about-h4">SEPT 2022 - CURRENT</h4>
              <ul className="portfolio-about-list">
                <li>
                  Develop and maintain web applications using React, TypeScript,
                  MySQL, MongoDB, AWS and Google Cloud.
                </li>
                <li>
                  Develop cloud-based industrial WiFi IOT sensors using ESP8266,
                  ESP32 microcontrollers running modified C++ software. Utilize
                  MQTT data transmission protocol (PUB/SUB).
                </li>
                <li>
                  Develop Touchscreen HMI UI/UX to support customers'
                  requirements, combining previous skills in electromechanical
                  engineering with my latest skillset in web development and
                  programming.
                </li>
                <li>
                  Develop Machine learning and Machine vision algorithms to
                  support future projects in robotics and self-driving vehicles.
                </li>
                <li>
                  Write clean, maintainable, and testable code. Red-to-green
                  testing is not nice to have, it's a requirement.
                </li>
                <li>
                  Stay up-to-date with emerging technologies and industry trends
                  by participating in online code reviews. Or contributing to
                  the development of best practices and coding standards in the
                  industry by attending in-person events.
                </li>
                <li>
                  Troubleshoot and debug software issues in a timely and
                  effective manner.
                </li>
                <li>
                  Enjoy volunteering in the community through open-source
                  programming projects, most recently on two projects for
                  Hacktoberfest 2023.
                </li>
                <li>
                  Provide professional robotics and automation engineering
                  design, stress calculations, manufacturing tolerances,
                  drafting services and engineering drawings.
                </li>
                <li>
                  Familiar with containerizing applications for shipping using
                  Docker in combination with Kubernetes.
                </li>
              </ul>
              <section>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"HTML5"}
                />
                <RoundButton buttonClass={"round-button"} buttonText={"CSS3"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"JAVASCRIPT"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"REACT"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"MYSQL"}
                />
                <RoundButton buttonClass={"round-button"} buttonText={"AWS"} />
                <RoundButton buttonClass={"round-button"} buttonText={"C++"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"UI/UX DESIGN"}
                />
                <RoundButton buttonClass={"round-button"} buttonText={"SEO"} />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SECURITY"}
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"DATABASE DESIGN"}
                />
              </section>
            </div>
          </Col>
        </Row>
      </section>
      <div className="spacer"></div>
    </main>
  );
};

export default PortfolioAbout;
