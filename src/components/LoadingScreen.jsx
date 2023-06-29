import "./LoadingScreen.css";

import { Col, Row } from "react-bootstrap";

import { useProgress } from "@react-three/drei";

import Lottie from "lottie-react";
import loadingCube from "../lottie/abstractCube.json";

const LoadingScreen = () => {
  //   const LoadingScreenStyle =
  //     colorMode === "light" ? "loading_screen_light" : "loading_screen_dark";

  const LoadingScreenStyle = "";
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <section className={LoadingScreenStyle}>
      <Row xs="auto" className="header_container">
        <Col>
          <h1 style={{ textAlign: "center" }} className="loading_header">
            Hold on one second...
          </h1>
          <h2 style={{ textAlign: "center" }} className="loading_header_2">
            Loading the Awesomeness!
          </h2>
          <div>
            <h2>Loading: {Math.floor(progress)}%...</h2>
          </div>
        </Col>
      </Row>
      <div className="canvas_container">
        <Lottie
          className="svg_animate"
          animationData={loadingCube}
          loop={true}
        />
      </div>
    </section>
  );
};

export default LoadingScreen;
