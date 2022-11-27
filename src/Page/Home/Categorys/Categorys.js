import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categorys = () => {
    const {isLoading, data} = useQuery({
        queryKey: ['category'],
        queryFn:async () =>{
            const data = await fetch("http://localhost:5000/category")
            const res = await data.json()
            return res
        }
    })
    
    return (
        <div className='mt-4'>
            <h4 className='text-center font-semibold text-xl'>Our Category</h4>
            <div className='my-3 md:grid md:grid-cols-3'>
                {
                   isLoading?<progress className="progress w-56"></progress>:data.map(Categorys => <CategoryCard key={Categorys._id} Categorys={Categorys}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categorys;