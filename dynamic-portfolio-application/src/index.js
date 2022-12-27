import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/header/About";
import NavBar from "./components/navbar/NavBar";

import "./App.scss";

const AppLayout = () => (
    <>
      <NavBar />
      <Outlet />
    </>
  );

const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);