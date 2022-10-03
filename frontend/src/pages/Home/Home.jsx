import React from "react";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import OurPrinciples from "../../components/OurPrinciples/OurPrinciples";
import Slider from "../../components/SatifiedCustomerSlider/Slider";
import style from "./Home.module.css";
import sliderData from '../../components/satisfiedCustomer';

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className={style.waves}>
        <img src="images/wave-top.png" alt="" />
      </div>
      <div className={style.principle}>
        <div className={style.background}></div>
        <OurPrinciples />
      </div>
      <div className={style.How}>
        <div className={style.background2}></div>

        <HowItWorks />
      </div>
      <div className={style.ourSatisfiedCustomer}>
        <h2 className="justify-center items-center flex">
          Our Customer Reviews
        </h2>
        <Slider sliderData={sliderData} />
      </div>
    </>
  );
};

export default Home;
