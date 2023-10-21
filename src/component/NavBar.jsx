import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const navlinks = (
    <>
        <li className="md:mx-5"><CustomNavLink to="/">Home</CustomNavLink></li>
        <li className="md:mx-5"><CustomNavLink to="/About-us">About Us</CustomNavLink></li>
        <li className="md:mx-5"><CustomNavLink to="/career">Career</CustomNavLink></li>
        <li className="md:mx-5"><CustomNavLink to="/event-management-course">Event Management Course</CustomNavLink></li>
        
    </>
);

const NavBar = () => {
    const{user, logOut} =useContext(AuthContext);

    // console.log(user)
    const handleLogout =() =>{
         logOut()
         .then(()=>{
             
            toast.success('successfully user logged out!')   
         })
         .catch(error=>{
            // console.error(error)
            toast.error('Something wrong here!')
          })
  
    }


    
    
       

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">EventMaster</Link>
            </div>

            <div className="flex-none">

                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navlinks}
                </ul>

                {
                 user?.email ? 
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt={user?.displayName} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                        <li className="p-2">{user.displayName}</li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                        
                    </ul>
                </div> 
                :
                <ul className="menu menu-horizontal">
                     <li className="md:mx-5"><CustomNavLink to="/login">Login</CustomNavLink></li>    
                </ul>
                         
            
               
            }

               

                

            </div>
        </div>
    );
};

export default NavBar;