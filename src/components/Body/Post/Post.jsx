import React from 'react';
import PostCard from './PostCard/PostCard';

const Post = ({data}) => {
    return (
        <div className='container'>
            {
              data.map((postData)=><PostCard
              key={postData.id}
              postData={postData}
              ></PostCard>)  
            }
        </div>
    );
};

export default Post;