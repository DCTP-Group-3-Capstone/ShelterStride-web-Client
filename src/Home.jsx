import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Home.scss";
import NavBar from "./components/NavBarSect/NavBar";
import Login from "./pages/Registeration/Login";
import SignUp from "./pages/Registeration/SignUp";
import SignUpBenefactor from "./pages/Registeration/SignUpBenefactor";
import CreateAccount from "./pages/Registeration/CreateAccount";
// import Landing from "./pages/Landing/Home";
import Blog from "./pages/Blog";

function Home() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Blog />} />
        {/* <Route path="/donate" element={<Donate />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupbenefactor" element={<SignUpBenefactor />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default Home;
