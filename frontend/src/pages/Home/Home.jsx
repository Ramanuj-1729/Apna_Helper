import React from 'react';
import Hero from '../../components/Hero/Hero'
import How from '../../components/HowItWorks/How'

const Home = () => {
    return (
        <>
            <div>
                <Hero />
            </div>
            <div>
                <How/>
            </div>
        </>
    );
}

export default Home;