import React from 'react'
import style from './PrimaryButton.module.css'

const PrimaryButton = ({ content, backgroundColor, padding, boxShadow, fontSize, border, onClick }) => {
  return (
    <div className={style.wrapper}>
      <button
        style={{ backgroundColor, padding, boxShadow, fontSize, border }} 
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
};

export default PrimaryButton