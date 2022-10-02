import React, { useState } from 'react';
import style from './About.module.css';
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton';
const About = () => {

  const [display, setDisplay] = useState(true);

  const changeDisplay = () => {
    setDisplay(false);
  }

  return (
    <>
      <div className={`${style.wrapper}  `}>
        <div
          className={`${style.upper}  ${display === true ? "flex" : "hidden"
            }  `}
        >
          <div className={style.left}>
            <h1>About</h1>
            <h1>Apna Helper !</h1>
            <p>
              Apna Helper is a Worldwide employement company which helps
              people in posting and finding jobs near them. Here at Apna
              Helper we are consistently trying to improve the work culture of
              the society and we aim to provide the best of our service.
            </p>
            <PrimaryButton
              backgroundColor="#425E5E"
              content="Read More"
              padding="5px 55px"
              boxShadow="0px 5px 10px 1px rgba(66, 94, 94, 0.2)"
              onClick={changeDisplay}
            />
          </div>
          <div className={`${style.right}`}>
            <img src="images/about-us-1.png" alt="" />
          </div>
        </div>

        <div
          className={`${style.moreabout
            } flex items-center justify-center direction-col ${display === false ? "flex" : "hidden"
            }`}
        >
          <h1>About Apna Helper !!!</h1>
          <h4>Welcome To Apna Helper</h4>
          <p>
            Apna helper is a professional blog
            platform. Here we will provide you only interesting content, which
            you will like very much. We're dedicated to providing you the best
            of blog, with a focus on dependability and tech article. We're
            working to turn our passion for blog into a booming online
            website. We hope you enjoy our blog as much as we enjoy offering
            them to you. I will keep posting more important posts on my
            Website for all of you. Please give your support and love. Thanks
            For Visiting Our site.
          </p>
          <p>
            I will keep posting more important posts on my Web site for all of
            you. Please give your support and love.lhkjhjhjh hjjvhjvhhvj
            hvjvhvhjvvh jjvvhvhjvgjvgvggvgj
          </p>
          <h4 className={style.niceDay}>Have a nice day</h4>
        </div>
      </div>
    </>
  );
}

export default About;