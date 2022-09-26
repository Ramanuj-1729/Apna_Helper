import React from 'react';
import Hero from '../../components/Hero/Hero'
<<<<<<< HEAD
import How from '../../components/HowItWorks/How'
import Slider from '../../components/SatifiedCustomerSlider/Slider';

const Home = () => {
    return (
        <>
            <div>
                <Hero />
            </div>
            <div>
                <How/>
            </div>
            <div>
                <Slider  />
            </div>
        </>
=======
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import OurPrinciples from "../../components/OurPrinciples/OurPrinciples";

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
      </>
>>>>>>> d3b2e7bc2eb4f5942e4e43e7bef0042cede69f92
    );
}

export default Home;