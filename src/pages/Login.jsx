

const Login = () => {
    return (
        <div className="container mx-auto card w-full md:w-2/5 p-5 bg-base-100 shadow-xl my-10">
          <h2 className="text-3xl text-center my-10">Please login</h2>
          <form className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6 w-full mx-auto">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

        </div>
    );
};

export default Login;