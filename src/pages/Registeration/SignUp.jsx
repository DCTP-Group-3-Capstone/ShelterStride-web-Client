import React, { useState, useEffect } from "react";
import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
import People from "../../assets/icon/Profle2.svg";
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import UnSee from "../../assets/icon/UnSee.svg";
import See from "../../assets/icon/See.svg";
import "/src/scss/pages/SignUp.scss";
import DropdownSelect from "../../components/DropdownSelect";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 
//import Modal from '../../Modal';
import Popup from "../../Popup";
import axios from "axios";

function SignUp() {
  const [labelText, setLabelText] = useState("Name");
  const [selectedAccountType, setSelectedAccountType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = React.useState("Individual");
  const [showModall, setShowModall] = useState(false); // New state for modal
  const [showModal, setShowModal] = useState(false); 
  const [showUnsuccessfulModal, setShowUnsuccessfulModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false); 
  const navigate = useNavigate();


const handleaccountype = (selectedAccountType) => {
  setSelectedAccountType(selectedAccountType);

    console.log(selectedAccountType);


       // Update label and placeholder based on selected account type
       if (selectedAccountType === "Individual") {
        setLabelText("Name");
      } else if (selectedAccountType === "Company") {
        setLabelText("Company Name");
      }


  };


      
  //change text in response to select choices

  const getPlaceholderText = () => {
    if (selectedAccountType === "Individual") {
      return "Enter your name";
    } else if (selectedAccountType === "Company") {
      return "Enter company name";
    } else {
      return "Enter your name";
    }
  };

  //name changes
  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  //email validations
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail) || newEmail === "");
  };

  // Add onFocus event handler to reset error message
  const handleEmailFocus = () => {
    setIsValidEmail('true');
  };

  //handle password visibility and validations
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  //password handling
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Reset the error message when the user starts typing a new password
    setIsValidPassword(true);

    // Password validation criteria
    const passwordvalidate = /^(?=.*[0-9])(?=.*[!.?@#$%^&*])(.{6,})$/;
    setIsValidPassword(
      passwordvalidate.test(newPassword) || newPassword === ""
    );
  };

  //confirm password handling
  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
  
    // Reset the error message when the user starts typing a new password
    setIsValidConfirmPassword(true);
  
    // Check if confirm password matches the password
    setIsValidConfirmPassword(newConfirmPassword === password);
  };


  //popup
  const SignupSuccessModal = ({ onClose }) => (
    <div className="modal">
      <div className="modal-content">
        <p>Signup Successful</p>
        <button onClick={() => {
          onClose();
          navigate("/login"); // Optionally navigate to login page after successful signup
        }}>
          Close
        </button>
      </div>
    </div>
  );


  const SignupUnSuccessModal = ({ onClose }) => (
    <div className="modal">
      <div className="modal-content">
        <p>Signup Unsuccessful</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
  

  const closeModal = () =>{
    setShowModal(false)
  }

 // Event handler for "terms and privacy policy" link
 const handleTermsClick = () => {
  setShowModall(true);
};


  const handleSubmit = (event) => {
    event.preventDefault();

    const nameParts = name.split(" ");

    // Assuming the first part is the first name and the last part is the last name
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];

    if (!name || !email || !password || !selectedAccountType) {
      console.log("Fill all field");
      alert("Fill all fields");
      setError("Fill all fields");

      return;
    }

    if (!confirmPassword) {
      console.log("Confirm Password");
      alert("Confirm Password");
      setError("Confirm Password");

      return;
    }

    if (!isValidEmail || !isValidPassword) {
      console.log("provide a valid email");
      alert("provide a valid email");
      setError("Please enter a valid email");

      return;
    }

    if (isValidEmail && isValidPassword && setSelectedAccountType) {
      if (email && password && selectedAccountType) {

        navigate("/login");
    {/*}    try {
          axios
          .get("https://shelterstride.onrender.com/api/v1", {
            
              usertype: "Donor",
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
            })
            .then((result) => {
              console.log(result);

             // setShowPopup(true);
           //   alert("Signin successful!");
         // setButtonPopup(true); // Set the state to true to show the popup
              if (result.data) {
                // Success logic
              SignupSuccessModal(true)
             //   navigate("/login");
              } else {
                setError("Check your information");
             //   alert("unsuccessful!");
             setShowUnsuccessfulModal(true);
             
              }
            })
            .catch((error) => {
              console.log(error);

              if (error.response) {
                // The request was made and the server responded with a status code
                if (error.response.status === 401) {
                  // Invalid credentials
                  setError("Invalid email or password");
                } else {
                  // Other server-side errors
                  setError("Server error. Please try again later.");
                }
              } else if (error.request) {
                // The request was made but no response was received
                setError("No response from the server");
              } else {
                // Something happened in setting up the request that triggered an Error
                setError("An unexpected error occurred");
              }
            });
        } catch (error) {
          console.error("An unexpected error occurred:", error);
          setError("An unexpected error occurred");
        }*/}
      }
    }
  };


  return (
    <>
      <div className="Signupsponsor-page">
        <div className="logolabel">
          <img src={shelterstride} alt="Shelters Stride" />
        </div>

        <div className="Signupsponsor-container">
          <h2> Create your account</h2>

 {/* Render the modal if showModal is true */}
 {showModal && <SignupSuccessModal onClose={closeModal} />}

 {/* Render the unsuccessful modal if showUnsuccessfulModal is true */}
{showUnsuccessfulModal && (
  <SignupUnSuccessModal onClose={() => setShowUnsuccessfulModal(false)} />
)}

{showPopup && (
  <Popup trigger={showPopup} setTrigger={setShowPopup} onClose={() => navigate("/login")}>
    <h3>Signup Successful</h3>
  </Popup>
)}

          <div className="Signupsponsor-Box">
            <div className="Signupsponsor-form">
              {/*first input*/}

              <label className="acclabel" htmlFor="Account-Interest">
                Account Type
              </label>

              <div className="Signupsponsorform-group">

                      <DropdownSelect className="accounttype"
                       onSelect={handleaccountype}
                        options={['Individual', 'Company']}
                        defaultSelected={"Select"}
                      />
                      </div>

              {/*second input*/}

              <label htmlFor="firstandlastname">{labelText}</label>
              <div className="Signupsponsorform-group">
                <img src={People} alt="People Icon" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder={getPlaceholderText()}
                />
              </div>

              {/*third input*/}
              <label htmlFor="email">Email Address</label>
              <div className="Signupsponsorform-group">
                <img src={Email} alt="Email Icon" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onFocus={handleEmailFocus} 
                  onChange={handleEmailChange}
                  className={!isValidEmail ? "invalid" : ""}
                  placeholder="Enter your email"
                />
              </div>
              {!isValidEmail && (
                <p className="error-message">Invalid email address</p>
              )}

              {/*fourth input*/}
              <label htmlFor="password">Password</label>
              <div className="Signupsponsorform-group">
                <img src={lock} alt="Password Icon" />

                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={!isValidPassword ? "invalid" : ""}
                  placeholder="Enter your password"
                />
                <div
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                   <img src={passwordVisible ? See : UnSee} alt="Toggle Password Visibility" />
                </div>
              </div>
              {!isValidPassword && (
                <p className="error-message">
                  Password must be at least 6 characters and include numbers and
                  special characters.
                </p>
              )}

              {/*sixth input*/}
              <label htmlFor="confirm-password">Confirm Password:</label>
              <div className="Signupsponsorform-group">
                <img src={lock} alt="People Icon" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={!isValidConfirmPassword ? "invalid" : ""}
                />
                <div
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                   <img src={passwordVisible ? See : UnSee} alt="Toggle Password Visibility" />
                </div>
              </div>
              {!isValidConfirmPassword && (
                <p className="error-message">Passwords do not match</p>
              )}

              {/*signup button*/}
              <div className="Signupsponsorbutton-group">
                <button type="submit" onClick={handleSubmit}>
                  Sign Up
                </button>
              </div>

              <p className="terms-text">
                By signing up, you agree to our{""}
                <span onClick={handleTermsClick} className="terms-link">
              <Link to="#" className="terms-link">
                terms and privacy policy
              </Link>
            </span>
              </p>
            </div>

        
          </div>

          <p className="signin-text">
            Have an account already?{" "}
           
            <Link to="/login">Sign in</Link>
           
          </p>


        </div>

{/* Render the modal if showModal is true 
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Login Successful Popup</h3>
              </Popup>*/}
            
      </div>
    </>
  );



}

export default SignUp;
