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
import LandingPage from "./components/landingpage/LandingPage";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";


const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);