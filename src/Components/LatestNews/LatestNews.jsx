import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 my-5 p-2'>
            <p className='bg-secondary px-2 py-3 p-2 ' >Latest</p>
        <Marquee className='flex gap-4' pauseOnHover={true} speed={50} >
                <p className='font-bold' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quod nobis tempore, asperiores r</p>
                <p className='font-bold' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quod nobis tempore, asperiores r</p>
                <p className='font-bold' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quod nobis tempore, asperiores r</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;