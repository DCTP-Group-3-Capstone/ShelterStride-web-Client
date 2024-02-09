import React, { useState } from "react";
import housesearching from "../../assets/images/house-searching.svg";

import "../Dashboard/HomeRent.scss";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Guarantor() {

 
  const navigate = useNavigate();

  
  return (
    <>
      <div className="employment-page">
       

       <h2>Your rent subscriptions will appear here</h2>
<img src="{housesearching}" alt="" />
       <h2>Step into a world where renting a home goes beyond four walls.
Get started with Shelterstride buy a home plan.</h2>

<button>Get Started</button>
      </div>
    </>
  );
}

export default Guarantor;
