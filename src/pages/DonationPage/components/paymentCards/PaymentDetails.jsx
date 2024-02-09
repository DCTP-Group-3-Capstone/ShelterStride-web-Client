import React, { useState } from "react";
import { useDonateContext } from "../payment/DonateContext";
// import { useHistory } from 'react-router-dom';
import axios from "axios";
import check from "../../icon/greenCheckMark.svg";
import payPal from "../../icon/Paypal Logo.svg";
import wallet from "../../../../assets/icon/Wallet.svg";
import Success from "./success";

function PaymentDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [paymentOption, setPaymentOption] = useState("wallet");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory();
  const donationApiUrl = process.env.DONATION_API_URL;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };
  const handleError = (e) => {
    setError(e.target.value);
  };

  const confirmPayment = async (e) => {
    e.preventDefault();
    //form Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !cardName ||
      !cardNumber ||
      !expiryDate ||
      !cvv
    ) {
      setError("All fields are required");
      return;
    }
    if (!/^\d{4}$/.test(expiryDate)) {
      setError("Expiry date must be 4 digits");
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setError("CVV must be 3 digits");
      return;
    }
    // payment processing logic here

    // const isAuthenticated = /* Logic to check if the user is authenticated */;

    if (isAuthenticated) {
      // User is authenticated, proceed with donation
      const donationData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        cardName,
        cardNumber,
        expiryDate,
        cvv,
        paymentOption,
        amount,
      };

      try {
        const response = await axios.post("/api/donate", donationData);
        if (response.status === 200) {
          console.log("Donation successful!");
          setIsSuccess(true);
          //Reset form fields
          setUserId("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setCardName("");
          setCardNumber("");
          setExpiryDate("");
          setCVV("");
          setPaymentOption("wallet");
        } else {
          console.error("Failed to donate:", response.statusText);
          // Handle donation failure
        }
      } catch (error) {
        console.error("Error donating:" + donatingError.message);
        // Handle donation error
      }
    } else {
      // User is not authenticated, redirect to login page
      console.log("User is not logged in.");
      history.push("/login");
    }
  };
  const { selectedAmount } = useDonateContext();
  return (
    <div className="paymentDetails">
      <div className="donationAmountSelected">
        <div className="img">
          <img src={check} alt="Check mark" />
        </div>
        <div className="amountText">
          <h6>Your Donation Amount</h6>
          <p>{selectedAmount}/Month</p>
        </div>
      </div>
      <form className="form">
        <div className="yourInfo">
          <div>
            <div>
              <h6>YOUR INFORMATION</h6>
            </div>

            <div className="inputWrapper">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name*"
              />
            </div>
            <div className="inputWrapper">
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name*"
              />
            </div>
            <div className="inputWrapper">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email* "
              />
            </div>
            <div className="inputWrapper">
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone (Optional)"
              />
            </div>
          </div>
          <div className="inputCheckbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By providing your mobile phone number you agree that Shelter
              stride may contact you by phone and/or text message regarding
              Shelterstride news and updates. You can opt-out at any time. See{" "}
              <strong>Privacy Policy</strong> for details.
            </label>
          </div>
          <div className="paymentText">
            <h5>PAYMENT</h5>
          </div>
          <div className="inputRadio">
            <div>
              <input
                type="radio"
                id="wallet"
                value="wallet"
                checked={paymentOption === "wallet"}
                onChange={handlePaymentOptionChange}
              />
              <label htmlFor="wallet">
                <img src={wallet} alt="Wallet" />
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="paypal"
                value="paypal"
                checked={paymentOption === "paypal"}
                onChange={handlePaymentOptionChange}
              />
              <label htmlFor="paypal">
                <img src={payPal} alt="PayPal" />
              </label>
            </div>
          </div>
        </div>

        <div className="inputWrapper">
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={handleCardNameChange}
            maxLength="30"
            placeholder="Card Name*"
            required
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            placeholder="Card Number*"
            required
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="4"
            placeholder="Expiration*"
            required
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCVVChange}
            maxLength="3"
            placeholder="CVV*"
            required
          />
        </div>
        <div>
          <p>
            By Clicking “Confirm Payment” I agree to the companies term of
            services
          </p>
        </div>
        <div className="confirmButton">
          <button onClick={confirmPayment}>Confirm payment</button>
          <button>Back</button>
        </div>
      </form>
      {isSuccess && <Success />}
    </div>
  );
}

export default PaymentDetails;
