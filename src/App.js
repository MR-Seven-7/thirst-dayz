import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import EventPage from "./components/EventPage";
import EventRegisterPage from "./components/EventRegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "event", element: <EventPage /> },
      { path: "registration", element: <EventRegisterPage /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
