import { initializeApp } from "firebase/app";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeApp(firebaseConfig)
const FirebaseApp = () => {
  const [user,setUser] = useState({})
  const [error,setError] = useState("")
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const regesterWithEmail = (email,password) =>{
     return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmail = (email,password) =>{
     return signInWithEmailAndPassword(email,password)
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
            } else {
             setUser({})
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
        error
    }
};

export default FirebaseApp;