import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UseContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        console.log("User logOut Successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="navbar nav-parent-div">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg rounded-box w-52"
            >
              <li className="font-first">
                <Link to="/home">Home</Link>
              </li>
              <li className="font-first">
                <Link to="/about">About</Link>
              </li>
              <li className="font-first">
                <Link to="/service">Service</Link>
              </li>
              {/* <li>
                <Link to="/ourExprt">Our Exprt</Link>
              </li> */}

              {user?.uid ? (
                <li className="font-first">
                  <button onClick={handleLogOutUser} className="logOut-btn ">
                    LogOut
                  </button>
                </li>
              ) : (
                <>
                  {" "}
                  <li className="font-first">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="font-first">
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/home" className="btn btn-ghost normal-case text-xl">
            My Pettu
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font">
              <Link to="/home">Home</Link>
            </li>
            <li className="font">
              <Link to="/about">About</Link>
            </li>
            <li className="font">
              <Link to="/service">Service</Link>
            </li>

            {user?.uid ? (
              <li className="font">
                <button onClick={handleLogOutUser} className="logOut-btn ">
                  LogOut
                </button>
              </li>
            ) : (
              <>
                <li className="font">
                  <Link to="/login">Login</Link>
                </li>
                <li className="font">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
