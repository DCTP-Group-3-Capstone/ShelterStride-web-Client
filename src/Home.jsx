import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Home.scss";
import NavBar from "./components/NavBarSect/NavBar";
import Login from "./pages/Registeration/Login";
import SignUp from "./pages/Registeration/SignUp";
import SignUpBenefactor from "./pages/Registeration/SignUpBenefactor";
import CreateAccount from "./pages/Registeration/CreateAccount";
import Donate from "./pages/DonationPage/Donation";
import Blog from "./pages/Blog";
import Rent from "./pages/RentPage/Rent";
import Buy from "./pages/BuyPage/Buy";
import ErrorPage from "./Error-page";
import Hidenavbar from "./components/Hidenavbar";
import Headroom from "react-headroom";

function Home() {
  return (
    <div>
      <Headroom>
        <Hidenavbar>
          <NavBar />
        </Hidenavbar>
      </Headroom>
      <Routes>
        <Route path="/" element={<Blog />} />
        {/* <Route path="/donate" element={<Donate />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupbenefactor" element={<SignUpBenefactor />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Home;
