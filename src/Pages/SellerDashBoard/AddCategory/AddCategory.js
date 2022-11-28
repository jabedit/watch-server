import React from "react";
import toast from "react-hot-toast";

const AddCategory = () => {
    const handleCategories =(e) =>{
        e.preventDefault()
        const form = e.target;
        const categoryName = form.categoryName.value;
        const categoryPhoto = form.categoryPhoto.value;

        const category = {
            categoryName : categoryName,
            categoryImg: categoryPhoto
        }
        if(!category){
          toast.error("Please Fill up this field ! ");
        }
        console.log(category)
        fetch(`http://localhost:5000/category`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(category),
        })
        .then(res => res.json())
        .then((data) => {
            if (data.acknowledged > 0) {
              
              toast.success("Category is successfully added ! ");
              form.reset();
            }
          })
          .catch((err) => console.error(err));

    }
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Add Your Category</h2>
      <div className=" bg-sky-200 p-5 rounded-lg">
        <form onSubmit={handleCategories} action="">
          <div className="form-control w-full max-w-xs">
            <input
            name='categoryName'
            required
              type="text"
              placeholder="Type Category Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs py-3">
            <input
             required
            name="categoryPhoto"
              type="text"
              placeholder="Category Photo URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          
          <input
              type="Submit"
              value='Submit'
              className="input input-bordered bg-sky-600 text-white font-bold text-lg w-full max-w-xs"
            />
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
