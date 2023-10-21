import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
  const {signIn} =useContext(AuthContext)
  const location =useLocation()
  // console.log(location)
  const navigate = useNavigate()
    const handleLogin= e=>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email =form.get('email')
        const password = form.get('password')
        signIn(email,password)
        
        .then(result=>{
                navigate(location?.state ? location.state : "/")
          // console.log(result.user)
          toast.success('successfully user logged In!')    
          
        })
        .catch(error=>{
         
          // console.error(error)
          toast.error('Something wrong here!')
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome to EventMaster!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name= "password" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="label mx-auto mb-2">
          <p className="label-text-alt"> New Here?</p>
          <Link to='/register' className="label-text-alt link link-hover text-blue-500 font-bold">Register</Link>
          </div>
    </div>
  </div>
</div>
    );
};

export default Login;