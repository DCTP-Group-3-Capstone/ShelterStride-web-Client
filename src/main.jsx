
import * as React from "react";
import * as ReactDOM from "react-dom/client";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import SignUp from "./pages/Registeration/SignUp";
import SignUpBenefactor from "./pages/Registeration/SignUpBenefactor";
import Login from "./pages/Registeration/Login";
import Schedule from "./pages/ScheduleVisitPage/Schedule";
import "./Global.scss";
import ErrorPage from "./Error-page";
import CreateAccount from "./pages/Registeration/CreateAccount";
import Subscribe from "./pages/SubscribePage/Subscribe";
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
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Signupbenefactor",
    element: <SignUpBenefactor />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/schedule",
    element: <Schedule />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/subscribe",
    element: <Subscribe />,
    errorElement: <ErrorPage />,
  },


  // {
  //   path: 'donate/:'
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />


{/*
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import SignUp from "./pages/Registeration/SignUp";
//import CreateAccount from "./pages/Registeration/CreateAccount";
import Login from "./pages/Registeration/Login";
//import SignUpBenefactor from "./pages/Registeration/SignUpBenefactor";
//import Schedule from "./pages/ScheduleVisitPage/Schedule";
//import Subscribe from "./pages/SubscribePage/Subscribe";
import ErrorPage from "./Error-page";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
      {/*    <Route path="/Createaccount" element={<CreateAccount />} />
  
        <Route path="/Signupbenefactor" element={<SignUpBenefactor />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/subscribe" element={<Subscribe />} />*
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>*/}


  </React.StrictMode>
);
