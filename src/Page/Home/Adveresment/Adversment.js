import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdveresmentCard from './AdveresmentCard/AdveresmentCard';

const Adversment = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertisement`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h3 className='text-2xl font-bold my-3 text-center capitalize'>adversment</h3>
            {
                isLoading?<div className='flex justify-center items-center'>
                <progress className="progress w-56 text-center my-5"></progress></div>:<div className='md:grid grid-cols-3 mb-4'>
                    {
                        data.map(adversment => <AdveresmentCard key={adversment._id} adversment={adversment}></AdveresmentCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Adversment;