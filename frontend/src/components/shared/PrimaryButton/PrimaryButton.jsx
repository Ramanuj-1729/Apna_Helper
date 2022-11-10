import React from 'react'
import style from './PrimaryButton.module.css'

const PrimaryButton = ({ content, backgroundColor, padding, boxShadow, border, onClick, fontSize, type }) => {
  return (
    <div className={style.wrapper}>
      <button
        style={{ backgroundColor, padding, boxShadow, border, fontSize }} 
        onClick={onClick}
        type={type}
      >
        {content}
      </button>
    </div>
  );
};

export default PrimaryButton