import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
        user,
        createUser,
        
    }

    useEffect(()=>{
        onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
    },[])

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