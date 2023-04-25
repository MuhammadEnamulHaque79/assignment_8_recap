import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import Sidebar from './Sidebar/Sidebar';


const Body = () => {
    const[data,setData] = useState([]);

    useEffect(()=>{
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    },[]);

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-5'>
                <Post 
                data={data}
                ></Post>
                
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Body;