import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./assets/Components/Header/Header";
import Orders from "./assets/Components/Orders/Orders";
import Contact from "./assets/Components/Contact/Contact";
import About from "./assets/Components/About/About";
import Main from "./assets/Components/Layout/Main";
import Home from "./assets/Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('tshirts.json')
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
