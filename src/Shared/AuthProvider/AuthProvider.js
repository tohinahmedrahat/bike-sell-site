import React, { createContext } from 'react';
import FirebaseApp from '../../Firebase/FirebaseApp/FirebaseApp';

export const authContext = createContext()
const AuthProvider = ({children}) => {
    const firebase = FirebaseApp()
    return (
        <authContext.Provider value={firebase}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;