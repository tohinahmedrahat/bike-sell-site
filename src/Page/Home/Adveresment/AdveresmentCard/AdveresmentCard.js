import React from 'react';

const AdveresmentCard = ({adversment}) => {
    const { condition, img, name,
        price, userEmail, sellerName, } = adversment
    return (
        <div>
            <div className="card flex w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="card-actions">
                        <div className="badge badge-outline">{condition}</div>
                        <div className="badge badge-outline">Sell Price: {price}</div>
                        <div className="badge badge-outline">Seller Email: {userEmail}</div>
                        <div className="badge badge-outline">Seller Name: {sellerName}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdveresmentCard;