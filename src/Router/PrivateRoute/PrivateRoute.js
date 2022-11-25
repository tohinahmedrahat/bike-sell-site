import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Shared/UseAuth/UseAuth';

const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const location = useLocation()
    if(loading){
        return <h1>loading......</h1>
    }
    if(!user.uid){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;