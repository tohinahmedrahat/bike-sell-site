import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const UseAuth = () => {
    return useContext(authContext)
};

export default UseAuth;