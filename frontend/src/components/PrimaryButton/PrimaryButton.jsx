import React from 'react'
import style from './PrimaryButton.module.css'

const PrimaryButton = ({ content, backgroundColor, padding, boxShadow ,fontSize}) => {
  return (
    <div className={style.wrapper}>
      <button
        style={{ backgroundColor, padding, boxShadow ,fontSize}}
      >
        {content}
      </button>
    </div>
  );
};

export default PrimaryButton