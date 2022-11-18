import React from 'react'
import styles from "./LogIn.module.css"
import Form from '../../components/shared/Form/Form'
import Line from '../../components/shared/Line/Line'
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton'
import Input from '../../components/shared/Input/Input';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = (props) => {
  const Navigation = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const url = "http://localhost:5000/api/login";
    //   const { data: res } = await axios.post(url, data);
    //   localStorage.setItem("token", res.data);
      // window.location = "/";
    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.status >= 400 &&
    //     error.response.status <= 500
    //   ) {
    //     setError(error.response.data.message);
    //   }
    // }
    Navigation('/post-job/title');
  };

  props.funcNav(false);
  return (
    <>
      <div className={`${styles.login_wrapper} flex items-center justify-center`}>
        <Form heading="Log In" text="welcome back, Please LogIn to your account" onSubmit={handleSubmit}>
          <div className={`${styles.ga_button} flex items-center justify-center`}>
            <button className="flex items-center justify-center">
              <img src="images/google-logo.png" alt="" />
              <span>Log in with Google</span>
            </button>
            <div className={styles.darkButton}>
              <button className=" flex items-center justify-center">
                <img src="images/apple-logo.png" alt="" />
                <span>Log in with Apple</span>
              </button>
            </div>
          </div>
          <div className="flex">
            <div className={styles.line1}>
              <Line width="80px" height="1px" backgroundColor="#C2C2D6" />
            </div>
            <span> or Log in with </span>

            <div className={styles.line2}>
              <Line width="80px" height="1px" backgroundColor="#C2C2D6" />
            </div>
          </div>

          <div className={`${styles.fill}`}>
            <Input name="email" type="text" iconClasses="fa-solid fa-at" label="Email" value={data.email} onChange={handleChange} />
            <Input name="password" type="password" iconClasses="fa-solid fa-lock" label="Password" value={data.password} onChange={handleChange} />
          </div>
          <div>
            <input type="checkbox" />
            remeber me
          </div>
          <div className={styles.line3}>
            <Line width="580px" height="1px" backgroundColor="#C2C2D6" />
          </div>

          <div className={`${styles.signButton} flex`}>
            <PrimaryButton
              content="Log In"
              backgroundColor="#425E5E"
              padding="8px 264px"
              boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)"
              type="submit"
              onClick={handleSubmit}
            />
          </div>

          <div className={styles.bottomButton}>
            <span>new to apna helper ? </span>
            <button>sign up here</button>
          </div>
        </Form>
      </div>
      <div className={styles.waves}>
        <img src="/images/wave-top.png" alt="oh no" />
      </div>
    </>
  );
}

export default LogIn