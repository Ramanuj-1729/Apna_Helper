import React from "react";
import styles from "./SignUp.module.css";
import Line from "../../../../components/shared/Line/Line";
import PrimaryButton from "../../../../components/shared/PrimaryButton/PrimaryButton";
import Form from "../../../../components/shared/Form/Form";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../../../components/shared/Input/Input";
import { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        repeat_password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/signup";
            const { data: res } = await axios.post(url, data);
            navigate("/register/build-profile/profile-picture");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <Form heading="Sign up" text="please fill the details and create your account" onSubmit={handleSubmit} >
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
                        <Input name="email" type="text" iconClasses="fa-solid fa-at" label="Email" value={data.email} onChange={handleChange} />
                        <Input name="password" type="password" iconClasses="fa-solid fa-lock" label="Password" value={data.password} onChange={handleChange} />
                        <Input name="repeat_password" type="password" iconClasses="fa-solid fa-lock" label="Password" value={data.repeat_password} onChange={handleChange} />
                    </div>
                    <div className={styles.line3}>
                        <Line width="580px" height="1px" backgroundColor="var(--gray-midium-color)" />
                    </div>

                    <div className={`${styles.signButton} flex`}>
                        <PrimaryButton
                            content="Sign Up"
                            backgroundColor="#00FFCC"
                            padding="4px 252px"
                            boxShadow="0px 8px 25px 2px rgba(0, 255, 204, 0.25)"
                            type="submit"
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
