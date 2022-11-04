import React from "react";
import styles from "./SignUp.module.css";
import Line from "../../../../components/shared/Line/Line";
import PrimaryButton from "../../../../components/shared/PrimaryButton/PrimaryButton";
import Form from "../../../../components/shared/Form/Form";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../../../components/shared/Input/Input";

const SignUp = () => {

    const Navigation = useNavigate();
    const accountTypeNavigation = () => {
        Navigation("/register/account-type");
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <Form heading="Sign up" text="please fill the details and create your account" >
                    <div className={`${styles.ga_button} flex items-center justify-center`} >
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

                    <div className={`${styles.fill}`}>
                        <div className="flex">
                            <Input name="first-name" type="text" iconClasses="fa-solid fa-user" label="First Name" />
                            <Input name="last-name" type="text" iconClasses="fa-solid fa-user" label="Last Name" />
                        </div>

                        <Input name="email" type="email" iconClasses="fa-solid fa-at" label="Email" />
                        <Input name="email" type="email" iconClasses="fa-solid fa-at" label="Email" />
                        <Input name="email" type="email" iconClasses="fa-solid fa-at" label="Email" />
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
