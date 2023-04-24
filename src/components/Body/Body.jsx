import React from 'react';
import Post from './Post/Post';
import Sidebar from './Sidebar/Sidebar';


const Body = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-5'>
                <Post></Post>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Body;