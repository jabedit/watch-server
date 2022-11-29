import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const Products = () => {
    const products = useLoaderData()

    return (
        <div>
            
              <div className=" grid md:grid-cols-3 gap-5">
                    {
                        products.map(product => <CategoryProduct product={product} key={product._id} />)
                    }

              </div>  
        </div>
    );
};

export default Products;