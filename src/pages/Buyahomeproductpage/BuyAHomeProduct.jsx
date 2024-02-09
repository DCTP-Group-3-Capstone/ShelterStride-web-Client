//import NavBar from "../../components/NavBarSect/NavBar";
import React, { useState } from "react";
import Footer from "../../components/FooterSect/Footer";
import Land from "../Landing/img/land.svg";
import Circlecheck from "../../assets/icon/CircleCheck.svg";
import SubscribePopupForm  from '../Popups/Subscribeform';
import "./BuyAHomeProduct.scss";
import SchedulePopupForm from '../Popups/Scheduleform';
import Buysub from "../../components/Subscribecomponent/Buysub";

function BuyProduct() {
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);

  const handleOpenSubscribePopup = () => {
    setShowSubscribePopup(true);
  };

  const handleCloseSubscribePopup = () => {
    setShowSubscribePopup(false);
  };

  const handleOpenSchedulePopup = () => {
    setShowSchedulePopup(true);
  };

  const handleCloseSchedulePopup = () => {
    setShowSchedulePopup(false);
  };

  return (
    <section className="buyproduct-section">
    {/*}  <div className="navBarsec">
        <NavBar />
      </div>*/}

      <label>
        <a href="#">Back</a>
      </label>

      <img className="details" src={Land} alt="landpic" />

      <div className="self-conprice">
        <div className="self-con">
          <h1 className="header1">ShelterStride 1 Full Plot of Land </h1>
          <p className="address">
            Akinwunmi str, off babalola close, Otta, Ogun
          </p>

          <div className="content-container">
            <img src={Circlecheck} alt="Your Icon" className="bullet-icon" />
            <p className="icon-textpro">Verified Property</p>
          </div>
       

          <div className="some-info">
            <h1 className="header2">Property info:</h1>
            <p className="paratext">
              This is a full plot of land located in a developing location, it
              is not too far from the road, there is a general hospital close to
              the area. The property has all the required documents.{" "}
            </p>
          </div>

          <div className="attractions">
            <h1 className="header3">Key attractions:</h1>
            <ul>
        <li>Secure Environment</li>
        <li>C of O</li>
        <li>Governor's Consent</li>
        <li>Survey Plan</li>
      </ul>
          </div>

          <div className="Amenities">
            <h1 className="ameni">Infrastructure</h1>
            <div className="content-con">
              <div className="content-container2">
                <img
                  src={Circlecheck}
                  alt="Your Icon"
                  className="bullet-icon"
                />
                <p className="icon-text2">Major road</p>
              </div>

              <div className="content-container2">
                <img
                  src={Circlecheck}
                  alt="Your Icon"
                  className="bullet-icon"
                />
                <p className="icon-text2">General hospital</p>
              </div>

              
              <div className="content-container2">
                <img
                  src={Circlecheck}
                  alt="Your Icon"
                  className="bullet-icon"
                />
                <p className="icon-text2">Schools</p>
              </div>
            </div>
          </div>

        </div>

        <div className="sub-price">
          <div className="labelbutton">
            <h1 className="hprice">Subscription Price</h1>
            <button disabled={true} className="available"> available</button>
          </div>

          <div className="month-sub">
            <h1 className="monthprice">N125,000/month</h1>
            <h1 className="fee">No additional free</h1>
          </div>

          <div className="but-ton">
            <button className="schedulebut"
            // className="openModalBtn"
            onClick={handleOpenSchedulePopup}
      >
             Schedule a visit </button>
             {showSchedulePopup && <SchedulePopupForm onClose={handleCloseSchedulePopup} />}

            <button
            onClick={handleOpenSubscribePopup}
             className="subscribebut">Subscribe </button>
 {showSubscribePopup && <SubscribePopupForm onClose={handleCloseSubscribePopup} />}

            <h1 className="info">
              {" "}
              Kindly schedule a visit before proceeding to subscribe
            </h1>
          </div>
     
        </div>
      </div>

      
<div className="buy-sub">
<h1>Similar Properties nearby</h1>
  <Buysub className="buysub-pic"/>
</div>


        <div className="foot">
        <Footer/>
        </div>
     
    </section>
  );
}

export default BuyProduct;
