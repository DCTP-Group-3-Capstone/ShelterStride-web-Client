import React, { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/images/shelterLogo.svg";
import Button from "./Button";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <img
          className="navbar-logo"
          onClick={closeMobileMenu}
          src={Logo}
          alt="Logo"
        />
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              // style={{ color: "#6c9" }}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Donate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Blog <FiChevronDown />
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Gift a home <FiChevronDown />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/log-in"
              className="nav-links-mobile-log-in"
              onClick={closeMobileMenu}
            >
              Log in
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default NavBar;
