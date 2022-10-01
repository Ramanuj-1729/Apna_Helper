import React from "react";
import style from "./SignUp.module.css";
import Line from "../../components/shared/Line/Line";
const SignUp = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.box} flex direction-col `}>
        <h3>Registeration</h3>
        <span>fill the form to get yourself registered...</span>
        <button className={`flex items-center justify-center ${style.google}`}>
          <img src="images/google-logo.png" alt="" />
          Sign up with google
        </button>

        <div className={`${style.line}flex items-center justify-center direction-row`}>
          <Line width="50%" height="1px" />
          or sign up with email
          <Line width="50%" height="1px" />
        </div>
        <form className={`${style.form} flex direction-col`} action="">
          <span>First Name*</span>
          <input
            id="place"
            className=""
            type="text"
            name=" First Name"
            placeholder="First Name"
          />
          <span>Last Name*</span>
          <input
            id="place"
            className=""
            type="text"
            name=" Last Name"
            placeholder="Last Name"
          />
          <span>Email*</span>
          <input
            id="place"
            className=" "
            type="Email"
            name="Email"
            placeholder="email"
          />
          <span>Password*</span>
          <input
            id="place"
            className=""
            type="password"
            name=" password"
            placeholder="Password"
          />
          <button className={style.submit}>Finish Now</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
