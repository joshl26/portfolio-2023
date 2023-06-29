import { Suspense, useEffect, useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";
import Experience from "./components/Experience";
import { Leva } from "leva";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
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
                  <Interface />
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
    </>
  );
}

export default App;
