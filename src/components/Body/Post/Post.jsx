import React from 'react';
import PostCard from './PostCard/PostCard';

const Post = () => {
    return (
        <div className='container'>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
        </div>
    );
};

export default Post;