import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Shared/UseAuth/UseAuth';
import img from '../../img/regeter.webp'
import { useNavigate } from 'react-router-dom';

const Regester = () => {
    const { loginWithGoogle, setUser, setError, error,regesterWithEmail,updateUser,setLoading } = UseAuth()
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const imgHostKey = process.env.REACT_APP_imgbb_key
    
    // create user with email and password function 
    const onSubmit = data => {
        setLoading(true)
        setError("")
        const file = data.img[0]
        const email = data.email
        const password = data.password
        const name = data.name;
        const role = data.role;
        // host img to imgbb
        const formData = new FormData();
        formData.append("image", file)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        
        // add account firebase
        regesterWithEmail(email,password)
        .then(userCredential => {
            const user = userCredential.user;
            setUser(user)
            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        const img = imgData.data.url
                        updateUserProfile(name,img,role,email)
                    }
                })
            
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
        
        reset()

    };
    // update user information on firebase function 
    const updateUserProfile = (name,img,role,email) => {
        const profile = {
            displayName:name,
            photoURL:img
        }
        updateUser(profile)
        .then(() => {
            saveUser(name,email,img,role)
            setLoading(false)
            navigate("/")
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    // login function on google
    const loginGoogle = () => {
        setError("")
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user)
                 saveUser(user.displayName,user.email,user.photoURL,"buyer")
                navigate("/")
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    // save user to database
    const saveUser = (name,email,img,role) =>{
        const user = {
            name:name,
            emali:email,
            img:img,
            role:role,
            verify:false
        }
        fetch("https://service-server-tohinahmedrahat.vercel.app/user",{
            method:"put",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                navigate("/")
            }
        })
    }
   
    return (
        <div className='md:flex justify-center items-center gap-4'>
            <div className='md:w-2/4 w-3/4 mx-auto'>
                <h6 className='text-2xl text-center font-semibold capitalize'>Please Rgester your account</h6>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <label className="label">
                        <span className="label-text">Type Your Name</span>
                    </label>
                    <input required placeholder='type your email' type="text" className="input input-bordered w-full" {...register("name")} />
                    <label className="label">
                        <span className="label-text">Upload Your Photo</span>
                    </label>
                    <input className="bg-slate-600 py-2 px-1 rounded border-2 border-orange-400" type="file" {...register("img")} />
                    <select className="input input-bordered w-full my-3" required {...register("role")}>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                    </select>
                    <label className="label">
                        <span className="label-text">Type Your Email?</span>
                    </label>
                    <input required placeholder='type your email' className="input input-bordered w-full" {...register("email")} />
                    <label className="label mt-3">
                        <span className="label-text">Type Your Password?</span>
                    </label>
                    <input required placeholder='type your password' className="input input-bordered w-full" type="password" {...register("password")} />
                    {error && <p className='my-3 text-red-600'>{error}</p>}
                    <input className="btn btn-outline my-3" type="submit" />
                </form>
                <button className="btn btn-outline my-3 w-full" onClick={loginGoogle}>Google</button>
            </div>
            <div className='md:w-2/4'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Regester;