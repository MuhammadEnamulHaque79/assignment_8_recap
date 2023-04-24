import React from 'react';

const Sidebar = () => {
    return (
        <div className='container border-2 border-amber-400'>
            <h2 className='text-center text-2xl border border-neutral-500 m-5 p-5 rounded bg-gray-100'>Spent time on read : <span>min</span></h2>
            <div className='p-5 m-5 border rounded border-neutral-900'>
                <h2 className='text-2xl text-semibold text-center rounded p-5 m-5 bg-gray-200 border border-neutral-900'>Bookmarked Blogs : </h2>
                <p className='text-center rounded border p-5 m-5 border-neutral-900'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='text-center rounded border p-5 m-5 border-neutral-900'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='text-center rounded border p-5 m-5 border-neutral-900'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='text-center rounded border p-5 m-5 border-neutral-900'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='text-center rounded border p-5 m-5 border-neutral-900'>Master Microsoft Power Platform and Become an In-Demand!</p>

            </div>
        </div>
    );
};

export default Sidebar;