import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const GetWebGLVersion = () => {
  const { gl } = useThree();
  useEffect(() => {
    // gl === WebGLRenderer
    // gl.info.calls
    // console.log(gl);
  });
  return null;
};

export default GetWebGLVersion;
