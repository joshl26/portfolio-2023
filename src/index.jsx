import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import WebGL from "three/addons/capabilities/WebGL.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PortfolioPomodor from "./components/PortfolioPomodor";
import PortfolioElectronicInv from "./components/PortfolioElectronicInv";
import PortfolioThreeJS from "./components/PortfolioThreeJS";
import PortfolioOutdoorsy from "./components/PortfolioOutdoorsy";
import PortfolioContact from "./components/PortfolioContact";
import PortfolioAbout from "./components/PortfolioAbout";
import PortfolioServices from "./components/PortfolioServices";
import TextBasedHome from "./components/TextBasedHome";
import PortfolioExperimental from "./components/PortfolioExperimental";
import ScrollToTop from "./helpers/ScrollToTop";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <TextBasedHome />,
      },
      {
        path: "about",
        element: <PortfolioAbout />,
      },
      {
        path: "contact",
        element: <PortfolioContact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },

      {
        path: "portfolio/el-in",
        element: <PortfolioElectronicInv />,
      },

      {
        path: "portfolio/pomodor",
        element: <PortfolioPomodor />,
      },
      {
        path: "portfolio/3dportfolio",
        element: <PortfolioThreeJS />,
      },
      {
        path: "portfolio/experimental",
        element: <PortfolioExperimental />,
      },
      {
        path: "portfolio/outdoorsy",
        element: <PortfolioOutdoorsy />,
      },
      {
        path: "services",
        element: <PortfolioServices />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>
);

// if (WebGL.isWebGLAvailable()) {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <React.StrictMode>
//       <RouterProvider router={router}>
//         <ScrollToTop />
//       </RouterProvider>
//     </React.StrictMode>
//   );
// } else {
//   const warning = WebGL.getWebGLErrorMessage();
//   document.getElementById("root").appendChild(warning);
// }
