import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='space-y-5 ml-5' >
            <h2 className='font-bold  mt-5 '>Find Us On</h2>
            <div className="div">
                <button className="justify-start btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full bg-base-100"> <FaFacebook></FaFacebook> Facebook</button>
                <button className="justify-start btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full bg-base-100"> <FaTwitter></FaTwitter> Twitter</button>
                <button className="justify-start btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full bg-base-100"> <FaInstagram></FaInstagram> Instagram</button>
                
            </div>
        </div>
    );
};

export default FindUs;