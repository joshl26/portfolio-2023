import { Image, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Nye Mfg",
    url: "https://nyemanufacturing.com/",
    image:
      "https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/e_improve:indoor:100/v1688839247/PortfolioSite/nye_dw7ztv.png",
    description: "Professional website design for Nye Manufacturing Ltd.",
  },

  {
    title: "Pomodoro",
    url: "https://www.joshlehman.ca/pomodor",
    image:
      "https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/e_improve:indoor:100/v1688839247/PortfolioSite/pomodoro_fxgkhs.png",
    description:
      "Create a simple pomodoro app using ReactJS, Bootstrap and Redux.",
  },

  {
    title: "Ei",
    url: "https://www.el-in.ca/",
    image:
      "https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/e_improve:indoor:100/v1688839247/PortfolioSite/ei_lo3mla.png",
    description:
      "Electronics Inventory (Ei) is a Full featured inventory management system",
  },
  {
    title: "Outdoorsy",
    url: "https://www.outdors.ca/",
    image:
      "https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/e_improve:indoor:100/v1688839247/PortfolioSite/outdoorsy_jigr07.png",
    description:
      "One of my long term ReactJS projects that allows outdoors enthusiasts to connect and share knowledge.",
  },
  {
    title: "BlackRock",
    url: "https://www.blackrock3d.ca/",
    image:
      "https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/e_improve:indoor:100/v1688839247/PortfolioSite/blackrock_zgussj.png",
    description:
      "BlackRock3D is a WordPress blog site which I originally began working on in early February of 2018.",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted, bgOpacity]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = (props) => {
  const { viewport } = props;
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <motion.group
      rotation={[-0.2, 1.4, 0]}
      scale={5}
      position={[5, 0, 5]}
      position-y={-viewport.height * 2 - 3}
    >
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            opacity: 1,
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project
            project={project}
            viewport={viewport}
            highlighted={index === currentProject}
          />
        </motion.group>
      ))}
    </motion.group>
  );
};
