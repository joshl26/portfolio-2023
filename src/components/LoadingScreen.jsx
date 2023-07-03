import "./LoadingScreen.css";

import { Row } from "react-bootstrap";

import { useProgress } from "@react-three/drei";

import Lottie from "lottie-react";
import loadingCube from "../data/lottie/abstractCube.json";

const LoadingScreen = (props) => {
  const { colorMode } = props;

  const fontColormode = (styleClass) => {
    if (colorMode === "light") {
      return `${styleClass} font_light`;
    } else {
      return `${styleClass} font_dark`;
    }
  };

  const LoadingScreenStyle =
    colorMode === "light" ? "loading_screen_light" : "loading_screen_dark";

  const { progress } = useProgress();

  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <section className={LoadingScreenStyle}>
      <div className="spacer_small"></div>
      <Row>
        <h1 className={fontColormode("")} style={{ textAlign: "center" }}>
          Hold on one second...
        </h1>
      </Row>
      <Row>
        <h2 className={fontColormode("")} style={{ textAlign: "center" }}>
          Loading: {Math.floor(progress)}%...
        </h2>
      </Row>
      <Row>
        <Lottie
          className="svg_animate"
          animationData={loadingCube}
          loop={true}
        />
      </Row>
      <Row>
        <h2 className={fontColormode("")} style={{ textAlign: "center" }}>
          Loading the Awesomeness!
        </h2>
      </Row>

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
