import React from "react";
import Lottie from "lottie-react";
import signature from "../data/lottie/SignatureDark.json";

import { motion } from "framer-motion";
import "./Interface.css";
import { Col, Container, Row } from "react-bootstrap";
import linkedInIcon from "../data/images/LinkedIn_Icon.svg";
import webIcon from "../data/images/Web_Icon.svg";
import gitHubIcon from "../data/images/GitHub_Icon.svg";
import wordPressIcon from "../data/images/wordpress_Icon.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useCallback, useEffect, useRef, useState } from "react";

const REACT_APP_SITE_KEY = "6LcIowYkAAAAAJAFOPqSUkepQZyQHB7-GFo5bjSb";
const EMAIL_JS_SERVICEID = "service_45dcwgn";
const EMAIL_JS_TEMPLATEID = "template_n48n2mb";

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
  const { onSectionChange } = props;

  return (
    <>
      <AboutSection onSectionChange={onSectionChange} />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

const AboutSection = (props) => {
  const { onSectionChange } = props;

  return (
    <Section>
      <div className="interface_spacer"></div>
      <h1>
        Hi, I'm
        <br />
        <span>Joshua Lehman</span>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        I am a coder passionate about 3D graphics
        <br />
        See what I have to offer
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        onClick={() => onSectionChange(3)}
      >
        Contact Me
      </motion.button>
    </Section>
  );
};

const SkillsSection = () => {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, x: -100, y: 100 }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: 100,
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        Passionate Programmer
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, x: -100, y: 200 }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: 200,
          transition: { duration: 1, delay: 2.5 },
        }}
      >
        Five plus years software engineering
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, x: -100, y: 300 }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: 300,
          transition: { duration: 1, delay: 3.5 },
        }}
      >
        Dedicated to Quality
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, x: -100, y: 400 }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: 400,
          transition: { duration: 1, delay: 4.5 },
        }}
      >
        Always Learning new Skills
      </motion.h2>
    </Section>
  );
};

const ContactSection = () => {
  const [captcha, setCaptcha] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function onChange(value) {
    setCaptcha(value);
    console.log("Captcha value:", value);
    console.log(value);
  }

  useEffect(() => {
    setEmailSent(false);
    setConfirmReceipt(false);
  }, []);

  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const formSubmitHandler = useCallback((event) => {
    const templateId = EMAIL_JS_TEMPLATEID;

    setEmailSent(true);

    event.preventDefault();

    const data = {
      name: nameInput.current?.value,
      email: emailInput.current?.value,
      message: messageInput.current?.value,
    };

    sendFeedback(templateId, data);

    // console.log("Form submit handler");
    // console.log(data);
  });

  async function sendFeedback(templateId, variables) {
    window.emailjs
      .send(EMAIL_JS_SERVICEID, templateId, variables)
      .then((res) => {
        setEmailSent(true);
        setConfirmReceipt(true);
      })
      .catch((err) => {
        setEmailSent(false);
        setConfirmReceipt(false);
        setEmailError(emailError);
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
      });
  }

  return (
    <Section>
      <div className="interface_spacer_small"></div>
      <Container className="contact_container">
        <Row>
          <Col xs={6} md={5} sm={5} lg={5}>
            <Row>
              <h2 className="interface_label">Contact me</h2>
            </Row>
            <form onSubmit={formSubmitHandler}>
              <Row>
                <label for="name" className="interface_label">
                  Name
                </label>
                <input
                  ref={nameInput}
                  type="text"
                  name="name"
                  id="name"
                  className=""
                />
              </Row>
              <Row>
                <label for="email" className="interface_label">
                  Email
                </label>
                <input
                  ref={emailInput}
                  type="email"
                  name="email"
                  id="email"
                  className=""
                />
              </Row>
              <Row>
                <label for="email" className="interface_label">
                  Message
                </label>
                <textarea
                  ref={messageInput}
                  name="message"
                  id="message"
                  className=""
                />
              </Row>
              <div className="interface_spacer_xsmall"></div>
              {captcha ? (
                <button
                  type="submit"
                  data-sitekey="reCAPTCHA_site_key"
                  data-callback="onSubmit"
                  data-action="submit"
                >
                  Submit
                </button>
              ) : (
                ""
              )}
            </form>
            <ReCAPTCHA
              sitekey={REACT_APP_SITE_KEY}
              onChange={onChange}
              className="recaptcha"
            />
            <div className="interface_spacer_small"></div>

            <Row>
              <Col className="social_col" xs={6} md={3}>
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
              <Col className="social_col" xs={6} md={3}>
                <Container>
                  <div className="spacer"></div>
                  <a href="https://github.com/joshl26/">
                    <img className="socialmedia_icon" src={gitHubIcon} alt="" />
                  </a>
                </Container>
                <div className="spacer"></div>
              </Col>
              <Col className="social_col" xs={6} md={3}>
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
              <Col className="social_col" xs={6} md={3}>
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
            {/* <Lottie
              className="svg_animate"
              animationData={signature}
              loop={true}
            /> */}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Section>
  );
};

const PortfolioSection = () => {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, x: -100, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: 0,
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        Portfolio Section
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, x: -100, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: 0,
          transition: { duration: 1, delay: 2.5 },
        }}
      >
        Currently In Progress, Coming soon late June 2023!!
      </motion.h2>
    </Section>
  );
};

export default Interface;
