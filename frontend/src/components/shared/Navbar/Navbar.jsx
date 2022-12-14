import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Navbar = () => {
  const Navigation = useNavigate();
  const Location = useLocation();
  let path = Location.pathname;
  const [shadow, setShadow] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 60) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const signUpNavigation = () => {
    Navigation("/register/sign-up");
  };
  const loginNavigation = () => {
    Navigation("/log-in");
  };

  return (
    <div
      className={`${styles.navbar} ${shadow === true ? styles.drope_shadow : ""
        } flex items-center justify-between `}
    >
      <div className={`${styles.navbar_left} `}>
        <NavLink to="/">
          <h1 className={styles.logo}>Apna Helper</h1>
        </NavLink>
      </div>

      <div
        className={`${styles.navbar_right} flex items-center justify-between `}
      >
        <div className="menu">
          <NavLink to="/" className={`${path === "/" ? styles.active : ""}`}>Home</NavLink>
          <NavLink to="/about-us" className={`${path === "/about-us" ? styles.active : ""}`}>About</NavLink>
          <NavLink to="/contact-us" className={`${path === "/contact-us" ? styles.active : ""}`}>Contact</NavLink>
        </div>

        <div className={`${styles.auth} flex items-center justify-center `}>
          <div className={styles.leftButton}>
            <SecondaryButton
              content="Log In"
              padding="5px 38px"
              boxShadow="0 0 10px rgba(0, 204, 153, 0.2)"
              color="#00FFCC"
              border="1px solid #00ffcc"
              onClick={loginNavigation}
            />
          </div>
          <PrimaryButton
            content="Sign Up"
            padding="5px 32px"
            backgroundColor="var(--primary-color)"
            boxShadow="0 0 10px rgba(0, 204, 153, 0.2)"
            onClick={signUpNavigation}
            border="1px solid var(--primary-color)"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
