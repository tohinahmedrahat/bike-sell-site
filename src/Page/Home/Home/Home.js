import React from 'react';
import Categorys from '../Categorys/Categorys';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categorys></Categorys>
        </div>
    );
};

export default Home;