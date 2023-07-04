import React from "react";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import "./Interface.css";
import { Col, Container, Row } from "react-bootstrap";
import linkedInIcon from "../data/images/LinkedIn_Icon.svg";
import webIcon from "../data/images/Web_Icon.svg";
import gitHubIcon from "../data/images/GitHub_Icon.svg";
import wordPressIcon from "../data/images/wordpress_Icon.svg";
// import ReCAPTCHA from "react-google-recaptcha";
import { useCallback, useEffect, useRef, useState } from "react";

// const REACT_APP_SITE_KEY = "6LcIowYkAAAAAJAFOPqSUkepQZyQHB7-GFo5bjSb";
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
  const { onSectionChange, colorMode } = props;

  const { viewport } = useThree();

  console.log(viewport);
  console.log(
    "Viewport Height: " +
      viewport.height +
      ", Viewport Width: " +
      viewport.width
  );

  console.log(
    "Viewport Height px: " +
      viewport.height * viewport.factor +
      ", Viewport Width px: " +
      viewport.width * viewport.factor
  );

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
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: viewport.height * viewport.factor - 350,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            Hi, I'm
            <br />
            <span>Joshua Lehman</span>
          </motion.h1>
          <motion.p
            className={fontColormode("interface_about_p")}
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              y: viewport.height * viewport.factor - 350,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            A passionate programmer.
            <br />
            Always learning new skills.
            <br />
            See what I have to offer!
          </motion.p>
          <motion.button
            className="learn-more-button"
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              y: viewport.height * viewport.factor - 350,
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
            initial={{ opacity: 0, x: 0, y: 0 }}
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
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              y: viewport.height * viewport.factor - 200,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            A passionate programmer.
            <br />
            Always learning new skills.
            <br />
            See what I have to offer!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
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
        initial={{ opacity: 0, x: -100, y: viewport.height }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: viewport.height * 2.5,
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        Passionate Programmer
      </motion.h2>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: -100, y: viewport.height }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: viewport.height * 7.5,
          transition: { duration: 1, delay: 2.5 },
        }}
      >
        Five plus years software engineering
      </motion.h2>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: -100, y: viewport.height }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: viewport.height * 12.5,
          transition: { duration: 1, delay: 3.5 },
        }}
      >
        Dedicated to Quality
      </motion.h2>
      <motion.h2
        className={fontColormode("interface_about_h2")}
        initial={{ opacity: 0, x: -100, y: 400 }}
        whileInView={{
          opacity: 1,
          x: 25,
          y: viewport.height * 17.5,
          transition: { duration: 1, delay: 4.5 },
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
  // const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // function onChange(value) {
  //   setCaptcha(value);
  //   console.log("Captcha value:", value);
  //   console.log(value);
  // }

  useEffect(() => {
    setEmailSent(false);
    // setConfirmReceipt(false);
  }, []);

  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const formSubmitHandler = useCallback(
    (event) => {
      const templateId = EMAIL_JS_TEMPLATEID;

      setEmailSent(true);

      event.preventDefault();

      const data = {
        name: nameInput.current?.value,
        email: emailInput.current?.value,
        message: messageInput.current?.value,
      };

      function sendFeedback(templateId, variables) {
        window.emailjs
          .send(EMAIL_JS_SERVICEID, templateId, variables)
          .then((res) => {
            setEmailSent(true);
            // setConfirmReceipt(true);
          })
          .catch((err) => {
            setEmailSent(false);
            // setConfirmReceipt(false);
            setEmailError(emailError);
            console.error(
              "Oh well, you failed. Here some thoughts on the error that occured:",
              err
            );
          });
      }

      sendFeedback(templateId, data);

      // console.log("Form submit handler");
      // console.log(data);
    },
    [emailError]
  );

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
            <form id="contact-form" onSubmit={formSubmitHandler} method="POST">
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
                      required
                      ref={nameInput}
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
                      required
                      ref={emailInput}
                      type="email"
                      name="email"
                      id="email"
                      className=""
                    />
                  </Row>
                  <Row>
                    <label
                      htmlFor="message"
                      className={fontColormode("interface_label")}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      ref={messageInput}
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
                      ref={nameInput}
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
                      ref={emailInput}
                      type="email"
                      name="email"
                      id="email"
                      className=""
                    />
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
                      ref={messageInput}
                      name="message"
                      id="message"
                      className="contact-text-area"
                    />
                  </Row>
                </>
              )}

              <div className="interface_spacer_xsmall"></div>
              {emailSent === false ? (
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
                <p className="email_confirmation">Receipt confirmed!</p>
              )}
            </form>
            {/* <div className="captcha_container">
              <ReCAPTCHA
                size="compact"
                className="captcha"
                sitekey={REACT_APP_SITE_KEY}
                onChange={onChange}
              />
            </div> */}

            {/* <Lottie
              className="svg_animate"
              animationData={signature}
              loop={true}
            /> */}
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
        {/* <motion.h3
          className={fontColormode("interface_about_h3")}
          initial={{ opacity: 0, x: 0, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: viewport.height * 4,
            transition: { duration: 1, delay: 1.5 },
          }}
        >
          Made by Joshua Lehman
        </motion.h3> */}
      </Container>
    </Section>
  );
};

const PortfolioSection = (props) => {
  const { fontColormode } = props;
  return (
    <Section>
      <motion.h2
        className={fontColormode("interface_about_h2")}
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
        className={fontColormode("interface_about_h2")}
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
