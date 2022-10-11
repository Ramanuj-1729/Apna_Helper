import React from "react";
import styles from "./Hero.module.css";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton/SecondaryButton";

const Hero = () => {
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
          <div className="flex">
            <div className={styles.left_button}>
              <SecondaryButton
                content="Become a helper"
                padding="8px 32px"
                boxShadow="0px 5px 10px 1px rgba(0, 255, 204, 0.2)"
                color="#00FFCC"
                border="1px solid #00FFCC"
              />
            </div>
            <div className={styles.right_button}>
              <PrimaryButton
                content="Create a job"
                backgroundColor="#00FFCC"
                padding="8px 58px"
                boxShadow="0px 5px 10px 1px rgba(0, 255, 204, 0.2)"
                border="1px solid var(--primary-color)"
              />
            </div>
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
