import React, { Suspense, useEffect, useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Container } from "react-bootstrap";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorMode from "./components/ColorMode";

const Experience = React.lazy(() => import("./components/Experience"));
const Interface = React.lazy(() => import("./components/Interface"));
const LoadingScreen = React.lazy(() => import("./components/LoadingScreen"));
const ThemeProvider = React.lazy(() => import("react-bootstrap/ThemeProvider"));
const ScrollManager = React.lazy(() => import("./components/ScrollManager"));
const Menu = React.lazy(() => import("./components/Menu"));

function App() {
  const [colorMode, setColorMode] = useLocalStorage("colorMode", "light");
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  const newColorMode = colorMode === "light" ? "dark" : "light";

  const canvasBackGroundColor = colorMode === "light" ? "#ececec" : "#293241";

  const onColorModeChangeHandler = () => {
    setColorMode(newColorMode);
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [section, colorMode]);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Suspense fallback={<LoadingScreen colorMode={colorMode} />}>
        <MotionConfig
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 500,
            damping: 50,
            restDelta: 0.0001,
          }}
        >
          <Canvas
            shadows
            camera={{ position: [8, 12, 8], rotation: [0, 0, 0], fov: 60 }}
          >
            <color attach="background" args={[canvasBackGroundColor]} />
            <ScrollControls pages={3.9} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Experience section={section} menuOpened={menuOpened} />
              </Scroll>
              <Scroll className="scroll-container" html>
                <Container>
                  <Interface
                    onSectionChange={setSection}
                    colorMode={colorMode}
                  />
                </Container>
              </Scroll>
            </ScrollControls>
            <ambientLight />
          </Canvas>
          <ColorMode
            colorMode={colorMode}
            onColorModeChangeHandler={onColorModeChangeHandler}
          />
          <Menu
            section={section}
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
            colorMode={colorMode}
          />
          <Leva hidden />
        </MotionConfig>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
