import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookNow from '../BookNow/BookNow';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const {name} = useParams()
    const [bookingProduct,setBookingProduct] = useState(null)
    const {isLoading,data} = useQuery({
        queryKey:["product",name],
        queryFn: async () => {
            const res = await fetch(`https://service-server-tohinahmedrahat.vercel.app/product?category=${name}`)
            const data = await res.json()
            return data
          }
    })
    return (
        <div>
            {
                isLoading?<progress className="progress w-56"></progress>:<div className='md:grid grid-cols-3 gap-2'>
                    {
                        data.map(product => <ProductCard setBookingProduct={setBookingProduct} key={product._id} product={product}></ProductCard>)
                    }
                </div>
            }
            {
                bookingProduct && <BookNow setBookingProduct={setBookingProduct} bookingProduct={bookingProduct}></BookNow>
            }
        </div>
    );
};

export default Products;