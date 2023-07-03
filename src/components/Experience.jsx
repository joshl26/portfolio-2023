import React, { useRef, useState, useEffect } from "react";
// import * as THREE from "three";
import { Avatar } from "./Avatar";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Office } from "./Office";
import { useScroll } from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config";

const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const [section, setSection] = useState(0);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  const cameraPositionX = useMotionValue(0);
  const cameraPositionY = useMotionValue(0);
  const cameraPositionZ = useMotionValue(0);

  const cameraRotationX = useMotionValue(0);
  const cameraRotationY = useMotionValue(0);
  const cameraRotationZ = useMotionValue(0);

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
        setCharacterAnimation("Falling");
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

    // animate(cameraRotationX, menuOpened ? 0 : 14, {
    //   ...framerMotionConfig,
    // });

    // animate(cameraRotationY, menuOpened ? 0 : 15, {
    //   ...framerMotionConfig,
    // });

    // animate(cameraRotationZ, menuOpened ? 0 : 20, {
    //   ...framerMotionConfig,
    // });

    animate(cameraLookAtX + 5, menuOpened ? 0 : 1, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtY + 5, menuOpened ? 0 : 1, {
      ...framerMotionConfig,
    });

    animate(cameraLookAtZ + 20, menuOpened ? 0 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

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

    state.camera.rotation.x = cameraRotationX.get();
    state.camera.rotation.Y = cameraRotationY.get();
    state.camera.rotation.Z = cameraRotationZ.get();

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
    <>
      <motion.group
        position={[4.57668149100008, 0, 0.6859031024848536]}
        rotation={[
          -1.5031521515285498, -0.020905795243101558, -2.682477934066836,
        ]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 5.5,
            scaleY: 5.5,
            scaleZ: 5.5,
          },
          1: {
            scaleX: 5.5,
            scaleY: 5.5,
            scaleZ: 5.5,
            y: -viewport.height + 3,
            x: 10,
            z: 5,
          },
          2: {
            scaleX: 5.5,
            scaleY: 5.5,
            scaleZ: 5.5,
            y: -viewport.height * 1.75,
            x: 7,
            z: 0,
            rotateX: -1,
            rotateY: 0,
            rotateZ: 3,
          },
          3: {
            scaleX: 5,
            scaleY: 5,
            scaleZ: 5,
            y: -viewport.height * 3,
            x: 5,
            z: 0,
            rotateX: -1.75,
            rotateY: -0.35,
            rotateZ: 0.5,
          },
        }}
      >
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
          position={[2.3, 0, 2.1]}
          rotation={[-1.5, 0, 3.9]}
          scale={5.5}
        ></group>
      </motion.group>
    </>
  );
};

export default Experience;
