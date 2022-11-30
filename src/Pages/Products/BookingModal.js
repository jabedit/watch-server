import React from "react";
import toast from "react-hot-toast";

const BookingModal = ({ product }) => {
  const {
    product_price,
    user_email,
    product_name,
    product_img,
    displayName
  } = product;

  const handleBooking =(e) =>{
    e.preventDefault()
    const form = e.target
    const  productName = form.productName.value 
    const  price = form.price.value 
    const  userEmail = form.userEmail.value 
    const  userName = form.userName.value 
    const  userLocaton = form.userLocaton.value 
    const  userPhone = form.userPhone.value 
   
    const booking = {
        productName: productName,
        productPrice : price,
        userEmail: userEmail,
        userName:userName, 
        userLocaton:userLocaton,
        userPhone:userPhone
    }
console.log(booking)
    fetch(`http://localhost:5000/booking`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(booking),
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
            <form onSubmit={handleBooking} action="">
                
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
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
                    name="price"
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
                    <span className="label-text"> User Location</span>
                  </label>
                  <input
                    type="text"
                    name="userLocaton"
                    placeholder="Your Location"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Phone Number </span>
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
