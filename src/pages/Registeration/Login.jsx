import "/src/scss/pages/_login.scss";
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import See from "../../assets/icon/See.svg";
import Cancel from "../../assets/icon/Cancel.svg";
import React, { useState } from "react";

function Login() {

  //password toggling
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
          <div className="Login-Box">
            <div className="Login-form">
              <label htmlFor="email">Email Address</label>
              <div className="form-group">
                <img src={Email} alt="Email Icon" />
                <input type="email" id="email" placeholder="Enter your email" />
              </div>

              <label htmlFor="password">Password</label>
              <div className="form-group">
                <img src={lock} alt="Password Icon" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                />
                <div
                  className="password-toggle"
                  onClick={togglePasswordVisibility}>
                   <img src={passwordVisible ? See : Cancel}
                  alt="Toggle Password Visibility" />
                </div>
              </div>

              <p className="forgot-password">
                <a
                  href="/forgot-password"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forgot Password?
                </a>
              </p>

              <div className="button-group">
                <button type="submit">Sign in</button>
              </div>
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

export default Login;
