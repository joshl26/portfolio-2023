import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import React, { Suspense } from "react";
import { framerMotionConfig } from "../config";
import CanvasContainer from "./CanvasContainer";
import ColorMode from "./ColorMode";
import LoadingScreen from "./LoadingScreen";
import Menu from "./Menu";
import { useOutletContext } from "react-router-dom";

const PortfolioExperimental = () => {
  const [
    colorMode,
    onColorModeChangeHandler,
    section,
    menuOpened,
    setSection,
    setMenuOpened,
    canvasBackGroundColor,
  ] = useOutletContext();

  return (
    <Suspense fallback={<LoadingScreen colorMode={colorMode} />}>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <ColorMode
          colorMode={colorMode}
          onColorModeChangeHandler={onColorModeChangeHandler}
        />
        <Menu
          section={section}
          menuOpened={menuOpened}
          onSectionChange={setSection}
          setMenuOpened={setMenuOpened}
          colorMode={colorMode}
        />
        <Canvas
          style={{ height: "100vh" }}
          shadows
          camera={{ position: [8, 12, 8], rotation: [0, 0, 0], fov: 60 }}
        >
          <ambientLight position={(0, 0, 0)} color="white" intensity="1.5" />
          <color attach="background" args={[canvasBackGroundColor]} />
          <CanvasContainer
            colorMode={colorMode}
            onSectionChange={setSection}
            section={section}
            menuOpened={menuOpened}
            onColorModeChangeHandler={onColorModeChangeHandler}
            setMenuOpened={setMenuOpened}
          />
        </Canvas>
      </MotionConfig>
      <Leva hidden />
    </Suspense>
  );
};

export default PortfolioExperimental;
