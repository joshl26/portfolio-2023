import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { framerMotionConfig } from "./config";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
// import { TypeAnimation } from "react-type-animation";
// import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import ChooseYourExperience from "./components/ChooseYourExperience";
import LandingPage from "./components/LandingPage";
import ColorMode from "./components/ColorMode";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "react-bootstrap";
import CanvasContainer from "./components/CanvasContainer";
import ResponsiveHeader from "./components/ResponsiveHeader";
import ResponsiveMenu from "./components/ResponsiveMenu";
import TextBasedHome from "./components/TextBasedHome";
import ResponsiveFooter from "./components/ResponsiveFooter";
// const ColorMode = React.lazy(() => import("./components/ColorMode"));
// const Menu = React.lazy(() => import("./components/Menu"));
// const ThemeProvider = React.lazy(() => import("react-bootstrap/ThemeProvider"));
// const CanvasContainer = React.lazy(() =>
//   import("./components/CanvasContainer")
// );

function App() {
  const [colorMode, setColorMode] = useLocalStorage("colorMode", "light");
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  // const newColorMode = colorMode === "light" ? "dark" : "light";
  const canvasBackGroundColor = colorMode === "light" ? "#ececec" : "#293241";
  const [landingPage, setLandingPage] = useState(true);
  const [chooseYourExperience, setChooseYourExperience] = useState(false);
  const [experience, setExperience] = useState("");
  const [menuClicked, setMenuClicked] = useState(false);

  const hamburgerMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  const onColorModeChangeHandler = () => {
    setColorMode("dark");
  };

  // useEffect(() => {}, []);

  const setExperienceChangeHandler = (e) => {
    setExperience(e);
    setLandingPage(false);
    setChooseYourExperience(false);
  };

  const chooseExperienceChangeHandler = () => {
    setChooseYourExperience(!chooseYourExperience);
    setLandingPage(!landingPage);
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      {experience !== "interactive" ? (
        <ResponsiveHeader
          hamburgerMenuClicked={hamburgerMenuClicked}
          menuClicked={menuClicked}
          experience={experience}
          chooseYourExperience={chooseYourExperience}
        />
      ) : (
        ""
      )}
      <main>
        {menuClicked ? (
          <ResponsiveMenu
            hamburgerMenuClicked={hamburgerMenuClicked}
            menuClicked={menuClicked}
          />
        ) : (
          ""
        )}

        {chooseYourExperience ? (
          <ChooseYourExperience
            colorMode={colorMode}
            setExperienceChangeHandler={setExperienceChangeHandler}
          />
        ) : (
          ""
        )}
        {landingPage ? (
          <LandingPage
            chooseExperienceChangeHandler={chooseExperienceChangeHandler}
          />
        ) : (
          ""
        )}

        {experience === "text" ? (
          <Suspense fallback={<LoadingScreen colorMode={colorMode} />}>
            <MotionConfig
              transition={{
                ...framerMotionConfig,
              }}
            >
              <TextBasedHome />
            </MotionConfig>
          </Suspense>
        ) : (
          ""
        )}

        {experience === "video" ? (
          <Suspense fallback={<LoadingScreen colorMode={colorMode} />}>
            <MotionConfig
              transition={{
                ...framerMotionConfig,
              }}
            >
              <h1>VIDEO BASED</h1>
            </MotionConfig>
          </Suspense>
        ) : (
          ""
        )}

        {experience === "interactive" ? (
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
                shadows
                camera={{ position: [8, 12, 8], rotation: [0, 0, 0], fov: 60 }}
              >
                <ambientLight
                  position={(0, 0, 0)}
                  color="white"
                  intensity="1.5"
                />
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
        ) : (
          ""
        )}
      </main>

      {experience !== "" && experience !== "interactive" ? (
        <ResponsiveFooter />
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}

export default App;
