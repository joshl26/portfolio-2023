import "./LoadingScreen.css";
import { Row } from "react-bootstrap";
import { useProgress } from "@react-three/drei";
import Lottie from "lottie-react";
import loadingCube from "../data/lottie/abstractCube.json";
import React from "react";

const LoadingScreen = (props) => {
  const { colorMode } = props;

  const fontColormode = (styleClass) => {
    if (colorMode === "light") {
      return `${styleClass} font-light`;
    } else {
      return `${styleClass} font-dark`;
    }
  };

  const LoadingScreenStyle =
    colorMode === "light" ? "loading-screen-light" : "loading-screen-dark";

  const { progress } = useProgress();

  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <section className={LoadingScreenStyle}>
      <div className="loading-spacer-small"></div>
      <Row className="row-one">
        <h1 className={fontColormode("loading-header")}>
          Hold on one second...
        </h1>

        <h3 className={fontColormode("loading-header-3")}>
          Loading: {Math.floor(progress)}%...
        </h3>
      </Row>
      <div className="loading-spacer-small"></div>
      <Row>
        <Lottie
          className="svg-animate"
          animationData={loadingCube}
          loop={true}
        />
      </Row>
      <Row className="row-one">
        <h2 className={fontColormode("loading-header-2")}>
          Loading the Awesomeness!
        </h2>
      </Row>
      <div className="loading-spacer-small"></div>
      {/* <div className="canvas_container">
        <Lottie
          className="svg_animate"
          animationData={loadingCube}
          loop={true}
        />
      </div> */}
    </section>
  );
};

export default LoadingScreen;
