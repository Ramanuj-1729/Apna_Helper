import React from "react";
import style from "./Form.module.css";

const Form = ({children}) => {
  return (
    <>
      <div className={`${style.form_wrapper}`}>
        <form action="">
          <h2>Sign Up</h2>
          <h5>Please fill the details and create account</h5>
          {children}
        </form>
      </div>
    </>
  );
};

export default Form;
