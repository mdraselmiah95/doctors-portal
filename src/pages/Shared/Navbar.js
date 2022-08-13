import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              tabIndex="0"
              className="p-2 mt-3 text-base font-medium text-black shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          <Link to="/">
            <h3 className="font-bold normal-case btn btn-ghost lg:text-lg">
              Doctors Portal
            </h3>
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="p-0 text-base font-medium text-black menu menu-horizontal">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
