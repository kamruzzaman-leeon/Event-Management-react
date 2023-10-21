import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {

    const {user, googleSignIn} =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()



const handleGoogleLogin=()=>{
     googleSignIn()
     .then(result => {
        navigate(location?.state ? location.state : "/")
        // console.log(result.user)
        toast.success('successfully user logged In!')
        navigate('/')
      })
      .catch(error => {

        // console.error(error)
        toast.error('Something wrong here!')
      })
}

    return (
        <div className='p-5'>
            <div className='divider'>Continue with</div>
          <div className='text-center'>
          <button onClick={handleGoogleLogin} className='btn btn-primary btn-outline'>Google</button>
          </div>
            
        </div>
    );
};

export default SocialLogin;