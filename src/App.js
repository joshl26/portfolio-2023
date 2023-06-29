import { useEffect, useState, useRef } from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";
import * as THREE from "three";
import Experience from "./components/Experience";
import { Leva } from "leva";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
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
              <Experience section={section} />
            </Scroll>
            <Scroll className="scroll-container" html>
              <Container>
                <Interface />
              </Container>
            </Scroll>
          </ScrollControls>
          <ambientLight />
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Leva hidden />
      </MotionConfig>
    </>
  );
}

export default App;
