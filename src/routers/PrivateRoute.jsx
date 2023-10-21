import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    const { user,loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location)
    if(loading)
    {
        return <div className='flex justify-center items-center'>
                 <span className="loading loading-bars loading-lg"></span>
                </div>
    }

    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
        }
        else{
            return children;
        }
    
};

PrivateRoute.propTypes={
    children:PropTypes.object
}
export default PrivateRoute;