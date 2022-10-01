import React from 'react'
import style from './PrimaryButton.module.css'

const PrimaryButton = ({ content, backgroundColor, padding, boxShadow }) => {
  return (
    <div className={style.wrapper}>
      <button
        style={{ backgroundColor, padding, boxShadow }}
      >
        {content}
      </button>
    </div>
  );
};

export default PrimaryButton