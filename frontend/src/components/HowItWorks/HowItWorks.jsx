import React from "react";
import StepsCard from "./StepsCard/StepsCard";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <>
      <h1>How It Works ?</h1>

      <div className={styles.wrapper}>
        <div className="steps">
          <div className="flex">
            <StepsCard
              stepHeading="1. Create job"
              stepContent="Post your job in just a few clicks.You got any work and need someone else to do it for you?? then you are at the right place."
              stepColor="#16E481"
            ></StepsCard>
            <img className={styles.arrow1} src="images/arrow.png" alt="" />
            <img
              className={styles.worker_image}
              src="images/step1.jpg"
              alt=""
            />
          </div>

          <div className="flex">
            <img
              className={styles.worker_image}
              src="images/step2.jpg"
              alt=""
            />
            <img className={styles.arrow2} src="images/arrow.png" alt="" />
            <StepsCard
              stepHeading="2. Choose Your Helper"
              stepContent="Find the right helper nearest to you according to your work. Select from various profiles according to your budget."
              stepColor="#C816E4"
            ></StepsCard>
          </div>
          <div className="flex">
            <StepsCard
              stepHeading="3. Helper Reaches You"
              stepContent="Once you have approved the helper. your location will be shared to him so that can reach you as soon as possible."
              stepColor="#06BCFB"
            ></StepsCard>
            <img className={styles.arrow1} src="images/arrow.png" alt="" />
            <img
              className={styles.worker_image}
              src="images/step3.jpg"
              alt=""
            />
          </div>
          <div className="flex">
            <img
              className={styles.worker_image}
              src="images/step4.jpg"
              alt=""
            />
            <img className={styles.arrow2} src="images/arrow.png" alt="" />
            <StepsCard
              stepHeading="4. Get Your Job Done"
              stepContent="Once your work is done and you are satisfied with the service. Easily pay the price you both agreed on.
enjoy getting your work done easily..."
              stepColor="#37474F"
            ></StepsCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
