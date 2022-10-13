import React from "react";
import styles from "./SignUp.module.css";
import Line from "../../../components/shared/Line/Line";
import PrimaryButton from "../../../components/shared/PrimaryButton/PrimaryButton";
import Form from "../../../components/Form/Form";
import RegisterationStatusBar from '../../../components/RegistrationStatusBar/RegistrationStatusBar';
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {

    const Navigation = useNavigate();
    const accountTypeNavigation = () => {
        Navigation("/register/account-type");
    };


    return (
        <>
            <RegisterationStatusBar state={1} />
            <div className="flex items-center justify-center">
                <Form
                    heading="Sign up"
                    text="please fill the details and create your account"
                >
                    <div
                        className={`${styles.ga_button} flex items-center justify-center`}
                    >
                        <button className="flex items-center justify-center">
                            <img src="/images/google-logo.png" alt="" />
                            <span>Sign up with Google</span>
                        </button>
                        <div className={styles.darkButton}>
                            <button className=" flex items-center justify-center">
                                <img src="/images/apple-logo.png" alt="" />
                                <span>Sign up with Apple</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className={styles.line1}>
                            <Line width="80px" height="1px" backgroundColor="var(--gray-midium-color)" />
                        </div>
                        <span> or sign up with </span>

                        <div className={styles.line2}>
                            <Line width="80px" height="1px" backgroundColor="var(--gray-midium-color)" />
                        </div>
                    </div>

                    <div className={`${styles.fill} flex direction-col`}>
                        <div className="flex">
                            <input
                                id="place"
                                type="text"
                                className={styles.fname}
                                name=" First Name"
                                placeholder="First Name"
                            />
                            <input
                                id="place"
                                className={styles.lname}
                                type="text"
                                name=" Last Name"
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            id="place"
                            type="Email"
                            name="Email Address"
                            placeholder="email"
                        />
                        <input
                            id="place"
                            type="password"
                            name="create password"
                            placeholder="create Password"
                        />
                        <input
                            id="place"
                            type="password"
                            name="confirm password"
                            placeholder="confirm Password"
                        />
                    </div>
                    <div className={styles.line3}>
                        <Line width="580px" height="1px" backgroundColor="var(--gray-midium-color)" />
                    </div>

                    <div className={`${styles.signButton} flex`}>
                        <PrimaryButton
                            onClick={accountTypeNavigation}
                            content="Sign Up"
                            backgroundColor="#00FFCC"
                            padding="4px 252px"
                            boxShadow="0px 8px 25px 2px rgba(0, 255, 204, 0.25)"
                        />
                    </div>

                    <div className={styles.bottomButton}>
                        <span>already have an account ? </span>
                        <NavLink to="/sign-in">sign in here</NavLink>
                    </div>
                </Form>
            </div>
            <div className={styles.waves}>
                <img src="/images/wave-top.png" alt="oh no" />
            </div>
        </>
    );
};

export default SignUp;
