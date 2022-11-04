import React from "react";
import Line from "../../components/shared/Line/Line";
import styles from "./RegistrationStatusBar.module.css";

const RegistrationStatusBar = ({ state }) => {
    return (
        <div className={`${styles.wrapper} flex items-center justify-center `}>
            <div className="flex items-center justify-center">
                <div className={`${state === 1 ? styles.active_number : state > 1 ? styles.done_number : ""} ${styles.number} flex items-center justify-center`}>
                    <img style={state > 1 ? {} : { display: "none" }} src="/images/check.png" alt="check" />
                    <span style={state <= 1 ? {} : { display: "none" }}>1</span>
                </div>

                <div className={`${state === 1 ? styles.active_text : state > 1 ? styles.done_text : ""} ${styles.text}`} >
                    Create Account
                </div>
            </div>

            <div className={styles.line}>
                <Line height={state >= 2 ? "2px" : "1px"} width="100px" backgroundColor={state >= 2 ? "var(--primary-color)" : "var(--gray-midium-color)"} />
            </div>

            <div className="flex items-center justify-center">
                <div className={`${state === 2 ? styles.active_number : state > 2 ? styles.done_number : ""} ${styles.number} flex items-center justify-center`}>
                    <img style={state > 2 ? {} : { display: "none" }} src="/images/check.png" alt="check" />
                    <span style={state <= 2 ? {} : { display: "none" }}>2</span>
                </div>

                <div className={`${state === 2 ? styles.active_text : state > 2 ? styles.done_text : ""} ${styles.text}`} >
                    Select Account Type
                </div>
            </div>

            <div className={styles.line}>
                <Line height={state >= 3 ? "2px" : "1px"} width="100px" backgroundColor={state >= 3 ? "var(--primary-color)" : "var(--gray-midium-color)"} />
            </div>

            <div className="flex items-center justify-center">
                <div className={`${state === 3 ? styles.active_number : state > 3 ? styles.done_number : ""} ${styles.number} flex items-center justify-center`}>
                    <img style={state > 3 ? {} : { display: "none" }} src="/images/check.png" alt="check" />
                    <span style={state <= 3 ? {} : { display: "none" }}>3</span>
                </div>

                <div className={`${state === 3 ? styles.active_text : state > 3 ? styles.done_text : ""} ${styles.text}`} >
                    Build Profile
                </div>
            </div>

            <div className={styles.line}>
                <Line height={state >= 4 ? "2px" : "1px"} width="100px" backgroundColor={state >= 4 ? "var(--primary-color)" : "var(--gray-midium-color)"} />
            </div>

            <div className="flex items-center justify-center">
                <div className={`${state === 4 ? styles.active_number : state > 4 ? styles.done_number : ""} ${styles.number} flex items-center justify-center`}>
                    <img style={state > 4 ? {} : { display: "none" }} src="/images/check.png" alt="check" />
                    <span style={state <= 4 ? {} : { display: "none" }}>4</span> 
                </div>

                <div className={`${state === 4 ? styles.active_text : state > 4 ? styles.done_text : ""} ${styles.text}`} >
                    Finish
                </div>
            </div>


        </div>
    );
};

export default RegistrationStatusBar;
