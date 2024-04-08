import RootPage, { rootLoader } from "@/pages/Root";
import "@/styles/globals.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

const container = document.getElementById("root");

const root = createRoot(container!);

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    loader: rootLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
