import React from "react";
import watch from  '../../../assets/watch.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div id="#banner" className="bg-sky-50 px-20">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
          className=" w-1/2 h-85 rounded-2xl"
            src={watch}
            alt=''
          />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold ">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
