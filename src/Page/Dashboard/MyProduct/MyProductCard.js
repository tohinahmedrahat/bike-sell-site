import React from 'react';
import { toast } from 'react-toastify';

const MyProductCard = ({products}) => {
    const { buyYear, category, condition, details, img, meetplace, name, number, postTime,
        price, userEmail, orginalPrice, sellerName, _id,verify } = products
        const deleteProduct = id => {
           
            fetch(`http://localhost:5000/product/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast("your product delet succesfully")
                }
            })
        }
        const advertisement = products =>{
                fetch("http://localhost:5000/advertisement",{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(products)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast("your product add to advertisement")
                    }
                })
        }
    return (
        <div>
            <div className="card flex w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>{details.slice(0,199)}....</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">Purchase {buyYear}</div>
                        <div className="badge badge-outline">{condition}</div>
                        <div className="badge badge-outline">{meetplace}</div>
                        <div className="badge badge-outline">{number}</div>
                        <div className="badge badge-outline">{postTime}</div>
                        <div className="badge badge-outline">{verify?verify:""}</div>
                        <div className="badge badge-outline">Sell Price: {price}</div>
                        <div className="badge badge-outline">Buy Price: {orginalPrice}</div>
                        <div className="badge badge-outline">Seller Email: {userEmail}</div>
                        <div className="badge badge-outline">Seller Name: {sellerName}</div>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <button onClick={()=> advertisement(products)} className="btn btn-outline btn-success">Add adverise</button>
                        <button onClick={()=> deleteProduct(_id)} className="btn btn-outline btn-success">Delet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;