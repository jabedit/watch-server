import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import CategoryProduct from './CategoryProduct';

const Products = () => {
    const products = useLoaderData()
    const [product,  setProduct] = useState({})

    return (
        <div className='px-3 md:px-20 py-20 bg-sky-50'>
            <h2 className='text-2xl font-semibold'>Category Products</h2>
              <div className=" grid md:grid-cols-3 gap-7">
                    {
                        products?.map(product => <CategoryProduct product={product} key={product._id} setProduct={setProduct}/>)
                    }

              </div>  
              <div>
                <BookingModal product={product} setProduct={setProduct} ></BookingModal>
              </div>
        </div>
    );
};

export default Products;