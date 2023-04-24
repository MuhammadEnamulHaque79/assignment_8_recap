import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const PostCard = () => {
    return (
        <div className='border-2 border-rose-500 mb-5 rounded'>
            <div className="card w-100 bg-base-100 shadow-xl">
                <figure><img className='border-2 border-blue-500 mb-5 rounded' src="https://i.ibb.co/vsqYTgq/james-harrison-vp-Oe-Xr5wm-R4-unsplash.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex items-center gap-5 justify-between'>

                        <div className='flex items-center justify-between gap-3'>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img className='rounded-full' src="https://i.ibb.co/KGDg0GF/7474-n.png" />
                                </div>
                            </div>
                            <div>
                                <h5 className='text-2xl'>Mr.E-haque</h5>
                                <p>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between gap-3'>
                            10 min read <span><FaBookmark/></span>
                        </div>
                    </div>

                    <h2 className="card-title">How to get your first job as a self-taught programmer</h2>
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
