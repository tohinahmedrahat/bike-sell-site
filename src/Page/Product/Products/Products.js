import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const {name} = useParams()
    const {isLoading,data,error} = useQuery({
        queryKey:["product",name],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product?category=${name}`)
            const data = await res.json()
            return data
          }
    })
    return (
        <div>
            {
                isLoading?<progress className="progress w-56"></progress>:<div className='md:grid grid-cols-3 gap-2'>
                    {
                        data.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Products;