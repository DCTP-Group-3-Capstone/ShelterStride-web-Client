import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
import "/src/scss/pages/SignUp.scss";
import People from "../../assets/icon/Profile.svg";
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import See from "../../assets/icon/See.svg";
import dropdown from "../../assets/icon/dropdown.svg";
import React, { useState } from "react";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [labelText, setLabelText] = useState('Name');

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;

    // Update the label text based on the selected option
    if (selectedValue === 'Individual') {
      setLabelText('Name');
    } else if (selectedValue === 'Company') {
      setLabelText('Company Name');
    }

    // Update the selected option in the state
    setSelectedOption(selectedValue);
  };

  return (
    <>
      <div className="signup-page">
        <div className="logolabel">
          <img src={shelterstride} alt="shelterstridelogo" />
        </div>
        <div className="signup-container">
          <h2> Create your account</h2>
          <div className="signup-form">
            <div className="form-group">
              <label className="acclabel" htmlFor="Account-Type">
                Account Type
              </label>
              <div className="dropdown-div">
                <select id="dropdown"  value={selectedOption}
                onChange={handleDropdownChange}
                className="round-dropdown">
                  <option value="Individual">Individual</option>
                  <option value="Company">Company</option>
                </select>
                <div className="dropdown-icon-container">
                  <img src={dropdown} alt="Dropdown Icon" />
                </div>
              </div>
              {/* Your other form elements */}
            </div>

            <div className="form-group">
              <label htmlFor="name">{labelText}</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                style={{ backgroundImage: `url(${People})` }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                style={{ backgroundImage: `url(${Email})` }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  style={{ backgroundImage: `url(${lock})` }}
                />
                <div
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <img src={See} alt="Toggle Password Visibility" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <div className="password-input-container">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  style={{ backgroundImage: `url(${lock})` }}
                />
                <div
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <img src={See} alt="Toggle Password Visibility" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <button type="submit">Sign Up</button>
            </div>

            <p className="terms-text">
              By signing up, you agree to our{""}
              <a href="/termsandpp" target="_blank" rel="noopener noreferrer">
                terms and privacy policy
              </a>
            </p>
          </div>

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

export default SignUp;
