import React from 'react'
import style from './SecondaryButton.module.css'

const SecondaryButton = ({ content, padding, boxShadow, color, border, fontSize, onClick ,borderRadius}) => {
  return (
    <div className={style.wrapper}>
      <button style={{ padding, boxShadow, color, border, fontSize,borderRadius }}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  )
}

export default SecondaryButton;