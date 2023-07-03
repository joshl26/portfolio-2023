import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import ToggleButton from "../data/lottie/toggleButton.json";
import "./ColorMode.css";

const ColorMode = (props) => {
  const { onColorModeChangeHandler, colorMode } = props;

  const lottieRef = useRef();

  const onLottieClickHandler = () => {
    if (colorMode === "light") {
      lottieRef.current.playSegments([0, 22], true);
      onColorModeChangeHandler();
    } else {
      lottieRef.current.playSegments([22, 0], true);
      onColorModeChangeHandler();
    }

    // console.log(lottieRef.current.getDuration(true));
  };

  useEffect(() => {
    if (colorMode === "light") {
      lottieRef.current.goToAndStop(0, true);
    } else {
      lottieRef.current.goToAndStop(23, true);
    }
  }, []);

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
