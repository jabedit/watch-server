import React from "react";

const BookingModal = ({ product }) => {
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
    product_added_time,
    displayName
  } = product;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <div>
              <img className="w-full" src={product_img} alt="" />
              <h2 className="text-xl font-semibold py-5">{product_name}</h2>
            </div>
            <form action="">
                
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Product Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={product_name}
                    readOnly
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Price </span>
                  </label>
                  <input
                    name="email"
                    type="eamil"
                    defaultValue={product_price}
                    readOnly
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> User Email</span>
                  </label>
                  <input
                    name="userEmail"
                    defaultValue={user_email}
                    readOnly
                    type="text"
                 
                    placeholder="Your Location"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name </span>
                  </label>
                  <input
                    name="userName"
                    type="text"
                    defaultValue={displayName}
                    readOnly
                    defaultChecked
                    placeholder="user Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> User Phone Number</span>
                  </label>
                  <input
                    type="text"
                   
                    placeholder="Your Location"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Location </span>
                  </label>
                  <input
                    name="userPhone"
                    type="text"
                  
                    placeholder="User Location"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <input className="py-2 px-5 rounded-lg bg-sky-500 text-white font-semibold  text-xl" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
