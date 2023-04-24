import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container justify-center justify-items-center'>
            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
                </div>

                <div className="w-12">
                    <img className='rounded-full' src="https://i.ibb.co/KGDg0GF/7474-n.png" />
                </div>

            </div>
        </div>
    );
};

export default Header;




