import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const AdminLayout = () => {
  return (
    <div className="px-2 md:px-20 my-5 ">
   
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  bg-sky-50 p-10">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content bg-sky-100">
            <li className=" bg-sky-50 hover:bg-white rounded-md shadow-lg  font-serif font-bold mt-3 ">
              <Link to="/admindashbaord/allcategory">All Categories</Link>
            </li>
            <li className=" bg-sky-50 hover:bg-white rounded-md shadow-lg  font-serif font-bold mt-3 ">
              <Link to="/admindashbaord/allproducts">Add Products</Link>
            </li>
            <li className=" bg-sky-50 hover:bg-white rounded-md shadow-lg  font-serif font-bold mt-3 ">
              <Link to="/admindashbaord/allusers">All Users</Link>
            </li>
            <li className=" bg-sky-50 hover:bg-white rounded-md shadow-lg  font-serif font-bold mt-3 ">
              <Link to="/admindashbaord/allsellers">All Sellers</Link>
            </li>
            
             
          </ul>
        </div>
      </div>
    </div>


    
  );
};

export default AdminLayout;
