import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div
        className={`${styles.hero_content} flex justify-center items-center`}
      >
        <div className={`${styles.left}`}>
          <h1 className={styles.firstLine}>Help At</h1>
          <h1 className={styles.secondLine}>Your Doorstep</h1>
          <div>
            <button className={styles.top_button}>Post your job</button>
            <button className={styles.bottom_button}>Become a helper</button>
          </div>
        </div>
        <div className={styles.right}>
          <img src="images/hero-img 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
