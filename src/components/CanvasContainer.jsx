import React, { useEffect } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Container } from "react-bootstrap";
const ScrollManager = React.lazy(() => import("../components/ScrollManager"));
const Experience = React.lazy(() => import("../components/Experience"));
const Interface = React.lazy(() => import("../components/Interface"));

const CanvasContainer = (props) => {
  const { section, onSectionChange, menuOpened, colorMode } = props;
  const { viewport } = useThree();

  useEffect(() => {}, [viewport, section]);

  console.log(viewport);

  return viewport.width * viewport.factor >= 768 ? (
    <ScrollControls pages={4.25} damping={0.1}>
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
          <Interface
            onSectionChange={onSectionChange}
            colorMode={colorMode}
            viewport={viewport}
          />
        </Container>
      </Scroll>
    </ScrollControls>
  ) : (
    <ScrollControls pages={4.4} damping={0.1}>
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
