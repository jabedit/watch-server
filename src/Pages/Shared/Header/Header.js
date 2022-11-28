import React, { useContext } from "react";
import {Link,  NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import logo from '../../../assets/logo.png'

const Header = () => {
  const {user, logOut}  = useContext(AuthContext)
  const signOut =()=>{
    logOut();
  }
  let activeClassName = "underline";
    const menuItems = (
        <React.Fragment>
          <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Blog
          </NavLink>
          </li>

          <li>
            <NavLink to="/admindashbaord"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } >Admin Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/sellerdashbaord/" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } >Seller Dashboard</NavLink>
          </li>
          <li>
            {
              user? 
              <>
              <NavLink onClick={signOut}>Logout</NavLink>
              </>:
               <NavLink to="/login" className={({ isActive }) =>
               isActive ? activeClassName : undefined
             } >Login</NavLink>
            }
           
            
          </li>
         
        </React.Fragment>
      );
    
        
  return (
    <div>
      <div className="navbar px-3 md:px-20 bg-sky-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-2xl font-bold">
            <img className="w-10 h2-10" src={logo} alt="" />
            WatchPro</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold text-xl p-0">
           {menuItems}
          </ul>
          
        </div>
       <div className="">
       <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
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
       </div>
      </div>
    </div>
  );
};

export default Header;
