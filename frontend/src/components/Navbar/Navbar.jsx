import React from 'react';
import styles from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className={`${styles.header} flex items-center justify-between `} >
      <div className={`${styles.header_left} `}>
        <h1 className={styles.logo}>Apna Helper</h1>
      </div>

      <div className={`${styles.header_right} `} >
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