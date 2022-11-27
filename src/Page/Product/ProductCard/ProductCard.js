import React from 'react';

const ProductCard = ({ product }) => {
    const { buyYear, category, condition, details, img, meetplace, name, number, postTime,
        price, userEmail, orginalPrice, sellerName } = product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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
                        <div className="badge badge-outline">Sell Price: {price}</div>
                        <div className="badge badge-outline">Buy Price: {orginalPrice}</div>
                        <div className="badge badge-outline">Seller Email: {userEmail}</div>
                        <div className="badge badge-outline">Seller Name: {sellerName}</div>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <button className="btn btn-outline btn-success">Add to wishList</button>
                        <button className="btn btn-outline btn-success">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;