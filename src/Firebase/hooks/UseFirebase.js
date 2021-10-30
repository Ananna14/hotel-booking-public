import React, { useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase.init'


initializeAuthentication()
const useFirebase=()=>{
    const [user, setUser]= useState({})
    // const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle=()=>{
    // return signInWithPopup(auth, googleProvider);
    signInWithPopup(auth, googleProvider)
    .then(result => {
        console.log(result.user)
    })
}
const logOut=()=>{
    signOut(auth)
    .then(()=>{
        setUser({})
    })
}

useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
        }
    });
},[])


    return{
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;