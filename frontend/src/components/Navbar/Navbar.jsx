import React from 'react';
import styles from "./Navbar.module.css";
import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className={`${styles.header} flex items-center justify-between `}>
      <div className={`${styles.header_left} `}>
        <h2>Apna Helper</h2>
      </div>
      <div
        className={`${styles.header_right} items-center justify-between `}
      >
        <NavLink to="#">Home</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Contact</NavLink>
        <NavLink to="#">Log In</NavLink>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;