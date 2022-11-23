import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ Categorys }) => {
    const {name,img,details}=Categorys
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title capitalize">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${name}`} className="">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;