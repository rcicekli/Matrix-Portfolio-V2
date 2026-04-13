import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "skills",
    element: <Skills />,
  },
  {
    path: "project",
    element: <Projects />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
