import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../component/SocialLogin";
import { Helmet } from "react-helmet";
// import SocialLogin from "../component/SocialLogin";


const Login = () => {
  const { user, signIn, googleProvider } = useContext(AuthContext);

  const location = useLocation();

  // console.log(location)
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    signIn(email, password)
      .then(result => {
        navigate(location?.state ? location.state : "/")
        // console.log(result.user)
        toast.success('successfully user logged In!')
        navigate('/')
      })
      .catch(error => {

        if (error.code === 'auth/wrong-password') {
          toast.error('Incorrect password. Please try again.');
        } else if (error.code === 'auth/user-not-found') {
          toast.error('No user with this email found. Please register or check your email.');
        } else {
          toast.error('An error occurred while trying to log in.');
        }
      })

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <h3 className="py-6 text-3xl">Welcome to EventMaster!</h3>
          <p className="py-6">

            Are you ready to unlock a world of seamless event planning and management? EventMaster is your gateway to a universe of exciting possibilities in the world of events. Whether you&apos;re an event organizer, a seasoned planner, or someone looking to attend thrilling events, we&apos;ve got you covered.
          </p>
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
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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
          <SocialLogin></SocialLogin>


        </div>
      </div>
    </div>
  );
};

export default Login;