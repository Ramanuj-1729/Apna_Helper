import React from 'react';
import style from './About.module.css';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton';
const About = () => {

    const Navigation = useNavigate();

    const readMore = () => {
        Navigation()
    }

    return (
      <div className={`${style.wrapper} flex `}>
        <div className={style.left}>
          <h1>About</h1>
          <h1>Apna Helper !</h1>
          <p>
            Apna Helper is a Worldwide employement company which helps people in
            posting and finding jobs near them. Here at Apna Helper we are
            consistently trying to improve the work culture of the society and
            we aim to provide the best of our service.
          </p>
          <PrimaryButton
            backgroundColor="#425E5E"
            content="Read More"
            padding="5px 55px"
            boxShadow="0px 5px 10px 1px rgba(66, 94, 94, 0.2)"
          />
        </div>
        <div className={`${style.right} flex items-center justify-center `}>
          <img src="images/about-us-1.png" alt="" />
        </div>
      </div>
    );
}

export default About;