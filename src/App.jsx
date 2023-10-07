import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { framerMotionConfig } from "./config";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { TypeAnimation } from "react-type-animation";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import ChooseYourExperience from "./components/ChooseYourExperience";
import LandingPage from "./components/LandingPage";

const ColorMode = React.lazy(() => import("./components/ColorMode"));
// const Menu = React.lazy(() => import("./components/Menu"));
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
  const [landingPage, setLandingPage] = useState(true);
  const [chooseYourExperience, setChooseYourExperience] = useState(false);

  // const onColorModeChangeHandler = () => {
  //   setColorMode("dark");
  // };

  // useEffect(() => {}, []);

  const chooseExperienceChangeHandler = () => {
    setChooseYourExperience(!chooseYourExperience);
    setLandingPage(!landingPage);
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">J Lehman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Choose your Experience"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#experience/1.1">
                  Text Based (3G/old browser)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#experience/1.2">
                  Video Based (4G/new browser)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#experience/1.3">
                  3D Interactive (Desktop/5G)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {chooseYourExperience ? (
        <ChooseYourExperience colorMode={colorMode} />
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

      {/* <Suspense fallback={<LoadingScreen colorMode={colorMode} />}>
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
      </Suspense> */}
    </ThemeProvider>
  );
}

export default App;
