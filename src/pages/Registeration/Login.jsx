import "/src/scss/pages/_login.scss";
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import See from "../../assets/icon/See.svg";
import React, { useState } from "react";

function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <div className="Login-page">
        <div className="logolabel">
          <img
            src="src\assets\images\ShelterStrideSideLogo.svg"
            alt="Shelters Stride"
          />
        </div>
        <div className="Login-container">
          <h2> Welcome Back</h2>
          <div className="Login-form">
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

            <p className="forgot-password">
                <a href="/forgot-password" target="_blank" rel="noopener noreferrer">
                  Forgot Password?
                </a>
              </p>

            <div className="form-group">
              <button type="submit">Sign in</button>
            </div>
          </div>
          <p className="Login-text">
              New to ShelterStride ?{""}
              <a href="/signup" target="_blank" rel="noopener noreferrer">
                Sign up
              </a>
            </p>
        </div>
      </div>
    </>
  );
}

export default Signin;
