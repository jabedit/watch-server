import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const CategoryProduct = ({ product , setProduct }) => {
 
  const {user} = useContext(AuthContext)
  const {
    _id,
    description,
    condition,
    orginal_price,
    product_price,
    promotion_product,
    user_email,
    yearOfPurchase,
    product_name,
    product_img,
    product_added_time
  } = product;


  return (
    <div>
      
      <div className="shadow-2xl p-5 rounded-md">
        <div>
          <img className="w-50 h-50 rounded-md" src={product_img} alt="" />
        </div>
        <h2 className="text-xl font-bold py-1">{product_name.length > 50 ? product_name.slice(0, 50) +"..." : product_name}</h2>
        <hr className="my-2" />
        <div className="flex  justify-between py-1">
          <div>
            <p className="font-bold text-xl">Orginal price</p>
            <p className="text-xl text-sky-500 font-bold">{orginal_price  }k</p>
          </div>
          <div>
            <p className="font-bold text-xl">Sell price</p>
            <p className="text-xl text-sky-500 font-bold">{product_price}k</p>
          </div>
          
        </div>
        <div className="flex justify-between py-1">
            <p className="text-lg">Condition : <span className="text-sky-500">{condition}</span></p>
            <p className="text-lg">Locaton : <span className="text-sky-500">{product.location}</span></p>
        </div>
        <hr className="my-2" />
        <div className="flex  justify-between py-1">
          <div>
            <p className="text-xl font-semibold"> Purchase of year</p>
            <p className="text-xl text-sky-500 ">{yearOfPurchase }</p>
          </div>
          <div>
            <p className=" text-xl font-semibold">Post time</p>
            <p className="text-xl text-sky-500 ">{product_added_time}</p>
          </div>
          
        </div>
        <hr className="my-2" />
        <div className="flex  justify-between items-center py-1">
          <p className="font-bold">User info : </p>
          <div className="flex items-center">
              <img src="" alt="" />
              <div>
                <p>{product.displayName}</p>
                <p>{user_email}</p>
              </div>
          </div>
          <div>
            
           <button className={ product.user_verify ?` bg-green-400 p-1 text-white rounded-full text-xs`: `bg-orange-600 rounded-full p-1 text-white text-xs`}>{product.user_verify ? `verify`: `no varify`}</button>
          </div>
          
        </div>
        <hr className="my-2" />
        <div className=" flex justify-end">
          <label onClick={()=>setProduct(product)} htmlFor="my-modal-3" className=" bg-sky-600 py-2 px-3 rounded-lg  text-white font-bold">book Now</label>
        </div>
        
      </div>
    </div>
  );
};

export default CategoryProduct;
