import React, { createContext } from 'react';
import { app } from './../__steps';

import {getAuth, signInWithPopup}  from  'firebase/auth';


export const AuthContext = createContext();

const auth = getAuth(app)



const AuthProvider = ({children}) => {


    const providerLogin = (provider) => {

        return signInWithPopup(auth, provider)
    }

    const authInfo ={}
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;