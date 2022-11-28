import AdminLayout from "../../Layout/AdminLayout";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from '../../Pages/Register/Register'
import Blog from '../../Pages/Blog/Blog'

import PageNotFound from "../../Pages/not-found/PageNotFound";

import SellerLayout from "../../Layout/SellerLayout";
import AddProduct from "../../Pages/SellerDashBoard/AddProducts/AddProduct";
import AddCategory from "../../Pages/SellerDashBoard/AddCategory/AddCategory";
import Products from "../../Pages/Products/Products";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/products",
        element: <Products />
      },
      //admin nested route
      {
        path: "/admindashbaord",
        element: <AdminLayout />,
        children: [
          
        ],
      },
      //seller nested route
      
      {
        path: "/sellerdashbaord",
        element: <SellerLayout />,
        children: [
          {
            path: "/sellerdashbaord",
            element: <AddProduct />
           
          },
          {
            path: "/sellerdashbaord/addcategory",
            element: <AddCategory />
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
