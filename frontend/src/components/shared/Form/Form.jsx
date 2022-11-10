import React from "react";
import style from "./Form.module.css";

const Form = ({children,heading,text,onSubmit}) => {
  return (
    <>
      <div className={`${style.form_wrapper}`}>
        <form onSubmit={onSubmit}>
          <h2>{heading}</h2>
          <h5>{text}</h5>
          {children}
        </form>
      </div>
    </>
  );
};

export default Form;
