import React, { useRef, useState } from "react";
import "./PortfolioPomodor.css";
import emailjs from "@emailjs/browser";
import linkedInIcon from "../data/images/LinkedIn_Icon.svg";
import webIcon from "../data/images/Web_Icon.svg";
import gitHubIcon from "../data/images/GitHub_Icon.svg";
import wordPressIcon from "../data/images/wordpress_Icon.svg";
import "./Interface.css";
import { Col, Container, Row } from "react-bootstrap";
import { PopupButton } from "react-calendly";
import TopicRadio from "./TopicRadio";

const EMAIL_JS_SERVICEID = "service_45dcwgn";
const EMAIL_JS_TEMPLATEID = "template_n48n2mb";
const EMAIL_JS_PUBLIC_KEY = "87SpQ-1mR0MN2Rug9";

const ContactSection = (props) => {
  const { fontColormode, colorMode } = props;

  // const [captcha, setCaptcha] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [topic, setTopic] = useState("Comment");

  var correctedColorMode = colorMode === "light" ? "dark" : "light";

  const onTopicChanged = (e) => {
    setTopic(e.target.innerHTML);
    console.log(topic);
  };

  // useEffect(() => {}, [emailSent, confirmReceipt, topic, setTopic]);

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
    <section>
      <div className="interface-spacer-small"></div>
      <Container className="contact-container">
        <Row>
          <Col>
            <Row>
              <div className="interface-spacer-small"></div>
              <h3 className={fontColormode("contact-h3")}>
                Schedule a time with Calendly:
              </h3>
              <div className="interface-spacer-small"></div>
              <Container>
                <Row>
                  <Col md={1}></Col>
                  <Col style={{ textAlign: "center" }}>
                    <PopupButton
                      url="https://calendly.com/joshlehman-dev"
                      rootElement={document.getElementById("root")}
                      text="Click here to schedule!"
                      className="schedule-button"
                    />
                  </Col>
                  <Col md={1}></Col>
                </Row>
              </Container>
            </Row>
            <div className="interface-spacer-small"></div>
            <Row>
              <div className="interface-spacer-small"></div>
              <h3 className={fontColormode("contact-h3")}>
                OR Send a message with Email:
              </h3>
            </Row>
            <form ref={form} id="contact-form" onSubmit={sendEmail}>
              {emailSent === false ? (
                <>
                  <Col>
                    <Row>
                      <label
                        htmlFor="name"
                        className={fontColormode("interface-label")}
                      >
                        Name
                      </label>
                    </Row>
                    <Row>
                      <Container>
                        <input
                          placeholder="Full name"
                          autoComplete="given-name"
                          required
                          type="text"
                          name="name"
                          id="name"
                          className="input"
                        />
                      </Container>
                    </Row>
                  </Col>
                  <div className="interface-spacer-xsmall"></div>
                  <Row>
                    <label
                      htmlFor="email"
                      className={fontColormode("interface-label")}
                    >
                      Email
                    </label>
                  </Row>
                  <Row>
                    <Container>
                      <input
                        placeholder="Email address"
                        autoComplete="off"
                        required
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                      />
                    </Container>
                  </Row>
                  <div className="interface-spacer-xsmall"></div>
                  <Row>
                    <label
                      htmlFor="topic"
                      className={fontColormode("interface-label")}
                    >
                      Choose a Topic
                    </label>
                  </Row>
                  <Row>
                    <TopicRadio
                      colorMode={correctedColorMode}
                      onTopicChanged={onTopicChanged}
                    />
                  </Row>
                  <div className="interface-spacer-xsmall"></div>
                  <Row>
                    <label
                      htmlFor="message"
                      className={fontColormode("interface-label")}
                    >
                      Message
                    </label>
                  </Row>
                  <Row>
                    <Container>
                      <textarea
                        placeholder="Type message"
                        required
                        name="message"
                        id="message"
                        className="contact-text-area"
                      />
                    </Container>
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <label
                      htmlFor="name"
                      className={fontColormode("interface-label")}
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
                      className={fontColormode("interface-label")}
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
                      className={fontColormode("interface-label")}
                    >
                      Topic
                    </label>
                    <TopicRadio disabled={true} />
                  </Row>
                  <Row>
                    <label
                      htmlFor="message"
                      className={fontColormode("interface-label")}
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
              <div className="interface-spacer-small"></div>
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
                      Submit Message
                    </button>
                  ) : (
                    <p className="email-sent">
                      Message sent, awaiting confirmation...
                    </p>
                  )}
                  {emailSent === true && confirmReceipt === true ? (
                    <p className="email-confirmation">
                      Message received! <br />
                      Check your inbox to confirm.
                    </p>
                  ) : (
                    <p className="email-confirmation">{emailError}</p>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
          <div className="spacer-small"></div>
          <Row>
            <Col className="social-col" xs={3} md={3}>
              <Container className="text-center">
                <div className="spacer"></div>
                <a href="https://www.linkedin.com/in/joshrlehman/">
                  <img
                    className="socialmedia-icon"
                    src={linkedInIcon}
                    alt="Linked In Icon"
                  />
                </a>
              </Container>
              <div className="spacer"></div>
            </Col>
            <Col className="social-col" xs={3} md={3}>
              <Container>
                <div className="spacer"></div>
                <a href="https://github.com/joshl26/">
                  <img className="socialmedia-icon" src={gitHubIcon} alt="" />
                </a>
              </Container>
              <div className="spacer"></div>
            </Col>
            <Col className="social-col" xs={3} md={3}>
              <Container className="text-center">
                <div className="spacer"></div>
                <a href="http://www.blackrock3d.ca/">
                  <img
                    className="socialmedia-icon"
                    src={wordPressIcon}
                    alt="Web Icon"
                  />
                </a>
              </Container>
              <div className="spacer"></div>
            </Col>
            <Col className="social-col" xs={3} md={3}>
              <Container className="text-center">
                <div className="spacer"></div>
                <a href="mailto:joshlehman.dev@gmail.com">
                  <img
                    className="socialmedia-icon"
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
    </section>
  );
};

const PortfolioContact = ({ colorMode }) => {
  const fontColormode = (styleClass) => {
    if (colorMode === "light") {
      return `${styleClass} font-light`;
    } else {
      return `${styleClass} font-dark`;
    }
  };
  return (
    <main className="main-container">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">CONTACT</h1>
      </section>
      <ContactSection colorMode={colorMode} fontColormode={fontColormode} />
    </main>
  );
};

export default PortfolioContact;
