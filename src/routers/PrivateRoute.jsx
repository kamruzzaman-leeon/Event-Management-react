import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user,loading,loggedIn } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location)
    if(loading)
    {
        return (
            <div className='flex justify-center items-center'>
                 <span className="loading loading-bars loading-lg"></span>
        </div>
        )
    }

    if(user && loggedIn){
          return children;
        }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes={
    children:PropTypes.object
}
export default PrivateRoute;