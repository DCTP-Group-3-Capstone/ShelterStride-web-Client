import "/src/scss/pages/_login.scss";
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import See from "../../assets/icon/See.svg";
import UnSee from "../../assets/icon/UnSee.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 
import axios from 'axios';



//functions
function Login() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();




  //email handling
  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail) || newEmail === "");
  };

  // Add onFocus event handler to reset error message
  const handleEmailFocus = () => {
    setIsValidEmail(true);
  };

  //password toggling
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  //password handling
  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);


  };

  //login handling

  const handleLoginApi = (event) => {
    event.preventDefault();

    //handle page naviagtion
    //const history = useHistory();

    if (!email || !password) {
      console.log("provide both email and password");
      alert("provide both email and password");
      setError("Please enter both email and password");

      return;
    }

    if (!isValidEmail) {
      console.log("provide a valid email");
      alert("provide a valid email");
      setError("Please enter a valid email");

      return;
    }

    if (isValidEmail) {

      if (email && password) {
        try {
          axios
            .get("https://shelterstride.onrender.com/api/v1", {
              email: email,
              password: password,
            })
            .then((result) => {
              console.log(result);
              alert("Signin successful!");
             
           //  return <Navigate to="/" />;

                   if (result.data) {
              // Success logic
              navigate("/createaccount");
        
                  } else {
                     setError('Incorrect email or password');
                     alert("unsuccessful!");
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
        }
      }
    }
  }

  
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
                <img src={Email} 
                alt="Email Icon" />
                <input type="email" 
                id="email" 
                value={email}
                onChange={handleEmail}
                onFocus={handleEmailFocus} 
                placeholder="Enter your email" />
              </div>
              {!isValidEmail && (
                <p className="error-message">Invalid email address</p>
              )}



              <label htmlFor="password">Password</label>
              <div className="form-group">
                <img src={lock} alt="Password Icon" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter your password"
                />
                <div
                  className="password-toggle"
                  onClick={togglePasswordVisibility}>
                   <img src={passwordVisible ? See : UnSee} alt="Toggle Password Visibility" />
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
                <button type="submit"
                onClick={handleLoginApi}
                >Sign in</button>
              </div>
            </div>
          </div>
          <p className="Login-text">
            New to ShelterStride ?{""}
          
            <Link to="/createaccount">Sign up</Link>

          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
