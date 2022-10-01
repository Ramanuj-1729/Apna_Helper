import React from 'react'
import style from './SecondaryButton.module.css'

const SecondaryButton = ({content , padding , boxShadow , color ,border}) => {
  return (
    <div className={style.wrapper}>
        <button style={{padding , boxShadow ,color ,border}} >
            {content}
        </button>
    </div>
  )
}

export default SecondaryButton