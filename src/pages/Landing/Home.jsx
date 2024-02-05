// import { useState } from "react";
import Hero from "./components/Hero";
import Commitment from "./components/Commitment";
import ShelterStrideBlog from "./components/ShelterStrideBlog";
import WhatWeDo from "./components/WhatWeDoSect/WhatWeDo";
import Result from "./components/Result";
import Partners from "./components/Patners";
import GiftAHome from "./components/GiftAHome/GiftAHome";
import Footer from "../../components/FooterSect/Footer";

// import Donation from "../DonationPage/Donation";

// styles import
import "./home.scss";

function Home() {
  return (
    // <div>
    //   <Donation />
    // </div>
    <div className="home">
      <Hero />
      <div className="marginSides">
        <Commitment />
        <Result />
        <GiftAHome />
        <WhatWeDo />
        <ShelterStrideBlog />
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
