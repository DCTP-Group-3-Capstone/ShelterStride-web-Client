//external components
import React, { useState, useEffect } from "react";
import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
import People from "../../assets/icon/Profle2.svg";
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import Cancel from "../../assets/icon/Cancel.svg";
import See from "../../assets/icon/See.svg";
import dropdown from "../../assets/icon/dropdown.svg";
import "/src/scss/pages/SignUp.scss";

//functions
function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState("");
  const [labelText, setLabelText] = useState("Name");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  //dropdown creation

  const Dropdown = ({ value, options, onChange }) => {
    return (
      <div className="Signupsponsorform2-group">
        <select className="round-dropdown" value={value}
         onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  };

  //constant label
  const acctype = [{ label: "Individual" }, { label: "Company" }];


  //selected value
  const [value, setValue] = React.useState("Individual");
 


  //selection handling
  const handleaccountChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    
 // Update labelText based on the selected account type
 if (selectedValue === "Individual") {
  setLabelText("Name");
} else if (selectedValue === "Company") {
  setLabelText("Company Name");
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
    setIsValidEmail(emailRegex.test(newEmail)  || newEmail === "");


  };

  // Add onFocus event handler to reset error message
const handleEmailFocus = () => {
  setIsValidEmail(true);

 
};

  //handle password visibility and validations
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

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

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    // Reset the error message when the user starts typing a new confirm password
    setIsValidConfirmPassword(true);
  };
  //end password validations

  //change text in response to select choices

  const getPlaceholderText = () => {
    if (value === "Individual") {
      return "Enter your name";
    } else if (value === "Company") {
      return "Enter company name";
    } else {
      return "Enter your name";
    }
  };

  //signup handling
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both email and password are entered
    if (!email || !password) {
      console.log("Please enter both email and password");
      // Handle error (show error message, etc.)
      return;
    }

    // Handle form submission
    if (isValidEmail && isValidPassword) {
      console.log("Email submitted:", email);
      console.log("Selected Account Type:", selectedAccountType);
      console.log("Password submitted:", password);
      //  logic to submit the form
    } else {
      console.log("Invalid email, password, or confirm password");
      // Handle invalid email, password, or confirm password (show error message, etc.)
    }
  };


  //interface
  return (
    <>
      <div className="Signupsponsor-page">
        <div className="logolabel">
          <img src={shelterstride} alt="Shelters Stride" />
        </div>

        <div className="Signupsponsor-container">
          <h2> Create your account</h2>

          <div className="Signupsponsor-Box">
            <div className="Signupsponsor-form">
              {/*first input*/}

              <label className="acclabel" htmlFor="Account-Interest">
                Account Type
              </label>

              <div>
              
                <Dropdown
                  options={acctype}
                  value={value}
                  onChange={handleaccountChange}
                />
              </div>

              {/*second input*/}

              <label htmlFor="firstname">{labelText}</label>
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
                   <img src={passwordVisible ? See : Cancel} alt="Toggle Password Visibility" />
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
                   <img src={passwordVisible ? See : Cancel} alt="Toggle Password Visibility" />
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
                By signing up, you agree to our{" "}
                <a href="/termsandpp" target="_blank" rel="noopener noreferrer">
                  terms and privacy policy
                </a>
              </p>
            </div>
          </div>

          <p className="signin-text">
            Have an account already?{" "}
            <a href="/signup" target="_blank" rel="noopener noreferrer">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
