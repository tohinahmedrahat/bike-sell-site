import React from 'react';
import img from '../../../img/gril.png'
const About = () => {
    return (
        <div className='my-2'>
            <div className='relative'>
                <img src={img} alt="" />
                <div className='absolute top-3 right-10 ml-auto w-2/4'>
                    <h3 className='text-3xl'>Welcome To The Best Bike Ever</h3>
                    <h5 className='text-xl capitalize my-3'>you can find best bike for you here</h5>
                    <p className=''>A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist. Bicycles were introduced in the 19th century in Europe.</p>
                </div>
            </div>

        </div>
    );
};

export default About;