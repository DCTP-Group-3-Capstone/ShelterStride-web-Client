import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import SignUp from "./pages/Registeration/SignUp";
import Signin from "./pages/Registeration/Login";
import "./Global.scss";
import ErrorPage from "./Error-page";
import CreateAccount from "./pages/Registeration/CreateAccount";
// import { Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Createaccount",
    element: <CreateAccount />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Signin",
    element: <Signin />,
    errorElement: <ErrorPage />,
  },


  // {
  //   path: 'donate/:'
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
