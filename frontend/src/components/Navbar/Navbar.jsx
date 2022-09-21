import React from 'react'
import styles from "./Navbar.module.css"
import '../App.css'


const Navbar = () => {
  return (
    <div className={`${styles.header} flex items-center justify-between `}>
      <div className={`${styles.header_left} `}>
        <h2>Apna Helper</h2>
      </div>
      <div
        className={`${styles.header_right} items-center justify-between `}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Log In</a>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar