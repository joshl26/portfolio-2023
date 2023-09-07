import React, { useRef, useState, useEffect } from "react";
import { Avatar } from "./Avatar";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Office } from "./Office";
import { useScroll } from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config";
import { Projects } from "./Projects";

const Experience = (props) => {
  const { menuOpened, viewport } = props;
  const data = useScroll();
  const [section, setSection] = useState(0);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Standing");

  const cameraPositionX = useMotionValue(0);
  const cameraPositionY = useMotionValue(0);
  const cameraPositionZ = useMotionValue(0);

  const cameraLookAtX = useMotionValue(0);
  const cameraLookAtY = useMotionValue(0);
  const cameraLookAtZ = useMotionValue(0);

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      if (section === 0) {
        setCharacterAnimation("Typing");
      }
      if (section === 1) {
        setCharacterAnimation("Falling");
      }
      if (section === 2) {
        setCharacterAnimation("Standing");
      }
      if (section === 3) {
        setCharacterAnimation("Standing");
      }
    }, 600);
  }, [section]);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? 5 : 15, {
      ...framerMotionConfig,
    });

    animate(cameraPositionY, menuOpened ? 0 : 25, {
      ...framerMotionConfig,
    });

    animate(cameraPositionZ, menuOpened ? 0 : 25, {
      ...framerMotionConfig,
    });

    animate(cameraLookAtX + 5, menuOpened ? 0 : 1, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtY + 5, menuOpened ? 0 : 1, {
      ...framerMotionConfig,
    });

    animate(cameraLookAtZ + 20, menuOpened ? 0 : 0, {
      ...framerMotionConfig,
    });
  }, [
    menuOpened,
    cameraLookAtX,
    cameraLookAtY,
    cameraLookAtZ,
    cameraPositionX,
    cameraPositionY,
    cameraPositionZ,
  ]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.position.Y = cameraPositionY.get();
    state.camera.position.Z = cameraPositionZ.get();

    state.camera.lookAt(
      cameraLookAtX.get(),
      cameraLookAtY.get(),
      cameraLookAtZ.get()
    );
    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);
    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");
    // console.log([euler.x, euler.y, euler.z]);
  });

  return (
    <group>
      <motion.group
        position={[4.683831780878145, 2.42, 0.8132562154387455]}
        rotation={[3.141592653589793, -0.42000000000000015, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 5.23,
            scaleY: 5.23,
            scaleZ: 5.23,
          },
          1: {
            scaleX: 5.23,
            scaleY: 5.23,
            scaleZ: 5.23,
            y: -viewport.height * 0.8,
            x: 10,
            z: 5,
            rotateX: 0,
            rotateY: -5,
            rotateZ: 0,
          },
          2: {
            scaleX: 5.5,
            scaleY: 5.5,
            scaleZ: 5.5,
            y: -viewport.height * 1.85,
            x: 10,
            z: 3,
            rotateX: -0.5,
            rotateY: 0.5,
            rotateZ: 0.5,
          },
          3: {
            scaleX: 7,
            scaleY: 7,
            scaleZ: 7,
            y: -viewport.height * 2.95,
            x: 5,
            z: 0,
            rotateX: -0.5,
            rotateY: 1,
            rotateZ: 0.46,
          },
        }}
      >
        {/* <ambientLight intensity={1} /> */}
        <Avatar animation={characterAnimation} />
      </motion.group>
      <motion.group
        position={[3, -3, -2]}
        rotation-y={-0.3}
        rotation-z={0}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[2.44, 2.42, 2.19]}
          rotation={[Math.PI, -0.72, Math.PI]}
          scale={5.23}
        ></group>
      </motion.group>
      <motion.group
        position={[-4, -3, -3]}
        rotation-y={0}
        rotation-z={0}
        animate={{
          y: section === 2 ? 0 : -1,
        }}
      >
        <Projects viewport={viewport} />
      </motion.group>
    </group>
  );
};

export default Experience;
