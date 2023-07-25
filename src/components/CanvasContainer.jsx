import React, { useEffect } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Container } from "react-bootstrap";
const ColorMode = React.lazy(() => import("../components/ColorMode"));
const ScrollManager = React.lazy(() => import("../components/ScrollManager"));
const Experience = React.lazy(() => import("../components/Experience"));
const Interface = React.lazy(() => import("../components/Interface"));
const Menu = React.lazy(() => import("../components/Menu"));

const CanvasContainer = (props) => {
  const {
    section,
    onSectionChange,
    menuOpened,
    setMenuOpened,
    colorMode,
    onColorModeChangeHandler,
  } = props;
  const { viewport } = useThree();

  useEffect(() => {}, [viewport, section]);

  return (
    <ScrollControls pages={4} damping={0.1}>
      <ScrollManager section={section} onSectionChange={onSectionChange} />
      <Scroll>
        <Experience
          section={section}
          viewport={viewport}
          menuOpened={menuOpened}
        />
      </Scroll>
      <Scroll className="scroll-container" html>
        <Container>
          <ColorMode
            colorMode={colorMode}
            onColorModeChangeHandler={onColorModeChangeHandler}
          />
          <Menu
            section={section}
            onSectionChange={onSectionChange}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
            colorMode={colorMode}
          />
          <Interface
            onSectionChange={onSectionChange}
            colorMode={colorMode}
            viewport={viewport}
          />
        </Container>
      </Scroll>
    </ScrollControls>
  );
};

export default CanvasContainer;
