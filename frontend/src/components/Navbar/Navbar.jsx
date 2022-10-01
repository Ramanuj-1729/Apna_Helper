import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from 'react-router-dom';

 
const Navbar = () => {
  const Navigation = useNavigate();
  const [shadow, setShadow] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 60) {
      setShadow(true);
    }
    else {
      setShadow(false);
    }
  }

  const signUpNavigation = () => {
    Navigation('/sign-up');
  }
  return (
    <div
      className={`${styles.navbar} ${shadow === true ? styles.drope_shadow : ""
        } flex items-center justify-between `}
    >
      <div className={`${styles.navbar_left} `}>
        <NavLink to="/">
          {" "}
          <h1 className={styles.logo}>Apna Helper</h1>{" "}
        </NavLink>
      </div>

      <div
        className={`${styles.navbar_right} flex items-center justify-between `}
      >
        <div className="menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About</NavLink>
          <NavLink to="/contact-us">Contact</NavLink>
        </div>

        <div className={styles.auth}>
          <button className={`${styles.login} ${styles.navBtn}`}>Log In</button>
          {/* <NavLink to="/sign-up"> */}
          <button onClick={signUpNavigation} className={`${styles.signup} ${styles.navBtn}`}>
            Sign Up
          </button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;