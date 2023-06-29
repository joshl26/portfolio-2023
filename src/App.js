import React, { Suspense, useEffect, useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Container } from "react-bootstrap";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = React.lazy(() => import("./components/Experience"));
const Interface = React.lazy(() => import("./components/Interface"));
const LoadingScreen = React.lazy(() => import("./components/LoadingScreen"));
const ThemeProvider = React.lazy(() => import("react-bootstrap/ThemeProvider"));
const ScrollManager = React.lazy(() => import("./components/ScrollManager"));
// const Menu = React.lazy(() => import("./components/Menu"));

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Suspense fallback={<LoadingScreen />}>
        <MotionConfig
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 500,
            damping: 50,
            restDelta: 0.0001,
          }}
        >
          <Canvas shadows camera={{ position: [15, 15, 15], fov: 42 }}>
            <color attach="background" args={["#ececec"]} />
            <ScrollControls pages={4} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Experience section={section} menuOpened={menuOpened} />
              </Scroll>
              <Scroll className="scroll-container" html>
                <Container>
                  <Interface onSectionChange={setSection} />
                </Container>
              </Scroll>
            </ScrollControls>
            <ambientLight />
          </Canvas>
          {/* <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          /> */}
          <Leva hidden />
        </MotionConfig>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
