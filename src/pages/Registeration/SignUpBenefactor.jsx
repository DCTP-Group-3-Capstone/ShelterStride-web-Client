import React, { useState } from "react";
import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
import People from "../../assets/icon/Profle2.svg";
import Persons from "../../assets/icon/People.svg";
import Money from "../../assets/icon/Money.svg";
import Email from "../../assets/icon/Email.svg";
import Call from "../../assets/icon/Call.svg";
import UnSee from "../../assets/icon/UnSee.svg";
import lock from "../../assets/icon/lock.svg";
import "/src/scss/pages/SignUpBenefactor.scss";
import DropdownSelect from "../../components/DropdownSelect";
import { Link } from "react-router-dom";
import See from "../../assets/icon/See.svg";
// import axios from 'axios';

function SignUpBenefactor() {
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [age, setAge] = useState("");
  const [isValidAge, setisValidAge] = useState(true);
  const [selectedGender, setSelectedGender] = useState("");
  const [familySize, setfamilySize] = useState("");
  const [isValidfailySize, setisValidfailySize] = useState(true);
  const [monthlyIncome, setmonthlyIncome] = useState("");
  const [isValidmonthlyIncome, setisValidmonthlyIncome] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedInterestType, setselectedInterestType] = useState("");
  const interesttype = [
    { label: "Renting a home" },
    { label: "Buying a home" },
  ];
  const genderOptions = ["Male", "Female", "Others"];
  //pages indication
  const [currentPage, setCurrentPage] = useState(1);
  const [accountCreated, setAccountCreated] = useState(false);
  const totalPages = 3;

  //dropdown gender
  const handleGenderChange = (selected_gender) => {
    setSelectedGender(selected_gender);
    console.log(selected_gender);
  };

  const handleInterest = (selected_intrest) => {
    setselectedInterestType(selected_intrest);

    console.log(selected_intrest);
  };

  // Create a state object to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    selectedGender: "",
    familySize: "",
    monthlyIncome: "",
    password: "",
    confirmPassword: "",
    selectedInterestType: "",
  });

  // Function to update the form data state
  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  //progress bar assignment
  const ProgressBar = () => {
    const progress = (currentPage / totalPages) * 100;

    //internal declaration of progress bar and label
    return (
      <div className="progress-bar-container">
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="page-indicator">{`${currentPage} of ${totalPages}`}</div>
      </div>
    );
  };

  //handle firstname
  const handlefirstNameChange = (event) => {
    const newfirstName = event.target.value;
    setfirstName(newfirstName);
  };

  //handle lastname
  const handlelastNameChange = (event) => {
    const newlastName = event.target.value;
    setlastName(newlastName);
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
    setIsValidEmail("");
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

  //selected value
  const [value, setValue] = React.useState("Select");

  //selection handling
  const handleinteresttypeChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
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

  const handleBenefactorSignup = async (event) => {
    event.preventDefault();

    // Extract data from the formData state
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      selectedGender,
      familySize,
      monthlyIncome,
      password,
      confirmPassword,
      selectedInterestType,
    } = formData;

    // Update other fields in the formData state
    updateFormData("age", age);
    updateFormData("selectedGender", selectedGender);
    updateFormData("familySize", familySize);
    updateFormData("monthlyIncome", monthlyIncome);

    // Check if all required fields are filled
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !selectedInterestType
    ) {
      console.log("Fill all fields");
      setError("Fill all fields");
      return;
    }

    if (!confirmPassword) {
      console.log("Confirm Password");
      setError("Confirm Password");
      return;
    }

    if (!isValidEmail || !isValidPassword) {
      console.log("Provide a valid email");
      setError("Please enter a valid email");
      return;
    }

    if (isValidEmail && isValidPassword) {
      if (email && password && selectedAccountType) {
        {
          /*}    try {
        const result = await axios.post("https://shelterstride.onrender.com/api/v1", {
          usertype: "Benefactor",
          firstName,
          lastName,
          email,
          password,
        });

        console.log(result);
        alert("Signup successful!");

        if (result.data) {
          setAccountCreated(true);
          // Success logic
          navigate("/login");
        } else {
          setError("Check your information");
          alert("Unsuccessful!");
        }
      } catch (error) {
        console.log(error);

        if (error.response) {
          if (error.response.status === 401) {
            setError("Invalid email or password");
          } else {
            setError("Server error. Please try again later.");
          }
        } else if (error.request) {
          setError("No response from the server");
        } else {
          setError("An unexpected error occurred");
        }
      }*/
        }
      }
    }
  };

  // Add this function to handle next button click
  const handleNextClick = () => {
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

          <form className="signupform-ben" onSubmit={handleBenefactorSignup}>
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
                        value={formData.firstName}
                        onChange={(e) =>
                          updateFormData("firstName", e.target.value)
                        }
                        placeholder="Enter first name"
                      />
                    </div>

                    <label htmlFor="firstname">Last Name</label>
                    <div className="signupben-group">
                      <img src={People} alt="People Icon" />
                      <input
                        type="text"
                        id="name"
                        value={formData.lastName}
                        onChange={(e) =>
                          updateFormData("lastName", e.target.value)
                        }
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
                    <div className="signupben-group">
                      <img src={People} alt="" />
                      <input
                        type="number"
                        id="age"
                        placeholder="Enter your age"
                      />
                    </div>

                    <label htmlFor="gender">Gender</label>
                    <div className="signupben-group">
                      <img src={People} alt="" />
                      <DropdownSelect
                        options={genderOptions}
                        defaultSelected={"Gender"}
                        onSelect={handleGenderChange}
                      />
                    </div>

                    <label htmlFor="family">Family Size</label>
                    <div className="signupben-group">
                      <img src={People} alt="People Icon" />
                      <input type="number" id="age" placeholder="Family Size" />
                    </div>

                    <label htmlFor="monthlyIncome">Monthly Income</label>
                    <div className="signupben-group">
                      <img src={Money} alt="People Icon" />
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
                        <img src={See} alt="Toggle Password Visibility" />
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
                        <img src={See} alt="Toggle Password Visibility" />
                      </div>
                    </div>
                    {!isValidConfirmPassword && (
                      <p className="password-message">Passwords do not match</p>
                    )}

                    <label className="acclabel" htmlFor="Account-Interest">
                      What are you interested in?
                    </label>
                    <div className="signupben-group intrest">
                      <DropdownSelect
                        className="interest"
                        onSelect={handleInterest}
                        options={["Renting a home", "Buying a home"]}
                        defaultSelected={"Select"}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/*next and signup button*/}

            <div className="signupben-but">
              {currentPage < totalPages ? (
                <button type="button" onClick={handleNextClick}>
                  Next
                </button>
              ) : (
                <button
                  className="sub"
                  type="submit"
                  onClick={handleBenefactorSignup}
                >
                  Sign Up
                </button>
              )}
            </div>

            <p className="terms-text">
              By signing up, you agree to our{""}
              <Link to="/termandpp">terms and privacy policy</Link>
            </p>
          </form>
          <p className="signin-text">
            Have an account already? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpBenefactor;
