import {  createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
}

// authProvider
export const AuthProvide = ({children})=> {

    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true); 

    
    // Register a User
    const registerUser = async(email,password) => {
         return await createUserWithEmailAndPassword(auth, email, password);
    }


    //login the user

    
    const value = {
         currentUser,
         registerUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}