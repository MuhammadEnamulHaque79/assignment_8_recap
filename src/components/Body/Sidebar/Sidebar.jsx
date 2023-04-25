import React from 'react';

const Sidebar = ({timeCount,titleData}) => {

    return (
        <div className='container border-2 border-amber-400'>
            
            <div className='text-center text-2xl border border-neutral-500 m-5 p-5 rounded bg-gray-100'>
                <p>Spent time on read : {timeCount} <span> min</span></p>
            </div>

            <div className='p-5 m-5 border rounded border-neutral-900'>
                <h2 className='text-2xl text-semibold text-center rounded p-5 m-5 bg-gray-200 border border-neutral-900'>Bookmarked Blogs : {titleData.length} </h2>
            </div>
        </div>
    );
};

export default Sidebar;