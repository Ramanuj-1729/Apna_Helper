import React from 'react';
import Hero from '../../components/Hero/Hero'
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
    );
}

export default Home;