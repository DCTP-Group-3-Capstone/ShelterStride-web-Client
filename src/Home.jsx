<<<<<<< HEAD
import React, { useState } from "react";

//import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
//import dropdown from "/src/assets/icon/dropdown.svg";
import "./Home.scss";


function home() {
    
    return (
    <div>
    Yee!
    </div>
    );
}

export default home;
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Home.scss";
import NavBar from "./components/NavBarSect/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<donate />} />
        <Route path="/" element={<pr />} />
        <Route path="/" element={<buy />} />
        <Route path="/" element={<pr />} />
        <Route path="/" element={<buy />} />
      </Routes>
    </div>
  );
}

export default Home;
>>>>>>> 1eb6b7fc18094613276645c05f0e93ef5d784841
