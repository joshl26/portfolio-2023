import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebGL from "three/addons/capabilities/WebGL.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pomofocus from "./components/Pomofocus";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
  },
  {
    path: "/portfolio/pomofocus",
    element: <Pomofocus />,
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
