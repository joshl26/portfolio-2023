import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import ToggleButton from "../data/lottie/toggleButton.json";
import "./ColorMode.css";

const ColorMode = (props) => {
  const { onColorModeChangeHandler, colorMode } = props;

  const lottieRef = useRef();

  const onLottieClickHandler = () => {
    if (colorMode === "dark") {
      // lottieRef.current.playSegments([0, 22], true);
      onColorModeChangeHandler();
    }

    if (colorMode === "light") {
      // lottieRef.current.playSegments([22, 0], true);
      onColorModeChangeHandler();
    }

    // console.log(lottieRef.current.getDuration(true));
  };

  useEffect(() => {
    if (colorMode === "dark") {
      lottieRef.current.goToAndStop(0, true);
    }
    if (colorMode === "light") {
      lottieRef.current.goToAndStop(23, true);
    }
  }, [colorMode]);

  return (
    <Lottie
      className="lottie_container"
      lottieRef={lottieRef}
      animationData={ToggleButton}
      onClick={() => onLottieClickHandler()}
      autoplay={false}
      loop={false}
    />
  );
};

export default ColorMode;
