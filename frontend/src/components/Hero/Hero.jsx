import React from "react";
import styles from "./Hero.module.css";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const Navigation = useNavigate();
  const getStarted = () => {
    Navigation("/work-type");
  }
  return (
    <div className={`${styles.hero}`}>
      <div
        className={`${styles.hero_content} flex justify-center items-center`}
      >
        <div className={`${styles.left}`}>
          <h1 className={styles.firstLine}>Help At</h1>
          <h1 className={styles.secondLine}>Your Doorstep</h1>
          <p>
            Apna helper is an online platform which fulfills customer’s request
            by connecting with the ideal helper according to thier needs. Save
            your every minute and let us do your work!!
          </p>
          <div className={styles.right_button}>
            <PrimaryButton
              content="Get Started"
              backgroundColor="#00FFCC"
              padding="8px 80px"
              boxShadow="0px 5px 10px 1px rgba(0, 255, 204, 0.2)"
              border="1px solid var(--primary-color)"
              onClick={getStarted}
            />
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
