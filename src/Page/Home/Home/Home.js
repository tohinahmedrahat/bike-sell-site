import React from 'react';
import About from '../About/About';
import Adversment from '../Adveresment/Adversment';
import Categorys from '../Categorys/Categorys';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categorys></Categorys>
            <About></About>
            <Adversment></Adversment>
        </div>
    );
};

export default Home;