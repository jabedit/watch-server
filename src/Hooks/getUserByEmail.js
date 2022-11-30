import { useQuery } from '@tanstack/react-query';
import React from 'react';

const getUserByEmail = () => {
    const getFecth =()=>{
        fetch(`http://localhost:5000/users/getUserByEmail?email=forhad@gmail.com`)
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data}=useQuery(['getUserByEmail'], getFecth)
    
    return data
};

export default getUserByEmail;