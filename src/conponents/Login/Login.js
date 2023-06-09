import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UseContext";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess(false);
        form.reset();
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold my-6">Please Login!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input-filed"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input-filed"
                  required
                />
              </div>

              <h1 className="text-center my-3">
                New to this site ?
                <Link
                  style={{ color: "green", marginLeft: "10px" }}
                  to="/register"
                >
                  Please Register
                </Link>
              </h1>
              <p
                style={{ color: "red" }}
                className="successAndError text-center "
              >
                {error}
              </p>

              {success && (
                <p
                  style={{ color: "green" }}
                  className="successAndError text-center"
                >
                  User Login Successfully
                </p>
              )}

              <div className="form-control mt-6">
                <button className="register-btn">Login</button>
              </div>
            </form>

            <button onClick={handleGoogleLogin} className="googleBtn ">
              <p className="ml-5">SignIn With Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
