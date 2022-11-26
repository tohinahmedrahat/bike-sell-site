import { initializeApp } from "firebase/app";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeApp(firebaseConfig)
const FirebaseApp = () => {
  const [user,setUser] = useState({})
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const regesterWithEmail = (email,password) =>{
     return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser = profile =>{
      return updateProfile(auth.currentUser,profile)
    }
    const loginWithEmail = (email,password) =>{
     return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () =>{
      signOut(auth)
      .then(()=>{
        setUser({})
      })
      .catch((error)=>{
        setError(error)
      })
    }
    useEffect(()=>{
        const currentUser = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setLoading(false)
            } else {
             setUser({})
             setLoading(false)
            }
          });
          return () => currentUser;
    },[auth])
    return{
        loginWithGoogle,
        regesterWithEmail,
        loginWithEmail,
        user,
        setUser,
        setError,
        error,
        logout,
        loading,
        setLoading,
        updateUser
    }
};

export default FirebaseApp;