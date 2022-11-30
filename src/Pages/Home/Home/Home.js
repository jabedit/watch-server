import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FreeShipping from '../FreeShiping/FreeShipping';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category />
            <FreeShipping />

        </div>
    );
};

export default Home;