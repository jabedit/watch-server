import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='Blog-details-card text-black px-2 md:px-20' >
            <div className='my-7 p-3 shadow-md'>
                <h2  className='text-xl'>Difference between SQL and NoSQ</h2>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='my-7 p-3 shadow-md'>
            <h2 className='text-xl'>What is JWT, and how does it work?</h2>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed</p>
            </div>
            <div className='my-7 p-3 shadow-md'>
            <h2 className='text-xl'>What is the difference between javascript and NodeJS?</h2>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
            </div>
            <div className='my-7 p-3 shadow-md'>
            <h2 className='text-xl'>How does NodeJS handle multiple requests at the same time?</h2>
                <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
            </div>
        </div>
    );
};

export default Blog;