import React from 'react';

import PostCard from './PostCard/PostCard';

const Post = ({data,handleTime,handleTitle}) => {
    return (
        <div className='container'>
            {
              data.map((postData)=><PostCard
              key={postData.id}
              postData={postData}
              handleTime={handleTime}
              handleTitle={handleTitle}
              ></PostCard>)  
            }
        </div>
    );
};

export default Post;