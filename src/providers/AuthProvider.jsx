import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

   
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        logOut,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.object,
}

export default AuthProvider;