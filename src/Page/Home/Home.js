import React from 'react';
import UseAuth from '../../Shared/UseAuth/UseAuth';

const Home = () => {
    const{loginWithGoogle} = UseAuth()
    console.log(loginWithGoogle)
    return (
        <div>
            <h1>comming soon</h1>
        </div>
    );
};

export default Home;