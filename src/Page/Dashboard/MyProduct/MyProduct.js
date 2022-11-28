import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Shared/UseAuth/UseAuth';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const {user} = UseAuth()
    const email = user.email
    const {isLoading,data,error} = useQuery({
        queryKey:["product",email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${email}`)
            const data = await res.json()
            return data
          }
    })

    return (
        <div>
            <div className='md:grid grid-cols-2 gap-2'>
                {
                   isLoading?<progress className="progress w-56"></progress>:data.map(products => <MyProductCard key={products._id} products={products}></MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProduct;