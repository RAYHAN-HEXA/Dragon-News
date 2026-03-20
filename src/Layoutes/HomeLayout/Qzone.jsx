import React from 'react';
import classImg from '../../../src/assets/class.png'
import SwimmingImg from '../../../src/assets/swimming.png'
import playGroundImg from '../../../src/assets/playground.png'
import bgImg from '../../../src/assets/bg.png'
const Qzone = () => {
    return (
        <div>
            <div className='bg-base-200 mt-5 ml-5 p-5' >
            <h1 className='font-bold text-2xl mb-5' >Qzone</h1>
            <div className='space-y-5' >
<img src={classImg} alt="" />
<img src={SwimmingImg} alt="" />
<img src={playGroundImg} alt="" />
            </div>
        </div>
        <div className='mt-2 ml-5 w-full ' >
            <img src={bgImg} alt="" />
        </div>
        </div>
    );
};

export default Qzone;