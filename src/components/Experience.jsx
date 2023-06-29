import React, { useRef } from "react";
import * as THREE from "three";
import { Avatar } from "./Avatar";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Office } from "./Office";

const Experience = (props) => {
  const { section } = props;

  const characterContainerAboutRef = useRef();

  useFrame((state) => {
    const position = new THREE.Vector3();
    
  });

  return (
    <>
      {/* <group>
        <Avatar animation={section === 0 ? "Typing" : "Falling"} />
      </group> */}
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
        >
          <Avatar animation={section === 0 ? "Typing" : "Falling"} />
        </group>
      </motion.group>
    </>
  );
};

export default Experience;
