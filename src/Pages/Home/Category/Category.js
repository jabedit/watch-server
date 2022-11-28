import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categores, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
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

  return (
    <div className=" bg-sky-50 py-10">
      <h2> Popular Categories</h2>
      <div className="grid grid-cols-3 gap-10  w-8/12   mx-auto ">
        {categores.map((category) => (
          <div key={category._id}>
            <Link to={`products/${category._id}`}>
            <div className="p-5  rounded-lg flex  justify-center  items-center shadow-lg">
              <div>
                <img
                  className="w-20 h-20 rounded-2xl "
                  src={category.category_img}
                  alt=""
                />
              </div>
              <h3 className="pl-5 font-semibold  text-lg">{category.category_name}</h3>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
