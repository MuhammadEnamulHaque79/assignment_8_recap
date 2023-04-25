import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import Sidebar from './Sidebar/Sidebar';


const Body = () => {
    const[data,setData] = useState([]);
    const[timeCount,setTimeCount] = useState(0);
    const[titleData,setTitleData] = useState([]);

    useEffect(()=>{
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    },[]);

    //handle timeCount function;
    const handleTime =(watchTime)=>{
        const totalTime = timeCount + parseInt(watchTime);
        setTimeCount(totalTime);
    }

    //handle titleCount function;
    const handleTitle=(postData)=>{
        // console.log('Yes, I can',postData);
        const newPostData = [postData];
        const addPostData =[...titleData,...newPostData];
        setTitleData(addPostData);
    }

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-5'>
                <Post 
                handleTime={handleTime}
                handleTitle={handleTitle}
                data={data}
                ></Post>

                <Sidebar
                    timeCount={timeCount}
                    titleData={titleData}
                ></Sidebar>
            </div>
        </div>
    );
};

export default Body;