import React from 'react';
import img from '../../img/error.jpg'
import Header from '../../Shared/Header/Header';
const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex items-center justify-center flex-col'>
                <img className='w-2/4' src={img} alt="" />
                <h4 className='my-4 text-xl font-semibold text-red-600 capitalize'>sorry your page can't found</h4>
                <h6 className='text-lg font-semibold text-green-500 capitalize'>please try again</h6>
            </div>

        </div>
    );
};

export default ErrorPage;