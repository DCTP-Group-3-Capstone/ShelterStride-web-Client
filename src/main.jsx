import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./Home";
// import SignUp from "./pages/Registeration/SignUp";
//import CreateAccount from "./pages/Registeration/CreateAccount";
// import Login from "./pages/Registeration/Login";
//import SignUpBenefactor from "./pages/Registeration/SignUpBenefactor";
//import Schedule from "./pages/ScheduleVisitPage/Schedule";
//import Subscribe from "./pages/SubscribePage/Subscribe";
// import ErrorPage from "./Error-page";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
