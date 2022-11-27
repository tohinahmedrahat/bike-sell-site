import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import UseAuth from '../../../Shared/UseAuth/UseAuth';

const AddProduct = () => {
    const {user} = UseAuth()
    const { register, handleSubmit, reset } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key
    const addProduct = (data) => {
        const file = data.img[0]
        const name = data.name;
        const details = data.details;
        const price = data.price;
        const number = data.number;
        const buyYear = data.buyyear;
        const category = data.category;
        const condition = data.condition;
        const meetplace = data.meetplace;
        const email = user.email;
        const sellerName = user.displayName;
        const orginalPrice = data.orginalPrice;
        const date = new Date().toDateString()
        // host img to imgbb
        const formData = new FormData();
        formData.append("image", file)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgUrl=imgData.data.url
                    saveProductToDatabase(name,details,imgUrl,price,number,buyYear,category,condition,meetplace,date,email,sellerName,orginalPrice)
                }
            })
            
            reset()
    }
    const saveProductToDatabase= (name,details,imgUrl,price,number,buyYear,category,condition,meetplace,date,email,sellerName,orginalPrice) => {
        const Categorys = {
            name:name,
            details:details,
            img:imgUrl,
            price:price,
            number:number,
            buyYear:buyYear,
            category:category,
            condition:condition,
            meetplace:meetplace,
            postTime:date,
            userEmail:email,
            sellerName:sellerName,
            orginalPrice:orginalPrice
        }
        
        fetch("http://localhost:5000/addproduct",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Categorys)
        }).then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("your Product add succesfully")
            }
        })
    }
    return (
        <div>
            <h4>add your product</h4>
            <form onSubmit={handleSubmit(addProduct)} className="flex flex-col ">
            <label className="label">
                    <span className="label-text text-lg capitalize">add product name</span>
                </label>
                <input className="input input-bordered w-full" type="text" {...register("name")} />
            <label className="label">
                    <span className="label-text text-lg capitalize">add product price</span>
                </label>
                <input className="input input-bordered w-full" type="text" {...register("price")} />
            <label className="label">
                    <span className="label-text text-lg capitalize">add contract number</span>
                </label>
                <input className="input input-bordered w-full" type="text" {...register("number")} />
            <label className="label">
                    <span className="label-text text-lg capitalize">add OrginalPrice</span>
                </label>
                <input className="input input-bordered w-full" type="text" {...register("orginalPrice")} />
            <label className="label">
                    <span className="label-text text-lg capitalize">Year of purchase</span>
                </label>
                <input className="input input-bordered w-full" type="text" {...register("buyyear")} />
                <label className="label">
                    <span className="label-text text-lg capitalize">add product Photo</span>
                </label>
                <input className="bg-slate-600 py-2 px-1 rounded border-2 border-orange-400" type="file" {...register("img")} />
                <label className="label">
                    <span className="label-text text-lg capitalize">add category</span>
                </label>
                <select className="input input-bordered w-full" required {...register("category")}>
                    <option value="cafe racer">Cafe Racer</option>
                    <option value="naked bikes">Naked Sports Bike</option>
                    <option value="sport bikes">Sport Bikes</option>
                </select>
                <label className="label">
                    <span className="label-text text-lg capitalize">add condition</span>
                </label>
                <select className="input input-bordered w-full" required {...register("condition")}>
                    <option value="excellent">excellent</option>
                    <option value="good">good</option>
                    <option value="fair">fair</option>
                </select>
                <label className="label">
                    <span className="label-text text-lg capitalize">add meet place</span>
                </label>
                <select className="input input-bordered w-full" required {...register("meetplace")}>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Khulna"> Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Barisal">Barisal</option>
                </select>
                <label className="label">
                    <span className="label-text text-lg capitalize">add some details</span>
                </label>
                <textarea className='border-2 pl-1' rows="4" cols="50"{...register("details")} ></textarea>
                {/* {error && <p className='my-3 text-red-600'>{error}</p> } */}
                <input className="btn btn-outline my-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;