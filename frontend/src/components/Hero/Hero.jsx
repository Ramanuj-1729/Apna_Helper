import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={`${styles.hero_content} flex justify-content items-center direction-col`} >
        <div className={styles.logo}>Apna Helper...</div>
        <div className={`${styles.button} `}>
          <button>Post your job</button>
          <button className={styles.right_button}>Become a helper</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
