import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../context/UseContext";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    // console.log(name, email, password, confirmPassword);

    // password validation //
    if (password !== confirmPassword) {
      setError("Password Not Match");
      return;
    }

    if (password.length < 8) {
      setError("Please input at least 8 characters");
      return;
    }
    // create user with email and password //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess(true);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError("This Email already exist");
        setSuccess(false);
        form.reset();
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold my-6">Please Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input-filed"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="confirm password"
                  className="input-filed"
                />
              </div>

              <h1 className="text-center my-3">
                Already have an account?
                <Link style={{ color: "green" }} to="/login">
                  Please login
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
                  User Created Successfully
                </p>
              )}
              <div className="form-control mt-6">
                <button className="register-btn">Register</button>
              </div>
            </form>

            <button className="googleBtn ">
              <p className="ml-5">SignIn With Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
