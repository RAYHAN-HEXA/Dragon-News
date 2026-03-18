import React from 'react';
import img from '../../assets/logo.png'
import { format } from 'date-fns';
const Navbar = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-8' >
            <img className='w-[400px]' src={img} alt="Logo" />
            <p className='text-accent text-semi-bold'>Journalism Without Fear or Favour</p>
          <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
           
        </div>
    );
};

export default Navbar;