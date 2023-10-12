import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebGL from "three/addons/capabilities/WebGL.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PortfolioPomodor from "./components/PortfolioPomodor";
import PortfolioElectronicInv from "./components/PortfolioElectronicInv";
import PortfolioThreeJS from "./components/PortfolioThreeJS";
import PortfolioOutdoorsy from "./components/PortfolioOutdoorsy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/el-in",
    element: <PortfolioElectronicInv />,
  },

  {
    path: "/portfolio/pomodor",
    element: <PortfolioPomodor />,
  },
  {
    path: "/portfolio/3dportfolio",
    element: <PortfolioThreeJS />,
  },
  {
    path: "/portfolio/outdoorsy",
    element: <PortfolioOutdoorsy />,
  },
]);

if (WebGL.isWebGLAvailable()) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
    </React.StrictMode>
  );
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("root").appendChild(warning);
}
