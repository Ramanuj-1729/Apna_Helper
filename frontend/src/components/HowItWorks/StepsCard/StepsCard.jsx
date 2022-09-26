import React from 'react';
import Style from './StepsCard.module.css';

const StepsCard = ({stepHeading, stepContent, stepColor}) => {
    
  return (
    <div style={{backgroundColor: stepColor}} className={Style.wrapper}>
        <h2>{stepHeading}</h2>
        <p>{stepContent}</p>
    </div>
  )
}

export default StepsCard;