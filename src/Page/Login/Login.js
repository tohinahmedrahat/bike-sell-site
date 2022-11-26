import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import img from '../../img/regeter.webp'
import UseAuth from '../../Shared/UseAuth/UseAuth';

const Login = () => {
    const {loginWithGoogle,setUser,setError,error,setLoading,loginWithEmail}= UseAuth()
    const { register, handleSubmit,reset } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const onSubmit = data => {
        const email = data.email;
        const password = data.password
        console.log(email,password)
        setError("")
        loginWithEmail(email,password)
        .then(userCredential =>{
            const user = userCredential.user;
            setUser(user)
            navigate(from,{replace:true})
            setLoading(false)
            
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
        reset()
    };
    const loginGoogle=() => {
        setError("")
        loginWithGoogle()
        .then(result=>{
            const user = result.user;
            setUser(user)
            navigate(from,{replace:true})
            setLoading(false)
            
        })
        .catch(error =>{
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }
    return (
        <div className='md:flex justify-center items-center gap-4'>
            <div className='md:w-2/4 w-3/4 mx-auto'>
                <h6 className='text-2xl text-center font-semibold capitalize'>Please login your account</h6>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <label className="label">
                        <span className="label-text">Type Your Email?</span>
                    </label>
                    <input placeholder='type your email' className="input input-bordered w-full" {...register("email")} />
                    <label className="label mt-3">
                        <span className="label-text">Type Your Password?</span>
                    </label>
                    <input placeholder='type your password' className="input input-bordered w-full" type="password" {...register("password")} />
                    {error && <p className='my-3 text-red-600'>{error}</p> }
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

export default Login;