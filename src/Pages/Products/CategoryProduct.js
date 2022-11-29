import React from "react";

const CategoryProduct = ({ product }) => {
  console.log(product)
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
  } = product;

  console.log(product);
  return (
    <div>
      
      <div className="shadow-2xl p-5">
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
            <p className="font-bold text-xl"> Purchase of year</p>
            <p className="text-xl text-sky-500 font-bold">{yearOfPurchase }</p>
          </div>
          <div>
            <p className="font-bold text-xl">Post time</p>
            <p className="text-xl text-sky-500 font-bold">{}</p>
          </div>
          
        </div>
        <hr className="my-2" />
        <div className="flex  justify-between py-1">
          <div className="flex items-center">
              <img src="" alt="" />
              <div>
                <p>name</p>
                <p>{user_email}</p>
              </div>
          </div>
          <div>
            <p className="font-bold text-xl">Post time</p>
            <p className="text-xl text-sky-500 font-bold">{}</p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default CategoryProduct;
