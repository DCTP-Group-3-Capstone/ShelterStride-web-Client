import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
//import Home from "./Home2";
import SignUp from "./pages/Registeration/SignUp";
import CreateAccount from "./pages/Registeration/CreateAccount";
import Login from "./pages/Registeration/Login";
import SignUpBenefactor from "./pages/Registeration/SignUpBenefactor";
import Schedule from "./pages/ScheduleVisitPage/Schedule";
import Subscribe from "./pages/SubscribePage/Subscribe";
//import Homepage from "/src/pages/Landing/Home";
import ErrorPage from "./Error-page";
import "./Global.scss";
//import GiftAhome from "./Giftahome";
import Home from "./Home";

import GiftAHome from "./pages/Landing/components/GiftAHome/GiftAHome";
import RentProduct from "./pages/Rentahomeproductpage/RentAHomeProduct";
import BuyProduct from "./pages/Buyahomeproductpage/BuyAHomeProduct";
import ContactUs from "./pages/ContactUs/ContactUs";
import Ap from "./Ap";
import DashboardAccount from "./pages/Dashboard/AccountSetting/DashboardAccount";
import Dashboard from "./pages/Dashboard/Dashboard";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Createaccount" element={<CreateAccount />} />
        <Route path="/Signupbenefactor" element={<SignUpBenefactor />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/giftahomepage" element={<GiftAHome />} />
        <Route path="/BuyProduct" element={<BuyProduct/>}/>
        <Route path="/RentProduct" element={<RentProduct />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Ap" element={<Ap />} />
        <Route path="/Dashboard/*" element={<DashboardAccount />} />
   
        <Route path="/dashboardd" element={<Dashboard/>} />


       


     

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
