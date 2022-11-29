import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddProduct = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  // const imagesHostKey = process.env.REACT_APP_imgbb_key;
  const { data: categores, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category");
      const data = await res.json();
      return data;
    },
  });
  
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  const handleProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.productName.value;
    const product_img = form.productImg.value;
    const category_id = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const orginal_price = form.orginal_price.value;
    const condition = form.condition.value;
    const yearOfPurchase = form.yearOfPurchase.value;
    const location = form.location.value
    
    const date = new Date().toLocaleString();
  
    const product = {
        product_name: product_name,
        product_img : product_img,
        category_id: category_id,
        description: description,
        product_price: price,
        orginal_price: orginal_price,
        yearOfPurchase: yearOfPurchase,
        product_added_time: date,
        condition: condition,
        user_email: user?.email,
        user_name : user?.name,
        user_uid : user?.uid,
        promotion_product : false,
        location: location ,
        user_verify : user?.varify
    }
    
    if(!product){
      toast.error("Please Fill up this field ! ");
    }

    fetch(`http://localhost:5000/products`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
    })
    .then(res => res.json())
    .then((data) => {
        if (data.acknowledged > 0) {

          toast.success("Category is successfully added ! ");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Add Your Products</h2>
      <div className=" bg-sky-100 p-5 rounded-lg">
        <form onSubmit={handleProduct} action="">
          <div className="form-control w-full max-w-xs">
            <label htmlFor="">Product Name</label>
            <input
              name="productName"
              type="text"
              placeholder="Type Product Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs py-2">
            <label>Product img URL</label>
            <input
              name="productImg"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs py-2">
          <label htmlFor="">Select Your Product Category</label>
            <select name="category" className="select input-bordered w-full max-w-xs" required>
            
                {
                    categores.map(category => <option
                        key={category._id}
                        value={category._id}
                    >{category.category_name}</option>)
                }
                
                
            </select>
          </div>
          <div className="form-control w-full max-w-xs py-2">
            
            <label htmlFor="">Select Your Product Conditon</label>
            <select name="condition" className="select input-bordered w-full max-w-xs">
           
            <option>Excelent</option>
            <option>Good </option>
            <option>Fire</option>
                
            </select>
          </div>
          <div className="form-control w-full max-w-xs py-2">
            <label htmlFor="">Your Location </label>
            <input
              required
              name="location"
              type="text"
              placeholder="Type Your Location"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs py-2">
            <label htmlFor="">Orginal Price </label>
            <input
              required
              name="orginal_price"
              type="text"
              placeholder="Type product orginal price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs py-2">
            <label htmlFor="">Seller Price </label>
            <input
              required
              name="price"
              type="text"
              placeholder="Product Seller Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs py-2">
            <label htmlFor="">Your Phone Number </label>
            <input
              required
              name="number"
              type="text"
              placeholder="Type Your Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
         
          
          
          <div className="form-control w-full max-w-xs py-2">
            <label htmlFor="">Purchase year </label>
            <input
              required
              name="yearOfPurchase"
              type="date"
              placeholder="select purchase year"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs py-2">
            <label htmlFor="">Product description </label>
            <textarea name="description" className="textarea textarea-bordered" placeholder="Type Product description"></textarea>
          </div>
          <input
            type="Submit"
            value="Submit"
            className="input input-bordered bg-sky-600 text-white font-bold text-lg w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
