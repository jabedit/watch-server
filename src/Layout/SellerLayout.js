import React from "react";
import { Link, Outlet } from "react-router-dom";

const SellerLayout = () => {
  return (
    <div>
      <div className="px-2 md:px-20 my-5">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  bg-sky-50 p-10">
            <Outlet />
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content bg-sky-100">
              <li className=" bg-sky-50 hover:bg-white rounded-md shadow-lg  font-serif font-bold mt-3 ">
                <Link to="/sellerdashbaord/">Add Product</Link>
              </li>
              <li className=" bg-sky-50 hover:bg-white rounded-md shadow-lg  font-serif font-bold mt-3 ">
                <Link to="/sellerdashbaord/addcategory">Add Category</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
