import React from 'react';
import { toast } from 'react-toastify';
import UseAuth from '../../../Shared/UseAuth/UseAuth';

const BookNow = ({ bookingProduct,setBookingProduct }) => {
    const {user}=UseAuth()
    const { name,price,img } = bookingProduct
    const addProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const price = event.target.price.value
        const email = event.target.email.value
        const userName = event.target.userName.value
        const userNumber = event.target.userNumber.value
        const booking = {
            name,
            price,
            email,
            userName,
            userNumber,
            img
        }
        fetch("http://localhost:5000/order",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        }).then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("your Order add succesfully")
            }
        })
        // http://localhost:5000/order
        setBookingProduct(null)
    }
    return (
        <div>
            <input type="checkbox" id="bookin-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookin-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={addProduct}>
                        <input type="text" name='name' disabled value={name} className="input input-bordered my-1 w-full" />
                        <input type="text" name='price' disabled value={price} className="input input-bordered my-1 w-full" />
                        <input type="text" name='email' disabled value={user.email} className="input my-1 input-bordered w-full" />
                        <input type="text" name='userName' disabled value={user.displayName} className="input my-1 input-bordered w-full" />
                        <input type="text" required name='userNumber' placeholder='enter your number' className="input input-bordered w-full" />
                        <input htmlFor="bookin-modal" type="submit" className="input input-bordered cursor-pointer w-full my-2" value="Booking" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;