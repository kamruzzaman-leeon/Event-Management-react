import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loggedIn,setLoggedIn] = useState(false)

    const createUser = (email, password) =>{
        setLoggedIn(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoggedIn(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }
   
    const logOut = () =>{
        setLoggedIn(false)
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
        loggedIn,
        createUser,
        signIn,
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