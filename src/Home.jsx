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
