import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Home.scss";

function Homes() {
  return (        

    <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<donate />} />
      <Route path="/" element={<pr />} />
      <Route path="/" element={<buy />} />
    </Routes>
  </div>

);
}

export default Homes;
