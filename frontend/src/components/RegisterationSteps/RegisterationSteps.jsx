import React from "react";
import Line from "../shared/Line/Line";
import styles from "./RegisterationSteps.module.css";

const RegisterationSteps = ({ state }) => {
  const checkImg = <img src="images/check.png" alt="" />;
  return (
    <div className={`${styles.wrapper} flex items-center justify-center `}>
      <div className="flex items-center justify-center">
        <div className={`${state < 0 ? styles.done_number : styles.number}`}>
          {`${state < 0 ? checkImg : "1"}`}
        </div>
        <div
          className={`${
            state === 0 ? styles.active_text : state < 0 ? "" : styles.done_text
          }`}
        >
          Create Account
        </div>
      </div>
      <div className={styles.line}>
        <Line height="1px" width="100px"></Line>
      </div>
      <div className="flex items-center justify-center">
        <div className={`${state < 1  ? styles.done_number : styles.number}`}>
          2
        </div>

        <div
          className={`${
            state === 1 ? styles.active_text : state < 1 ? styles.done : ""
          }`}
        >
          Select Account Type
        </div>
      </div>
      <div className={styles.line}>
        <Line height="1px" width="100px"></Line>
      </div>
      <div className="flex items-center justify-center">
        <div className={`${styles.number} flex items-center justify-center`}>
          3
        </div>
        <div>Build Profile</div>
      </div>
      <div className={styles.line}>
        <Line height="1px" width="100px"></Line>
      </div>
      <div className="flex items-center justify-center">
        <div className={`${styles.number} flex items-center justify-center`}>
          4
        </div>
        <div>Finish</div>
      </div>
    </div>
  );
};

export default RegisterationSteps;
