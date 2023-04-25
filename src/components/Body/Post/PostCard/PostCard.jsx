import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const PostCard = ({postData}) => {
    const {name,date,blogTitle,watchTime,avatar} = postData;

    return (
        <div className='border-2 border-rose-500 mb-5 rounded'>
            <div className="card w-100 bg-base-100 shadow-xl">
                <figure><img className='border-2 border-blue-500 mb-5 rounded' src="https://i.ibb.co/vsqYTgq/james-harrison-vp-Oe-Xr5wm-R4-unsplash.jpg" alt="Career Cafe" /></figure>
                <div className="card-body">
                    <div className='flex items-center gap-5 justify-between'>

                        <div className='flex items-center justify-between gap-3'>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img className='rounded-full' src={avatar} />
                                </div>
                            </div>
                            <div>
                                <h5 className='text-2xl'>{name}</h5>
                                <p>{date}</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between gap-3'>
                            {watchTime} <span><FaBookmark/></span>
                        </div>
                    </div>

                    <h2 className="card-title">{blogTitle}</h2>
                    <p>#programming #beginner</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Mark as read</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
