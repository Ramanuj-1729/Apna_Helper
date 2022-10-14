import React from "react";
import style from "./Form.module.css";

const Form = ({children,heading,text}) => {
  return (
    <>
      <div className={`${style.form_wrapper}`}>
        <form action="">
          <h2>{heading}</h2>
          <h5>{text}</h5>
          {children}
        </form>
      </div>
    </>
  );
};

export default Form;