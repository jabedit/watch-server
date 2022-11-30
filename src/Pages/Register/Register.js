import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {



  const [error, setError] = useState("");

  const { createUser, updateUserProfile, googleLogin , user} =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const userType = form.userType.value;
    saveUser(userType)

    createUser(email, password,)
      .then((result) => {
        const user = result.user;
        if(user){
          toast.success('User SignUp Successfully')
          saveUser(user , userType, password, photoURL, name)
        }
        setError("");
        form.reset();
        handleUserPhotoURLAndName(name, photoURL);
        
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        
      })
      .then((error) => console.error(error));
  };
  const handleUserPhotoURLAndName = (name, photoURL ) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
     
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };


  const saveUser = (userInfo, userType, password,  photoURL, name) =>{
      const user = {
         name: name,
         email: userInfo.email,
         password: password,
         userRole : userType,
         user_img : photoURL,
         user_verify : userInfo.emailVerified
      }
    
    fetch('http://localhost:5000/users', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
 
    })
}
  return (
    <div>
      <div className=" ">
        <div className=" ">
          <div className=" shadow-xl bg-base-100  md:w-4/12 mx-auto mt-7 login-card">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">FullName</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Full Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Type Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    name="photoURL"
                    type="text"
                    placeholder="Enter PhotoURL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control pt-4">
                  <select name="userType" className="select w-full">
                    
                    <option disabled selected>
                      Please select your user type
                    </option>
                    <option>Buyer</option>
                    <option>Seller</option>

                  </select>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-indigo-500 border-0">
                    Register
                  </button>
                </div>
                <label className="label">
                  <p>
                    {" "}
                    You already have an account?
                    <Link className="underline text-blue-500" to="/login">
                      {" "}
                      Please Login{" "}
                    </Link>
                  </p>
                </label>
                <p className="text-orange-600"> {error}</p>
              </form>
              <div className="flex ">
                <button
                  onClick={handleGoogle}
                  className="text-2xl btn bg-indigo-500 w-full border-0 "
                >
                  Google Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
