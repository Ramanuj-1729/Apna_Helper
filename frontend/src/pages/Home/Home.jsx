import React from 'react';
import Hero from '../../components/Hero/Hero'
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import OurPrinciples from "../../components/OurPrinciples/OurPrinciples";
import Slider from '../../components/SatifiedCustomerSlider/Slider';

const Home = () => {
    return (
      <>
        <div>
          <Hero />
        </div>
        <div>
          <OurPrinciples />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <Slider />
        </div>
      </>
    );
}

export default Home;