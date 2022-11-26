import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imgUrl,setImgUrl] = useState("")
    const imgHostKey = process.env.REACT_APP_imgbb_key
    const addProduct = (data) => {
        const file = data.img[0]
        const name = data.name;
        const details = data.details;
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
                    setImgUrl(imgData.data.url)
                }
            })
            const Category = {
                name:name,
                details:details,
                img:imgUrl
            }
            fetch("http://localhost:5000/addCategory",{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(Category)
            }).then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success("your Product add succesfully")
                }
            })
            reset()
    }
    return (
        <div>
            <h4>add your product</h4>
            <form onSubmit={handleSubmit(addProduct)} className="flex flex-col">
                <label className="label">
                    <span className="label-text text-lg capitalize">Upload Your Photo</span>
                </label>
                <input className="bg-slate-600 py-2 px-1 rounded border-2 border-orange-400" type="file" {...register("img")} />
                <select className="input input-bordered w-full my-3" required {...register("name")}>
                    <option value="cafe racer">Cafe Racer</option>
                    <option value="naked bikes">Naked Sports Bike</option>
                    <option value="sport bikes">Sport Bikes</option>
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