import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { framerMotionConfig } from "./config";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GetWebGLVersion from "./hooks/GetWebGLVersion";

const LoadingScreen = React.lazy(() => import("./components/LoadingScreen"));
const ThemeProvider = React.lazy(() => import("react-bootstrap/ThemeProvider"));
const CanvasContainer = React.lazy(() =>
  import("./components/CanvasContainer")
);

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
            ...framerMotionConfig,
          }}
        >
          <Canvas
            shadows
            camera={{ position: [8, 12, 8], rotation: [0, 0, 0], fov: 60 }}
          >
            {/* <GetWebGLVersion /> */}
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
    </ThemeProvider>
  );
}

export default App;
