import React from 'react';
import img from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-8' >
            <img className='w-[350px]' src={img} alt="Logo" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Navbar;