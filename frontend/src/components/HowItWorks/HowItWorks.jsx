import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <> 
      <div className={`${styles.wrapper}`}>

        <div className={`${styles.heading} flex justify-center items-center `}>
          <h1>How It Works ?</h1>
        </div>
        <div className="flex">
          <div>
            <h4 className={styles.heading1}>Create Job</h4>
            <p className={styles.para1}>
              Post your job in just a few clicks.You got any work and need
              someone else to do it for you?? then you are at the right place.
            </p>
            <h4 className={styles.heading2}>Helper Reaches You</h4>
            <p className={styles.para2}>
              Once you have approved the helper. your location will be shared to
              him so that can reach you as soon as possible.
            </p>
          </div>

          <div>
            <img
              className={styles.middleImage}
              src="images/HowItWorks-1.png"
              alt=""
            />
          </div>

          <div>
            <h4 className={styles.heading3}>Choose Your Helper</h4>
            <p className={styles.para3}>
              Find the right helper nearest to you according to your work.
              Select from variou profiles according to your budget.
            </p>
            <h4 className={styles.heading4}>Get Your Job Done</h4>
            <p className={styles.para4}>
              Once your work is done and you are satisfied with the service.
              Easily pay the price you both agreed on.enjoy getting your work
              done easily...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
