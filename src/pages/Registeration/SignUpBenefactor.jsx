import React, { useState } from "react";
import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
import People from "../../assets/icon/Profle2.svg";
import Email from "../../assets/icon/Email.svg";
import Call from "../../assets/icon/Call.svg";
import Cancel from "../../assets/icon/Cancel.svg";
import lock from "../../assets/icon/lock.svg";
import Profile from "../../assets/icon/People.svg";
import "/src/scss/pages/SignUpBenefactor.scss";
import See from "../../assets/icon/See.svg";
import dropdown from "../../assets/icon/dropdown.svg";

function SignUpBenefactor() {
  //   const [lastname, setlastName] = useState("");
  // const [firstname, setfirstName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [gender, setGender] = React.useState("Female");
  //dropdown creation

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const Dropdown = ({ value, options, onChange }) => {
    return (
      <div className="Signupben2-group">
        <select className="round-dropdown" value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  };

  //constant label
  const interesttype = [{ label: "Renting a home" }, { label: "Buying a home" }];


  //selected value
  const [value, setValue] = React.useState("Select");
 
  //selection handling
  const handleinteresttypeChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    
  };

  //pages indication
  const [currentPage, setCurrentPage] = useState(1);
  const [accountCreated, setAccountCreated] = useState(false);
  const totalPages = 3;

  //progress bar assignment
  const ProgressBar = () => {
    const progress = (currentPage / totalPages) * 100;

    //internal declaration of progress bar and label
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="page-indicator">{`${currentPage} of ${totalPages}`}</div>
      </div>
    );
  };

  //email validation handling
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail) || newEmail === "");
  };

  //password&confirm toggle and visibility handling
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  //password input change handler
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

  //contact number validation
  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);

    // Phone number logic
    const phoneRegex = /^\d{11}$/; // for 11 digits
    setIsValidPhoneNumber(
      phoneRegex.test(newPhoneNumber) || newPhoneNumber === ""
    );
  };

  //submit events
  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission
    if (isValidEmail) {
      console.log("Email submitted:", email);
      console.log("Selected Account Type:", selectedAccountType);
    } else {
      console.log("Invalid email");
    }

    if (isValidEmail) {
      console.log("Email submitted:", email);
      console.log("Selected Account Type:", selectedAccountType);
    } else {
      console.log("Invalid email, password, or confirm password");
      // Handle invalid email, password, or confirm password
    }

    // Set accountCreated to true after a successful form submission
    setAccountCreated(true);

    // Move to the next page
    nextPage();
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  //interface
  return (
    <>
      <div className="signupben-page">
        <div className="logolabel">
          <img
            src="src\assets\images\ShelterStrideSideLogo.svg"
            alt="Shelters Stride"
          />
        </div>
        <div className="signupben-container">
          <h2> Create your account</h2>

          {/*progress bar usage*/}
          <div>
            <ProgressBar />
          </div>

          {/*//three pages form*/}

          <form className="signupform-ben" onSubmit={handleSubmit}>
            {/* Render form fields based on the current page */}
            {/*page 1*/}
            {currentPage === 1 && (
              <>
                <div className="signupben-Box">
                  <div className="signupben-form">
                    <label htmlFor="firstname">First Name</label>
                    <div className="signupben-group">
                      <img src={People} alt="People Icon" />
                      <input
                        type="text"
                        id="name"
                        // value={firstname}
                        //   onChange={handleNameChange}
                        placeholder="Enter first name"
                      />
                    </div>

                    <label htmlFor="firstname">Last Name</label>
                    <div className="signupben-group">
                      <img src={People} alt="People Icon" />
                      <input
                        type="text"
                        id="name"
                        // value={firstname}
                        //   onChange={handleNameChange}
                        placeholder="Enter first name"
                      />
                    </div>

                    <label htmlFor="email">Email Address</label>
                    <div className="signupben-group">
                      <img src={Email} alt="People Icon" />
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        //  style={{ backgroundImage: `url(${Email})` }}
                        value={email}
                        onChange={handleEmailChange}
                        className={!isValidEmail ? "invalid" : ""}
                      />
                    </div>
                    {!isValidEmail && (
                      <p className="error-message">Invalid email address</p>
                    )}

                    <label htmlFor="phone">Phone Number</label>
                    <div className="signupben-group">
                      <img src={Call} alt="People Icon" />
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className={!isValidPhoneNumber ? "invalid" : ""}
                      />
                    </div>
                    {!isValidPhoneNumber && (
                      <p className="error-message">Invalid phone number</p>
                    )}
                  </div>
                </div>
              </>
            )}
            {/*page 2*/}
            {currentPage === 2 && (
              <>
                <div className="signupben-Box">
                  <div className="signupben-form">
                    <label htmlFor="age">Age</label>
                    <div className="signupben3-group">
                 
                      <input
                        type="number"
                        id="age"
                        placeholder="Enter your age"
                      />
                    </div>
 {/*first input*/}
                    <label className="genderlabel" htmlFor="Gender"> Gender</label>
                   <div className="signupben-group">
                    <img src={People} alt="People Icon" />
                      <Dropdown className="gendrop"
                      
                        options={[
                          { label: "Female", value: "Female" },
                          { label: "Male", value: "Male" },
                        ]}
                        value={gender}
                        onChange={handleGenderChange}
                      />
                    </div>

  {/*second input*/}

                    <label htmlFor="family">Family Size</label>
                    <div className="signupben-group">
                      <img src={Profile} alt="People Icon" />
                      <input type="number" id="family" placeholder="Family Size" />
                    </div>

                    <label htmlFor="monthlyIncome">Monthly Income</label>
                    <div className="signupben-group">
                      <img src={Email} alt="People Icon" />
                      <input
                        type="number"
                        id="monthlyIncome"
                        placeholder="Enter your monthly income"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {/*page 3*/}
            {currentPage === 3 && (
              <>
                <div
                  className="signupben-Box"
                  style={{
                    height: currentPage === totalPages ? "410px" : "auto",
                  }}
                >
                  <div className="signupben-form">
                    <label htmlFor="password">Password</label>
                    <div className="signupben-group">
                      <img src={lock} alt="People Icon" />
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
                        <img src={passwordVisible ? See : Cancel}
                       alt="Toggle Password Visibility" />
                      </div>
                    </div>
                    {!isValidPassword && (
                      <p className="password-message">
                        Password must be at least 6 characters and include
                        numbers and special characters.
                      </p>
                    )}

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <div className="signupben-group">
                      <img src={lock} alt="People Icon" />
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="confirm-password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className={!isValidConfirmPassword ? "invalid" : ""}
                        //  style={{ backgroundImage: `url(${lock})` }}
                      />
                      <div
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                      >
                         <img src={passwordVisible ? See : Cancel}
                          alt="Toggle Password Visibility" />
                      </div>
                    </div>
                    {!isValidConfirmPassword && (
                      <p className="password-message">Passwords do not match</p>
                    )}

                    <label className="acclabel" htmlFor="Account-Interest">
                      What are you interested in?
                    </label>
                    <div className="signupben4-group">
                    <div className="dev-drop">
              
              <Dropdown
                options={interesttype}
                value={value}
                onChange={handleinteresttypeChange}
              />
            </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/*next and signup button*/}
            <div className="signupben-but">
              {currentPage < totalPages ? (
                <button
                  type="submit"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              ) : (
                <button className="sub" type="submit">
                  Submit
                </button>
              )}
            </div>

            <p className="terms-text">
              By signing up, you agree to our{""}
              <a href="/termsandpp" target="_blank" rel="noopener noreferrer">
                terms and privacy policy
              </a>
            </p>
          </form>
          <p className="signin-text">
            Have an account already?{" "}
            <a href="/signin" target="_blank" rel="noopener noreferrer">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpBenefactor;
