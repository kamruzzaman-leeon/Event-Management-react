import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";




const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {createUser, handleUpdateProfile} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const photoURL = form.get('img-url')



    if (password.length < 6) {
      toast.error("Password should be at least 6 characters!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should contain at least one capital letter!");
      return;
    } else if (/^[a-zA-Z0-9]*$/.test(password)) {
      toast.error("Password should contain at least one special character!");
      return;
    } 


    createUser(email, password)
    .then(result => {
      handleUpdateProfile(name,photoURL)
      navigate(location?.state ? location.state : "/")
      // console.log(result.user)
      toast.success('successfully user Create it!')
      navigate('/login')
    })
    .catch(error => {

      // console.error(error)
      toast.error('Something wrong here!')
    })

  }

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Register now!</h1>
          <h3 className="text-3xl normal-case">Welcome to the Event Master Register Page!</h3>
          <p className="py-6">
            Our Event Master Register Page is your gateway to a world of seamless event planning and management. Whether you&apos;re an event organizer, planner, or someone looking to attend exciting events, we&apos;ve got you covered.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input type="text" placeholder="Image Url" name="img-url" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />


            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="label mx-auto mb-2">
            <p className="label-text-alt"> Already Have an Account?</p>
            <Link to='/login' className="label-text-alt link link-hover text-blue-500 font-bold">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;