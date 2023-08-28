import React, { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import emailjs from "@emailjs/browser";
import linkedInIcon from "../data/images/LinkedIn_Icon.svg";
import webIcon from "../data/images/Web_Icon.svg";
import gitHubIcon from "../data/images/GitHub_Icon.svg";
import wordPressIcon from "../data/images/wordpress_Icon.svg";
import "./Interface.css";

const EMAIL_JS_SERVICEID = "service_45dcwgn";
const EMAIL_JS_TEMPLATEID = "template_n48n2mb";
const EMAIL_JS_PUBLIC_KEY = "87SpQ-1mR0MN2Rug9";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="section-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const Interface = (props) => {
  const { onSectionChange, colorMode, viewport } = props;

  const fontColormode = (styleClass) => {
    if (colorMode === "light") {
      return `${styleClass} font_light`;
    } else {
      return `${styleClass} font_dark`;
    }
  };

  return (
    <>
      <AboutSection
        fontColormode={fontColormode}
        onSectionChange={onSectionChange}
        viewport={viewport}
      />
      <SkillsSection fontColormode={fontColormode} viewport={viewport} />
      <PortfolioSection fontColormode={fontColormode} viewport={viewport} />
      <ContactSection fontColormode={fontColormode} viewport={viewport} />
    </>
  );
};

const AboutSection = (props) => {
  const { onSectionChange, fontColormode, viewport } = props;

  return (
    <Section>
      {viewport.width * viewport.factor >= 768 ? (
        <>
          <motion.h1
            className={fontColormode("interface_about_h1")}
            initial={{
              opacity: 0,
              x: -100,
              y: viewport.height * viewport.factor * 0.58,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor * 0.58,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            Hi, I'm
            <br />
            <span>Joshua Lehman</span>
          </motion.h1>
          <motion.p
            className={fontColormode("interface_about_p")}
            initial={{
              opacity: 0,
              x: -100,
              y: viewport.height * viewport.factor * 0.59,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor * 0.59,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            Digital Craftsman.
            <br />
            Always learning new Skills.
            <br />
            Scroll down to Explore!
          </motion.p>
          <motion.button
            className="learn-more-button"
            initial={{
              opacity: 0,
              x: -100,
              y: viewport.height * viewport.factor * 0.6,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor * 0.6,
              transition: { duration: 1, delay: 2.5 },
            }}
            onClick={() => onSectionChange(1)}
          >
            Learn More Below
          </motion.button>
        </>
      ) : (
        <>
          <motion.h1
            className={fontColormode("interface_about_h1")}
            initial={{
              opacity: 0,
              x: -100,
              y: viewport.height * viewport.factor - 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor - 200,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            Hi, I'm
            <br />
            <span>Joshua Lehman</span>
          </motion.h1>
          <motion.p
            className={fontColormode("interface_about_p")}
            initial={{
              opacity: 0,
              x: -100,
              y: viewport.height * viewport.factor - 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor - 200,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            Digital Craftsman.
            <br />
            Always learning new Skills.
            <br />
            Scroll down to Explore!
          </motion.p>
          <motion.button
            className="learn-more-button"
            initial={{
              opacity: 0,
              x: -100,
              y: viewport.height * viewport.factor - 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor - 200,
              transition: { duration: 1, delay: 2.5 },
            }}
            onClick={() => onSectionChange(1)}
          >
            Learn More Below
          </motion.button>
        </>
      )}
    </Section>
  );
};

const SkillsSection = (props) => {
  const { fontColormode } = props;
  const { viewport } = useThree();
  return (
    <Section>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 5,
          y: viewport.height * viewport.factor * 0.125,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        Passionate Programmer
      </motion.h2>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 5,
          y: viewport.height * viewport.factor * 0.25,
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        Five plus years software engineering
      </motion.h2>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 5,
          y: viewport.height * viewport.factor * 0.35,
          transition: { duration: 1, delay: 2.5 },
        }}
      >
        Dedicated to Quality
      </motion.h2>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: -100, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 5,
          y: viewport.height * viewport.factor * 0.45,
          transition: { duration: 1, delay: 3.5 },
        }}
      >
        Continuously pushing the limits!
      </motion.h2>
    </Section>
  );
};

const ContactSection = (props) => {
  const { fontColormode } = props;

  // const [captcha, setCaptcha] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [topic, setTopic] = useState("");

  const onTopicChanged = (e) => {
    setTopic(e.target.innerHTML);
  };

  useEffect(() => {}, [emailSent, confirmReceipt]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailSent(true);

    emailjs
      .sendForm(
        EMAIL_JS_SERVICEID,
        EMAIL_JS_TEMPLATEID,
        form.current,
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(form.current);

          console.log(result.text);
          setConfirmReceipt(true);
        },
        (error) => {
          console.log(error.text);
          setEmailError(error.text);
        }
      );
  };

  return (
    <Section>
      <div className="interface_spacer_small"></div>
      <Container className="contact_container">
        <Row>
          <Col xs={6} md={5} sm={5} lg={5}>
            <Row>
              <h2 className={fontColormode("interface_label contact_h1")}>
                Contact
              </h2>
            </Row>
            <form ref={form} id="contact-form" onSubmit={sendEmail}>
              {emailSent === false ? (
                <>
                  <Row>
                    <label
                      htmlFor="name"
                      className={fontColormode("interface_label")}
                    >
                      Name
                    </label>
                    <input
                      placeholder=" Type a name"
                      autoComplete="given-name"
                      required
                      type="text"
                      name="name"
                      id="name"
                      className=""
                    />
                  </Row>
                  <Row>
                    <label
                      htmlFor="email"
                      className={fontColormode("interface_label")}
                    >
                      Email
                    </label>
                    <input
                      placeholder=" Type an email"
                      autoComplete="off"
                      required
                      type="email"
                      name="email"
                      id="email"
                      className=""
                    />
                  </Row>

                  <Row>
                    <label
                      htmlFor="topic"
                      className={fontColormode("interface_label")}
                    >
                      Topic
                    </label>
                  </Row>
                  <Row>
                    <input
                      readOnly
                      required
                      id="topic"
                      name="topic"
                      type="text"
                      className="topic"
                      placeholder=" Select topic"
                      value={topic}
                      style={{ padding: "0" }}
                    ></input>
                    <DropdownButton
                      variant=""
                      className={fontColormode("type-btn")}
                      title="Select"
                      id="selectTopic"
                    >
                      <Dropdown.Item
                        className={fontColormode("dropdown")}
                        onClick={(e) => onTopicChanged(e)}
                        href="#"
                      >
                        Standard Comment
                      </Dropdown.Item>
                      <Dropdown.Item
                        className={fontColormode("dropdown")}
                        onClick={(e) => onTopicChanged(e)}
                        href="#"
                      >
                        Recruiter Query
                      </Dropdown.Item>
                      <Dropdown.Item
                        className={fontColormode("dropdown")}
                        onClick={(e) => onTopicChanged(e)}
                        href="#"
                      >
                        Work Request
                      </Dropdown.Item>
                      <Dropdown.Item
                        className={fontColormode("dropdown")}
                        onClick={(e) => onTopicChanged(e)}
                        href="#"
                      >
                        Consultation
                      </Dropdown.Item>
                    </DropdownButton>
                  </Row>
                  <Row>
                    <label
                      htmlFor="message"
                      className={fontColormode("interface_label")}
                    >
                      Message
                    </label>
                    <textarea
                      placeholder=" Write a message"
                      required
                      name="message"
                      id="message"
                      className="contact-text-area"
                    />
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <label
                      htmlFor="name"
                      className={fontColormode("interface_label")}
                    >
                      Name
                    </label>
                    <input
                      disabled
                      type="text"
                      name="name"
                      id="name"
                      className=""
                    />
                  </Row>
                  <Row>
                    <label
                      htmlFor="email"
                      className={fontColormode("interface_label")}
                    >
                      Email
                    </label>
                    <input
                      disabled
                      type="email"
                      name="email"
                      id="email"
                      className=""
                    />
                  </Row>
                  <Row>
                    <label
                      htmlFor="topic"
                      className={fontColormode("interface_label")}
                    >
                      Topic
                    </label>
                    <input
                      disabled
                      required
                      id="topic"
                      name="topic"
                      type="text"
                      placeholder="Select a message topic"
                      value={topic}
                      style={{ padding: "0" }}
                    ></input>
                  </Row>
                  <Row>
                    <label
                      htmlFor="message"
                      className={fontColormode("interface_label")}
                    >
                      Message
                    </label>
                    <textarea
                      disabled
                      name="message"
                      id="message"
                      className="contact-text-area"
                    />
                  </Row>
                </>
              )}
              <div className="interface_spacer_xsmall"></div>
              <Row>
                <Col className="submit-btn-col">
                  {emailSent === false && confirmReceipt === false ? (
                    <button
                      className="submit-button"
                      type="submit"
                      data-sitekey="reCAPTCHA_site_key"
                      data-callback="onSubmit"
                      data-action="submit"
                    >
                      Submit
                    </button>
                  ) : (
                    <p className="email_sent">
                      Email sent, awaiting confirmation...
                    </p>
                  )}
                  {emailSent === true && confirmReceipt === true ? (
                    <p className="email_confirmation">Email Received!</p>
                  ) : (
                    <p className="email_confirmation">{emailError}</p>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
          <Col></Col>
          <div className="spacer_small"></div>
          <Row>
            <Col className="social_col" xs={3} md={3}>
              <Container className="text_center">
                <div className="spacer"></div>
                <a href="https://www.linkedin.com/in/joshrlehman/">
                  <img
                    className="socialmedia_icon"
                    src={linkedInIcon}
                    alt="Linked In Icon"
                  />
                </a>
              </Container>
              <div className="spacer"></div>
            </Col>
            <Col className="social_col" xs={3} md={3}>
              <Container>
                <div className="spacer"></div>
                <a href="https://github.com/joshl26/">
                  <img className="socialmedia_icon" src={gitHubIcon} alt="" />
                </a>
              </Container>
              <div className="spacer"></div>
            </Col>
            <Col className="social_col" xs={3} md={3}>
              <Container className="text_center">
                <div className="spacer"></div>
                <a href="http://www.blackrock3d.ca/">
                  <img
                    className="socialmedia_icon"
                    src={wordPressIcon}
                    alt="Web Icon"
                  />
                </a>
              </Container>
              <div className="spacer"></div>
            </Col>
            <Col className="social_col" xs={3} md={3}>
              <Container className="text_center">
                <div className="spacer"></div>
                <a href="mailto:joshlehman.dev@gmail.com">
                  <img
                    className="socialmedia_icon"
                    src={webIcon}
                    alt="Mail Icon"
                  />
                </a>
              </Container>
              <div className="spacer"></div>
            </Col>
          </Row>
        </Row>
      </Container>
    </Section>
  );
};

const PortfolioSection = (props) => {
  const { fontColormode, viewport } = props;
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };
  return (
    <Section>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: -100, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        Portfolio Section
      </motion.h2>

      <div className="interface_spacer_xsmall"></div>
      <Row>
        <Col xs={4} sm={4} md={4}>
          <motion.button
            className="scroll-button"
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor * 0.67,
              transition: { duration: 1, delay: 2.5 },
            }}
            onClick={previousProject}
          >
            ← Prev
          </motion.button>
        </Col>
        <Col xs={4} sm={4} md={4}>
          <motion.p
            className={fontColormode("scroll_p")}
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor * 0.67,
              transition: { duration: 1, delay: 2.5 },
            }}
          ></motion.p>
        </Col>

        <Col xs={4} sm={4} md={4}>
          <motion.button
            className="scroll-button"
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor * 0.67,
              transition: { duration: 1, delay: 2.5 },
            }}
            onClick={nextProject}
          >
            Next →
          </motion.button>
        </Col>
        <motion.h2
          className={fontColormode("interface_about_h2")}
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: viewport.height * viewport.factor * 0.7,
            transition: { duration: 1, delay: 2.5 },
          }}
        >
          Click on any card to see project details.
        </motion.h2>
      </Row>
    </Section>
  );
};

export default Interface;
