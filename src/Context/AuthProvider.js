import React, { createContext, useEffect, useState } from 'react';
import { app } from './../__steps';

import {getAuth, onAuthStateChanged, sendEmailVerification, signInWithPopup, updateProfile}  from  'firebase/auth';


export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    
const {user ,setUser} =useState(null)

    const providerLogin = (provider) => {

        return signInWithPopup(auth, provider)
    }



    useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)


        } )

        return () => {

            unsubscribe();
            
        };

    }, [])


     const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser,profile);


     }

     const verifyEmail = () => {

        return sendEmailVerification(auth.currentUser)
     }


    const authInfo ={providerLogin, updateUserProfile, verifyEmail}
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;